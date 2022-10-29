import { useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Select from "react-select";
import {
  Tab,
  Row,
  Col,
  Nav,
  Card,
  ModalBody,
  ModalTitle,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
} from "react-bootstrap";
import { useFormik } from "formik";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { LedgerAccountsList } from "../../../Data/App/LedgerAccountsList";
import { LedgerAccountTypesList } from "../../../Data/App/LedgerAccountTypesList";
import { AppDispatch } from "../../../Redux/Store";
import {
  createLedgerAccounts,
  getLedgerAccounts,
  useLedgerAccountList,
  getLedgerAccountTypes,
  useLedgerAccountTypeList,
  deleteLedgerAccountById,
  updateLedgerAccountById,
} from "./ledgerAccountSetupSlice";
import "./LedgerSetup.scss";
import ConformationPopup from "../../../Modals/ConformationPopup/ConformationPopup";
import CreateLedgerAccountOrAccountTypeModal from "./CreateModal";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  type: Yup.string().required("Type is required"),
  defaultAmount: Yup.string().min(0).required("Default Amount is required"),
});

const createLedgerInputs = [
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
  {
    name: "type",
    label: "Type",
    inputType: "select",
    placeholder: "Type account type...",
  },
  {
    name: "defaultAmount",
    label: "Default Amount",
    inputType: "input",
    placeholder: "Type Default Amount...",
  },
];

function LedgerSetup() {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ledgerAccountsList } = useLedgerAccountList();
  const { ledgerAccountTypes } = useLedgerAccountTypeList();
  const [ledgerAccountsFetched, setLedgerAccountsFetched] =
    useState<boolean>(false);
  const [accountTypeFetched, setAccountTypeFetched] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [deleteModalId, setDeleteModalId] = useState<string>("");

  const initialValues: any = {
    name: "",
    description: "",
    type: "",
    defaultAmount: "",
  };

  const getAllLedgers = async () => {
    try {
      await dispatch(getLedgerAccounts() as any).unwrap();
    } catch (error: any) {
      Swal.fire({
        title: "ERROR!!!",
        text: error?.message || "Something Went wrong",
        allowOutsideClick: false,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getallLedgerAccountTypes = async () => {
    try {
      await dispatch(getLedgerAccountTypes() as any).unwrap();
    } catch (error: any) {
      Swal.fire({
        title: "ERROR!!!",
        text: error?.message || "Something Went wrong",
        allowOutsideClick: false,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllLedgers();
  }, [ledgerAccountsFetched]);

  useEffect(() => {
    getallLedgerAccountTypes();
  }, [accountTypeFetched]);

  const onSubmit = async () => {
    setSubmitting(true);
    try {
      let payload: any = Object.assign({}, values);
      if (isEditMode) {
        await dispatch(
          updateLedgerAccountById({
            ...payload,
            defaultAmount: +payload.defaultAmount,
          } as any)
        );
        setLedgerAccountsFetched(!ledgerAccountsFetched);
        setValues({ ...initialValues });
        resetForm();
        setIsEditMode(false);
        return setOpenModal(false);
      }
      await dispatch(
        createLedgerAccounts({
          ...payload,
          defaultAmount: +payload.defaultAmount,
        } as any)
      );
      resetForm();
      setLedgerAccountsFetched(!ledgerAccountsFetched);
      setOpenModal(false);
      setIsEditMode(false);
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
    resetForm,
    setValues,
    isSubmitting,
    setSubmitting,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const deleteHandler = async () => {
    setIsLoading(true);
    try {
      await dispatch(deleteLedgerAccountById(deleteModalId));
      setLedgerAccountsFetched(!ledgerAccountsFetched);
      setDeleteModalId("");
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  };

  const updateLedgerAccountTypes = useMemo(() => {
    return ledgerAccountTypes.map((value) => ({
      value: value._id,
      label: value.name,
    }));
  }, [ledgerAccountTypes]);

  const onEditRow = (row) => {
    setOpenModal(true);
    setIsEditMode(true);
    setValues({ ...row, type: row.type });
  };

  const onHideModal = () => {
    setValues({ ...initialValues });
    resetForm();
    setOpenModal(false);
  };
  return (
    <>
      <Row>
        <Col xl={12}>
          <Card className="card-bg">
            <Card.Body>
              <div className="panel panel-secondary">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="tab-name">
                    <Nav
                      variant="pills"
                      className="panel-tabs nav-tabs panel-secondary"
                    >
                      {[
                        {
                          key: "first",
                          label: "Ledger Account",
                          icon: "fe-user",
                        },
                        {
                          key: "second",
                          label: "Ledger Type",
                          icon: "fe-calendar",
                        },
                      ].map((v) => (
                        <Nav.Item key={v.key}>
                          <Nav.Link eventKey={v.key}>
                            <i className={`fe ${v.icon} me-1`}></i>
                            {v.label}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                  <div className="tab-data">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <LedgerAccountsList
                          ledgerAccountsList={ledgerAccountsList}
                          onClick={() => setOpenModal(true)}
                          onEdit={onEditRow}
                          onDelete={(id) => setDeleteModalId(id)}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <LedgerAccountTypesList
                          ledgerAccountTypes={ledgerAccountTypes}
                          onSetAccountTypeFetched={() =>
                            setAccountTypeFetched(!accountTypeFetched)
                          }
                        />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* create ledger acocunt modal */}

      <CreateLedgerAccountOrAccountTypeModal
        openModal={openModal}
        isEditMode={isEditMode}
        modalClose={() => setOpenModal(false)}
        handleSubmit={handleSubmit}
        title={`${isEditMode ? "Edit Ledger account" : "Add Ledger account"}`}
        onHide={onHideModal}
        isSubmitting={isSubmitting}
      >
        <>
          {createLedgerInputs.map((v) => (
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
                {v.inputType === "select" && (
                  <>
                    <label className="form-label">{v.label}</label>
                    <Select
                      classNamePrefix="Select"
                      options={updateLedgerAccountTypes}
                      id={v.name}
                      value={updateLedgerAccountTypes.find(
                        (option) => option.value == String(values.type)
                      )}
                      placeholder={v.placeholder}
                      name={v.name}
                      onChange={(selectedOption: any) => {
                        handleChange("type")(selectedOption?.value);
                      }}
                    />
                    <p style={{ color: "red" }}>
                      {touched[v.name] && (errors[v.name] as any)}
                    </p>
                  </>
                )}
              </div>
            </Col>
          ))}
        </>
      </CreateLedgerAccountOrAccountTypeModal>
      {!!deleteModalId && <ConformationPopup smallmodalClose={deleteHandler} />}
    </>
  );
}

export default LedgerSetup;
// 1- adding a page under setup -- we call it (ledger setup)
// 2- in ledger setup page (two tabs -
// 1- Ledger Account >>>>> call Ledger account API (CRUD)
// 2- Ledger Type >>> call the Ledger type API (CRUD)
