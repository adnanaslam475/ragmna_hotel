import React, { useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import * as Yup from "yup";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  Card,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  Row,
  ModalFooter,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  createLedgerAccountsType,
  deleteLedgerAccountTypeById,
  updateLedgerAccountsTypeById,
} from "../../components/Setup/LedgerSetup/ledgerAccountSetupSlice";
import { AppDispatch } from "../../Redux/Store";

import { CircularProgress } from "@mui/material";
const validationSchema = Yup.object({
  name: Yup.string().required().required("Name is required"),
  description: Yup.string().required("Description is required"),
});

const createLedgerTypeInputs = [
  {
    name: "name",
    label: "Name",
    inputType: "input",
    placeholder: "Type name...",
  },
  {
    name: "description",
    label: "Description",
    inputType: "input",
    placeholder: "Type Description...",
  },
];

const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
    className: "text-center ",
  },
  {
    Header: "description",
    accessor: "description",
    className: "text-center ",
  },
  {
    Header: "Created Date",
    accessor: "createdAt",
    className: "text-center ",
    Cell: ({ _, value }) => {
      return <span>{moment(value).format("DD-MM-YYYY")}</span>;
    },
  },
  {
    Header: "ACTION",
    accessor: "ACTION",
    className: "text-center ",
    Cell: ({ row, setDeleteModalId, onEditRow }) => {
      return (
        <span className="text-center align-middle">
          <ButtonGroup size="sm" className="flex-nowrap">
            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
              <Button onClick={() => onEditRow(row?.original)}>Edit</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
              <Button onClick={() => setDeleteModalId(row?.original?._id)}>
                <i className="fa fa-trash"></i>
              </Button>
            </OverlayTrigger>
          </ButtonGroup>
        </span>
      );
    },
  },
];

interface LedgerAccountsTypesListProps {
  ledgerAccountTypes: any;
  onSetAccountTypeFetched: () => void;
}

export const LedgerAccountTypesList = ({
  ledgerAccountTypes,
  onSetAccountTypeFetched,
}: LedgerAccountsTypesListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deleteModalId, setDeleteModalId] = useState<string>("");

  const onEditRow = (row) => {
    setOpenModal(true);
    setIsEditMode(true);
    setValues({ ...row, type: row.type });
  };

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: ledgerAccountTypes,
      setDeleteModalId,
      onEditRow,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    page, // use, page or rows
  } = tableInstance;

  const initialValues: any = {
    name: "",
    description: "",
  };

  const onSubmit = async (e) => {
    setSubmitting(true);
    try {
      let payload: any = Object.assign({}, values);
      if (isEditMode) {
        await dispatch(
          updateLedgerAccountsTypeById({
            ...payload,
            defaultAmount: +payload.defaultAmount,
          } as any)
        );
        onSetAccountTypeFetched();
        setIsEditMode(false);
        return setOpenModal(false);
      }
      await dispatch(createLedgerAccountsType(payload as any));
      onSetAccountTypeFetched();
      setOpenModal(false);
      setIsEditMode(false);
      resetForm();
    } catch (error: any) {
      Swal.fire({
        title: "ERROR!!!",
        text: error?.message || "Something Went wrong",
        allowOutsideClick: false,
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const {
    handleChange,
    handleSubmit,
    values,
    setValues,
    isSubmitting,
    setErrors,
    handleBlur,
    setSubmitting,
    errors,
    resetForm,
    touched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  console.log("errorserrors", errors);
  const deleteHandler = async () => {
    setIsLoading(true);
    try {
      const res = await dispatch(deleteLedgerAccountTypeById(deleteModalId));
      onSetAccountTypeFetched();
      setDeleteModalId("");
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Col lg={12} xl={12}>
        <Card>
          <Card.Header className="border-bottom-0 p-4">
            <div className="page-options ms-auto">
              <Button variant="primary" onClick={() => setOpenModal(true)}>
                Create
              </Button>
            </div>
          </Card.Header>
          <div className="e-table px-5 pb-5">
            <div className="table-responsive ">
              <table
                {...getTableProps()}
                className="table table-bordered text-nowrap mb-0"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          className={column.className}
                        >
                          <span className="tabletitle">
                            {column.render("Header")}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr className="text-center" {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </Col>
      {/* create ledgger account type modal */}
      <Modal
        size="lg"
        show={openModal}
        onHide={() => {
          setValues({ ...initialValues });
          resetForm();
          setOpenModal(false);
        }}
      >
        <ModalHeader>
          <ModalTitle>{isEditMode ? "Edit" : "Add"} Ledger account</ModalTitle>
          <span
            className="d-flex ms-auto"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <i className="fe fe-x ms-auto"></i>
          </span>
        </ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Row className="section p-4 mb-4">
              {createLedgerTypeInputs.map((v) => (
                <Col key={v.label} lg={6}>
                  <div className="control-group form-group">
                    {v.inputType === "input" && (
                      <>
                        <label className="form-label">{v.label}</label>
                        <input
                          type="text"
                          className={"form-control required"}
                          placeholder={v.placeholder}
                          name={v.name}
                          id={v.name}
                          onKeyUp={handleBlur}
                          value={values[v.name]}
                          onChange={handleChange}
                        />
                        <p style={{ color: "red" }}>
                          {touched[v.name] && (errors[v.name] as any)}
                        </p>
                      </>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="d-flex"
              onClick={() => ""}
            >
              {isSubmitting ? (
                <CircularProgress
                  style={{ color: "white", margin: "2px" }}
                  size={20}
                />
              ) : (
                <>{isEditMode ? "Update" : "Add"}</>
              )}
            </Button>
          </ModalFooter>
        </form>
      </Modal>
      {/* // delete account type modal */}
      <Modal
        size="sm"
        show={!!deleteModalId}
        onHide={() => {
          setDeleteModalId("");
        }}
      >
        <ModalHeader>
          <ModalTitle>Delete</ModalTitle>
          <span className="d-flex ms-auto" onClick={() => setDeleteModalId("")}>
            <i className="fe fe-x ms-auto"></i>
          </span>
        </ModalHeader>
        <ModalBody>Are you sure you want to delete it?</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setDeleteModalId("")}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={deleteHandler}
            disabled={isLoading}
            className="d-flex"
          >
            {isLoading ? (
              <CircularProgress
                style={{ color: "white", margin: "2px" }}
                size={20}
              />
            ) : (
              "Delete"
            )}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
