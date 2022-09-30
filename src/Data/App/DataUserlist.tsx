import React from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination, } from "react-table";
import { Card, Col, InputGroup, Form, Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

// pics

import pic1 from '../../assets/images/users/16.jpg'
import pic2 from '../../assets/images/users/15.jpg'
import pic3 from '../../assets/images/users/4.jpg'
import pic4 from '../../assets/images/users/18.jpg'
import pic5 from '../../assets/images/users/19.jpg'
import pic6 from '../../assets/images/users/21.jpg'
import pic7 from '../../assets/images/users/12.jpg'
import pic8 from '../../assets/images/users/1.jpg'
import pic9 from '../../assets/images/users/12.jpg'
import pic10 from '../../assets/images/users/15.jpg'
import pic11 from '../../assets/images/users/12.jpg'
import pic12 from '../../assets/images/users/4.jpg'

export const COLUMNS = [
  {
    Header: "S NO",
    accessor: "SNO",
    className: "text-center ",
  },
  {
    Header: "PHOTO",
    accessor: "PHOTO",
    className: "text-center ",

  },
  {
    Header: "NAME",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "DATE",
    accessor: "DATE",
    className: "text-center ",
  },
  {
    Header: "ACTION",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const DATATABLE = [
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic1} className="avatar avatar-md br-7" alt="" />,
    NAME: "Adam Cotter",
    DATE: "	09 Dec 2017",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap'>
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic2} className="avatar avatar-md br-7" alt="" />,
    NAME: "Pauline Noble",
    DATE: "	26 Jan 2018",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic3} className="avatar avatar-md br-7" alt="" />,
    NAME: "Sherilyn Metzel",
    DATE: "	27 Jan 2018",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic4} className="avatar avatar-md br-7" alt="" />,
    NAME: "Terrie Boaler",
    DATE: "	20 Jan 2018",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic5} className="avatar avatar-md br-7" alt="" />,
    NAME: "Rutter Pude",
    DATE: "13 Jan 2018",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic6} className="avatar avatar-md br-7" alt="" />,
    NAME: "Clifford Benjamin",
    DATE: "25 Jan 2018",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic7} className="avatar avatar-md br-7" alt="" />,
    NAME: "Thedric Romans",
    DATE: "	12 Jan 2018",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic8} className="avatar avatar-md br-7" alt="" />,
    NAME: "Haily Carthew",
    DATE: "	27 Jan 2018",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic9} className="avatar avatar-md br-7" alt="" />,
    NAME: "Dorothea Joicey",
    DATE: "	12 Dec 2017",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic10} className="avatar avatar-md br-7" alt="" />,
    NAME: "Mikaela Pinel",
    DATE: "10 Dec 2017",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic11} className="avatar avatar-md br-7" alt="" />,
    NAME: "Donnell Farries",
    DATE: "	03 Dec 2017",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic12} className="avatar avatar-md br-7" alt="" />,
    NAME: "Letizia Puncher",
    DATE: "09 Dec 2017",
  },
];
export const UserList = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
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
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Col lg={12} xl={12} >
        <InputGroup className="mb-5">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <InputGroup.Text className="btn btn-primary">
            <i className="fa fa-search" aria-hidden="true"></i>
          </InputGroup.Text>
        </InputGroup>
        <Card>
          <Card.Header className="border-bottom-0 p-4">
            <Card.Title>1 - 30 of 546 users</Card.Title>
            <div className="page-options ms-auto">
              <Form.Select className="form-control select2 w-100">
                <option value="asc">Latest</option>
                <option value="desc">Oldest</option>
              </Form.Select>
            </div>
          </Card.Header>
          <div className="e-table px-5 pb-5">
            <div className="table-responsive ">

              <div className="d-flex">
                <select
                  className=" mb-4 table-border me-1"
                  value={pageSize}
                  // onClick={()=>{getRandomUppercaseChar()}}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>

              </div>
              <table
                {...getTableProps()}
                className="table table-bordered text-nowrap mb-0"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          className={column.className}
                        >
                          <span className="tabletitle">{column.render("Header")}</span>
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
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
          </div>
        </Card>

      </Col>

    </>
  );
};
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
      className="form-control"
      placeholder="Search..."
    />
  );
};
