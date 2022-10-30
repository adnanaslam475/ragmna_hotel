import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import moment from "moment";
import {
  Card,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
  ButtonGroup,
} from "react-bootstrap";
import { CircularProgress } from "@mui/material";

const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
    className: "text-center ",
  },
  {
    Header: "Description",
    accessor: "description",
    className: "text-center ",
  },
  {
    Header: "Created Date",
    accessor: "createdAt",
    className: "text-center ",
    Cell: ({ row, value }) => {
      return <span>{moment(value).format("DD-MM-YYYY")}</span>;
    },
  },
  {
    Header: "ACTION",
    accessor: "ACTION",
    className: "text-center ",
    Cell: ({ row, onClickDelete, onClickEdit }) => {
      return (
        <span className="text-center align-middle">
          <ButtonGroup size="sm" className="flex-nowrap">
            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
              <Button onClick={() => onClickEdit(row?.original)}>Edit</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
              <Button onClick={() => onClickDelete(row?.original?._id)}>
                <i className="fa fa-trash"></i>
              </Button>
            </OverlayTrigger>
          </ButtonGroup>
        </span>
      );
    },
  },
];

interface LedgerAccountsListProps {
  ledgerAccountsList: any;
  onClick: () => void;
  onEdit: (id) => void;
  onDelete: (id) => void;
  isLoading: boolean;
}

export const LedgerAccountsList = ({
  ledgerAccountsList,
  onClick,
  onEdit,
  onDelete,
  isLoading,
}: LedgerAccountsListProps) => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: ledgerAccountsList,
      onClickDelete: onDelete,
      onClickEdit: onEdit,
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
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <>
      <Col lg={12} xl={12}>
        <Card>
          <Card.Header className="border-bottom-0 p-4">
            {/* <Card.Title>1 - 30 of 546 users</Card.Title> */}
            <div className="page-options ms-auto">
              <Button variant="primary" onClick={onClick}>
                Create
              </Button>
            </div>
          </Card.Header>
          <div className="e-table px-5 pb-5">
            {/* {!isLoading ? 
            <CircularProgress size={30} color='primary' /> : */}
            <div className="table-responsive " >
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
                          {/* <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <i className="fa fa-angle-down"></i>
                              ) : (
                                <i className="fa fa-angle-up"></i>
                              )
                            ) : (
                              ""
                            )}
                          </span> */}
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
              <div className="d-flex mt-4 ">
                <span className="">
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <span className="ms-auto ">
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    {" Previous "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" << "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" < "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" > "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" >> "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    {" Next "}
                  </Button>
                </span>
              </div>
            </div>
            {/* } */}
          </div>
        </Card>
      </Col>
    </>
  );
};
