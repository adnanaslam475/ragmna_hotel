import React from "react";
import {
  Tab,
  Row,
  Col,
  Nav,
  Card,
  Accordion,
  Form,
  Collapse,
  Dropdown,
  ButtonGroup,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserList } from "../../../Data/App/DataUserlist";
import "./HKMaintenance.scss";

const tableData = [
  {
    id: 1,
    starClass: "inbox-started",
    bookMark: "",
    subject: "Tim Reid, S P N",
    description: "Boost Your Website Traffic ",
    date: "April 01",
    className: "",
  },
  {
    id: 2,
    starClass: "inbox-started",
    bookMark: "",
    subject: "Freelancer.com",
    description: "Stop wasting your visitors",
    date: "May 23",
    className: "",
  },
  {
    id: 3,
    starClass: "",
    bookMark: "text-danger",
    subject: "PHPClass",
    description: "Added a new className: Login Class Fast Site",
    date: "9:27 AM",
    className: "unread",
  },
  {
    id: 4,
    starClass: "",
    bookMark: "",
    subject: "Facebook",
    description: "Somebody requested a new password",
    date: "June 13",
    className: "",
  },
  {
    id: 5,
    starClass: "inbox-started",
    bookMark: "",
    subject: "Skype",
    description: "Password successfully changed",
    date: "March 24",
    className: "",
  },
  {
    id: 6,
    starClass: "inbox-started",
    bookMark: "",
    subject: "Google+",
    description: "alireza, do you know",
    date: "March 09",
    className: "",
  },
  {
    id: 7,
    starClass: "inbox-started",
    bookMark: "",
    subject: "WOW Slider ",
    description: "New WOW Slider v7.8 - 67% off",
    date: "March 14",
    className: "",
  },
  {
    id: 8,
    starClass: "inbox-started",
    bookMark: "",
    subject: "LinkedIn Pulse",
    description: "The One Sign Your Co-Worker Will Stab",
    date: "Feb 19",
    className: "",
  },
  {
    id: 9,
    starClass: "",
    bookMark: "",
    subject: "Google Webmaster",
    description: "Improve the search presence of WebSite",
    date: "March 15",
    className: "unread",
  },
  {
    id: 10,
    starClass: "",
    bookMark: "",
    subject: "JW Player",
    description: "Last Chance: Upgrade to Pro for",
    date: "March 15",
    className: "",
  },
  {
    id: 11,
    starClass: "",
    bookMark: "",
    subject: "Drupal Community",
    description: "Welcome to the Drupal Community",
    date: "March 04",
    className: "",
  },
  {
    id: 12,
    starClass: "inbox-started",
    bookMark: "",
    subject: "Zoosk",
    description: "7 new singles we think you'll like",
    date: "May 14",
    className: "",
  },
  {
    id: 13,
    starClass: "",
    bookMark: "text-danger",
    subject: "LinkedIn",
    description: "Alireza: Nokia Networks, System Group and",
    date: "February 25",
    className: "",
  },
  {
    id: 14,
    starClass: "",
    bookMark: "",
    subject: "Facebook",
    description: "Your account was recently logged into",
    date: "March 14",
    className: "",
  },
  {
    id: 15,
    starClass: "",
    bookMark: "",
    subject: "Twitter",
    description: "Your Twitter password has been changed",
    date: "April 07",
    className: "",
  },
  {
    id: 16,
    starClass: "",
    bookMark: "",
    subject: "InternetSeer",
    description: "Performance Report",
    date: "July 14",
    className: "",
  },
  {
    id: 17,
    starClass: "",
    bookMark: "text-danger",
    subject: "Bertina",
    description: "IMPORTANT: Don't lose your domains!",
    date: "June 16",
    className: "",
  },
  {
    id: 18,
    starClass: "inbox-started",
    bookMark: "text-danger",
    subject: "Laura Gaffin, S P N ",
    description: "Your Website On Google (Higher Rankings Are Better)",
    date: "August 10",
    className: "",
  },
  {
    id: 19,
    starClass: "",
    bookMark: "",
    subject: "Facebook",
    description: "Alireza Zare Login faild",
    date: "feb 14",
    className: "",
  },
  {
    id: 20,
    starClass: "inbox-started",
    bookMark: "",
    subject: "AddMe.com",
    description: "Submit Your Website to the AddMe Business Directory",
    date: "August 10",
    className: "",
  },
  {
    id: 21,
    starClass: "",
    bookMark: "",
    subject: "Terri Rexer, S P N",
    description: "Forget Google AdWords: Un-Limited Clicks fo",
    date: "April 14",
    className: "",
  },
];

const HKMaintenance = () => {
  return (
    <div>
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
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <i className="fe fe-user me-1"></i>HK List
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <i className="fe fe-calendar me-1"></i>Task Technology
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <i className="fe fe-settings me-1"></i>Task Type
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="four">
                          <i className="fe fe-user me-1"></i>Note Types
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="five">
                          <i className="fe fe-calendar me-1"></i>Maintenance Reason
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="tab-data">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <UserList />
                        {/* <ReservationList /> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col xl={12}>
                            <Card className="card-bg">
                              <Card.Body className="p-6">
                                <div className="inbox-body">
                                  <div className="mail-option">
                                    <ButtonGroup>
                                      <Link
                                        to="#"
                                        className="btn mini tooltips p-1"
                                      >
                                        <i className=" fa fa-refresh"></i>
                                      </Link>
                                    </ButtonGroup>
                                    <ButtonGroup className="hidden-phone">
                                      <Dropdown>
                                        <Dropdown.Toggle
                                          className="py-2 bg-transparent"
                                          variant="light"
                                          size="sm"
                                        >
                                          More
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item to="#">
                                            <i className="fa fa-pencil me-2"></i>{" "}
                                            Mark as Read
                                          </Dropdown.Item>
                                          <Dropdown.Item to="#">
                                            <i className="fa fa-ban me-2"></i>{" "}
                                            Spam
                                          </Dropdown.Item>
                                          <Dropdown.Divider />
                                          <Dropdown.Item to="#">
                                            <i className="fa fa-trash-o me-2"></i>{" "}
                                            Delete
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </ButtonGroup>
                                    <ul className="unstyled inbox-pagination">
                                      <li>
                                        <span className="fs-13">
                                          1-50 of 234
                                        </span>
                                      </li>
                                      <li>
                                        <Link className="np-btn" to="#">
                                          <i className="fa fa-angle-right pagination-right"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="table-responsive">
                                    <Table className="table-inbox table-hover text-nowrap mb-0">
                                      <>
                                        <tbody>
                                          {tableData.map((item) => (
                                            <tr
                                              className={item.className}
                                              key={item.id}
                                            >
                                              <td className="inbox-small-cells">
                                                <Form.Check
                                                  type="checkbox"
                                                  id="custom-check"
                                                  className="mb-0 ms-6"
                                                />
                                              </td>
                                              <td className="inbox-small-cells">
                                                <i
                                                  className={`fa fa-star ${item.starClass}`}
                                                ></i>
                                              </td>
                                              <td className="inbox-small-cells">
                                                <i
                                                  className={`fa fa-bookmark ${item.bookMark}`}
                                                ></i>
                                              </td>
                                              <td className="view-message dont-show fw-semibold clickable-row">
                                                <Link
                                                  to={`/Pages/mailread`}
                                                  className="text-dark"
                                                >
                                                  {item.subject}
                                                </Link>
                                              </td>
                                              <td className="view-message clickable-row">
                                                <Link
                                                  to={`/Pages/mailread`}
                                                  className="text-dark"
                                                >
                                                  {item.description}
                                                </Link>
                                              </td>
                                              <td className="view-message text-end fw-semibold clickable-row">
                                                {item.date}
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </>
                                    </Table>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col xl={12}>
                            <Card className="card-bg">
                              <Card.Header>
                                <Card.Title>Accordion Style 3</Card.Title>
                                <Form className="ms-auto">
                                  <Form.Check
                                    type="switch"
                                    label="Show Code"
                                    id="custom-switch"
                                    className="showcode d-flex ms-auto mx-2"
                                  />
                                </Form>
                              </Card.Header>
                              <Card.Body>
                                <Accordion
                                  defaultActiveKey="0"
                                  className="demo-accordion accordionjs m-0"
                                >
                                  <Accordion.Item
                                    eventKey="0"
                                    className="acc_section "
                                  >
                                    <Accordion.Header className="acc_head">
                                      Section 1
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit in
                                      voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim id
                                      est laborum. Fusce aliquet neque et
                                      accumsan fermentum. Aliquam lobortis neque
                                      in nulla tempus, molestie fermentum purus
                                      euismod.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item
                                    eventKey="1"
                                    className="acc_section "
                                  >
                                    <Accordion.Header className="acc_head">
                                      Section 2
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit in
                                      voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim id
                                      est laborum. Fusce aliquet neque et
                                      accumsan fermentum. Aliquam lobortis neque
                                      in nulla tempus, molestie fermentum purus
                                      euismod.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item
                                    eventKey="2"
                                    className="acc_section "
                                  >
                                    <Accordion.Header className="acc_head">
                                      Section 3
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit in
                                      voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim id
                                      est laborum. Fusce aliquet neque et
                                      accumsan fermentum. Aliquam lobortis neque
                                      in nulla tempus, molestie fermentum purus
                                      euismod.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item
                                    eventKey="3"
                                    className="acc_section "
                                  >
                                    <Accordion.Header className="acc_head">
                                      Section 4
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea commodo consequat.
                                      Duis aute irure dolor in reprehenderit in
                                      voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur sint
                                      occaecat cupidatat non proident, sunt in
                                      culpa qui officia deserunt mollit anim id
                                      est laborum. Fusce aliquet neque et
                                      accumsan fermentum. Aliquam lobortis neque
                                      in nulla tempus, molestie fermentum purus
                                      euismod.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                                <Collapse className="mt-2">
                                  <pre>
                                    <code>
                                      {`
 <Accordion defaultActiveKey="0" className="demo-accordion accordionjs m-0">
 <Accordion.Item eventKey="0" className="acc_section ">
   <Accordion.Header className="acc_head">Section 1</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="1" className="acc_section ">
   <Accordion.Header className="acc_head">Section 2</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="2" className="acc_section ">
   <Accordion.Header className="acc_head">Section 3</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="3" className="acc_section ">
   <Accordion.Header className="acc_head">Section 4</Accordion.Header>
   <Accordion.Body>
     Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
   </Accordion.Body>
 </Accordion.Item>
 </Accordion>
`}
                                    </code>
                                  </pre>
                                </Collapse>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="four">
                        <Row>
                          <Col md={6} xl={4}>
                            <Card className="text-primary bg-primary-transparent card-transparent">
                              <Card.Body>
                                <Card.Title>
                                  Primary transparent card title
                                </Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          {/* <!-- COL END --> */}
                          <Col md={6} xl={4}>
                            <Card className="text-secondary bg-secondary-transparent card-transparent">
                              <Card.Body>
                                <Card.Title>
                                  Secondary transparent card title
                                </Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          {/* <!-- COL END --> */}
                          <Col md={6} xl={4}>
                            <Card className="text-success bg-success-transparent card-transparent">
                              <Card.Body>
                                <Card.Title>
                                  Success transparent card title
                                </Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          {/* <!-- COL END --> */}
                          <Col md={6} xl={4}>
                            <Card className="text-danger bg-danger-transparent card-transparent">
                              <Card.Body>
                                <Card.Title>
                                  Danger transparent card title
                                </Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          {/* <!-- COL END --> */}
                          <Col md={6} xl={4}>
                            <Card className="text-info bg-info-transparent card-transparent">
                              <Card.Body>
                                <Card.Title>
                                  Info transparent card title
                                </Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          {/* <!-- COL END --> */}
                          <Col md={6} xl={4}>
                            <Card className="text-warning bg-warning-transparent card-transparent">
                              <Card.Body>
                                <Card.Title>Warning card title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                          {/* <!-- COL END --> */}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="five">
                        <Row className="row-sm">
                          <Col lg={12}>
                            <Card className="card-bg">
                              <Card.Header className="border-bottom-0 custom-card-header">
                                <h6 className="main-content-label mb-0">
                                  Vertical Timeline
                                </h6>
                              </Card.Header>
                              <Card.Body>
                                <div className="vtimeline">
                                  <div className="timeline-wrapper timeline-wrapper-primary">
                                    <div className="avatar avatar-md timeline-badge">
                                      <span className="timeline-icon">
                                        <svg
                                          style={{
                                            width: "25px",
                                            height: "25px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M4,2A2,2 0 0,0 2,4V11C2,11.55 2.22,12.05 2.59,12.42L11.59,21.42C11.95,21.78 12.45,22 13,22C13.55,22 14.05,21.78 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.45 21.77,11.94 21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4V2M11,4L20,13L13,20L4,11V4H11V4H11M6.5,5A1.5,1.5 0 0,0 5,6.5A1.5,1.5 0 0,0 6.5,8A1.5,1.5 0 0,0 8,6.5A1.5,1.5 0 0,0 6.5,5M10.95,10.5C9.82,10.5 8.9,11.42 8.9,12.55C8.9,13.12 9.13,13.62 9.5,14L13,17.5L16.5,14C16.87,13.63 17.1,13.11 17.1,12.55A2.05,2.05 0 0,0 15.05,10.5C14.5,10.5 13.97,10.73 13.6,11.1L13,11.7L12.4,11.11C12.03,10.73 11.5,10.5 10.95,10.5Z"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="timeline-panel">
                                      <div className="timeline-heading">
                                        <h6 className="timeline-title">
                                          Art Ramadani posted a status update
                                        </h6>
                                      </div>
                                      <div className="timeline-body">
                                        <p>
                                          Tolerably earnestly middleton
                                          extremely distrusts she boy now not.
                                          Add and offered prepare how cordial
                                          two promise. Greatly who affixed
                                          suppose but enquire compact prepare
                                          all put. Added forth chief trees but
                                          rooms think may.
                                        </p>
                                      </div>
                                      <div className="timeline-footer d-flex align-items-center flex-wrap">
                                        <i className="fe fe-heart  text-muted me-1"></i>
                                        <span>19</span>
                                        <span className="ms-auto">
                                          <i className="fe fe-calendar text-muted mx-1"></i>
                                          19 Oct 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="timeline-wrapper timeline-inverted timeline-wrapper-secondary">
                                    <div className="avatar avatar-md timeline-badge">
                                      <span className="timeline-icon">
                                        <svg
                                          style={{
                                            width: "26px",
                                            height: "26px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="timeline-panel">
                                      <div className="timeline-heading">
                                        <h6 className="timeline-title">
                                          Job Meeting
                                        </h6>
                                      </div>
                                      <div className="timeline-body">
                                        <p>
                                          You have a meeting at Laborator Office
                                          Today.
                                        </p>
                                      </div>
                                      <div className="timeline-footer d-flex align-items-center flex-wrap">
                                        <i className="fe fe-heart  text-muted me-1"></i>
                                        <span>25</span>
                                        <span className="ms-auto">
                                          <i className="fe fe-calendar text-muted mx-1"></i>
                                          10th Oct 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="timeline-wrapper timeline-wrapper-green">
                                    <div className="avatar avatar-md timeline-badge">
                                      <span className="timeline-icon">
                                        <svg
                                          style={{
                                            width: "25px",
                                            height: "25px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M15.33 11.05C14.17 11.88 13.34 13.14 13.09 14.58L11.55 11.63L7.66 15.5L8 18L6.95 19.06L5.18 15.87L2 14.11L3.06 13.05L5.54 13.4L9.43 9.5L2 5.62L3.41 4.21L12.61 6.33L16.5 2.44C17.08 1.85 18.03 1.85 18.62 2.44C19.2 3.03 19.2 4 18.62 4.56L14.73 8.45L15.33 11.05M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="timeline-panel">
                                      <div className="timeline-heading">
                                        <h6 className="timeline-title">
                                          Arlind Nushi checked in at New York
                                        </h6>
                                      </div>
                                      <div className="timeline-body">
                                        <p>
                                          Alpha 5 has arrived just over a month
                                          after Alpha 4 with some major feature
                                          improvements and a boat load of bug
                                          fixes.
                                        </p>
                                      </div>
                                      <div className="timeline-footer d-flex align-items-center flex-wrap">
                                        <i className="fe fe-heart  text-muted me-1"></i>
                                        <span>19</span>
                                        <span className="ms-auto">
                                          <i className="fe fe-calendar text-muted mx-1"></i>
                                          5th Oct 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                                    <div className="avatar avatar-md timeline-badge">
                                      <span className="timeline-icon">
                                        <svg
                                          style={{
                                            width: "24px",
                                            height: "24px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,11.47L8.5,15H19.5L15.96,10.29Z"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="timeline-panel">
                                      <div className="timeline-heading">
                                        <h6 className="timeline-title">
                                          Eroll Maxhuni uploaded 4 new photos to
                                          album Summer Trip
                                        </h6>
                                      </div>
                                      <div className="timeline-body">
                                        <p>
                                          Pianoforte principles our unaffected
                                          not for astonished travelling are
                                          particular.
                                        </p>
                                        <img
                                          src={require("../../../assets/images/media/1.jpg")}
                                          className="mb-3"
                                          alt="img"
                                        />
                                      </div>
                                      <div className="timeline-footer d-flex align-items-center flex-wrap">
                                        <i className="fe fe-heart  text-muted me-1"></i>
                                        <span>19</span>
                                        <span className="ms-auto">
                                          <i className="fe fe-calendar text-muted mx-1"></i>
                                          27th Sep 2017
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="timeline-wrapper timeline-wrapper-success">
                                    <div className="avatar avatar-md timeline-badge">
                                      <span className="timeline-icon">
                                        <svg
                                          style={{
                                            width: "24px",
                                            height: "24px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M13 17H17V14L22 18.5L17 23V20H13V17M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V14H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="timeline-panel">
                                      <div className="timeline-heading">
                                        <h6 className="timeline-title">
                                          Support Team sent you an email
                                        </h6>
                                      </div>
                                      <div className="timeline-body">
                                        <p>
                                          Etsy doostang zoodles disqus groupon
                                          greplin oooj voxy zoodles, weebly ning
                                          heekya handango imeem plugg dopplr
                                          jibjab, movity jajah plickers sifteo
                                          edmodo ifttt zimbra. Babblely odeo
                                          kaboodle quora plaxo ideeli hulu
                                          weebly balihoo....
                                        </p>
                                        <Link
                                          to="#"
                                          className="btn ripple btn-primary text-white mb-3"
                                        >
                                          Read more
                                        </Link>
                                      </div>
                                      <div className="timeline-footer d-flex align-items-center flex-wrap">
                                        <i className="fe fe-heart  text-muted me-1"></i>
                                        <span>25</span>
                                        <span className="ms-auto">
                                          <i className="fe fe-calendar text-muted mx-1"></i>
                                          25th Sep 2017
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="timeline-wrapper timeline-inverted timeline-wrapper-warning">
                                    <div className="avatar avatar-md timeline-badge">
                                      <span className="timeline-icon">
                                        <svg
                                          style={{
                                            width: "26px",
                                            height: "26px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M10 16.5L16 12L10 7.5M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97Z"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="timeline-panel">
                                      <div className="timeline-heading">
                                        <h6 className="timeline-title">
                                          Mr. Doe shared a video
                                        </h6>
                                      </div>
                                      <div className="timeline-body">
                                        <div className="embed-responsive embed-responsive-16by9 mb-3">
                                          <iframe
                                            className="embed-responsive-item"
                                            title="media1"
                                            src="https://www.youtube.com/embed/XZmGGAbHqa0?rel=0&amp;controls=0&amp;showinfo=0"
                                            allowFullScreen
                                          />
                                        </div>
                                      </div>
                                      <div className="timeline-footer d-flex align-items-center flex-wrap">
                                        <i className="fe fe-heart  text-muted me-1"></i>
                                        <span>32</span>
                                        <span className="ms-auto">
                                          <i className="fe fe-calendar text-muted mx-1"></i>
                                          19th Sep 2017
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="timeline-wrapper timeline-wrapper-dark">
                                    <div className="avatar avatar-md timeline-badge">
                                      <span className="timeline-icon">
                                        <svg
                                          style={{
                                            width: "24px",
                                            height: "24px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M16,14H8V13C8,11.67 10.67,11 12,11C13.33,11 16,11.67 16,13V14M12,6A2,2 0 0,1 14,8A2,2 0 0,1 12,10A2,2 0 0,1 10,8A2,2 0 0,1 12,6Z"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="timeline-panel">
                                      <div className="timeline-heading">
                                        <h6 className="timeline-title">
                                          Sarah Young accepted your friend
                                          request
                                        </h6>
                                      </div>
                                      <div className="timeline-body">
                                        <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipisicing elit. Amet
                                          cupiditate, delectus deserunt
                                          doloribus earum eveniet explicabo fuga
                                          iste magni maxime
                                        </p>
                                      </div>
                                      <div className="timeline-footer d-flex align-items-center flex-wrap">
                                        <i className="fe fe-heart text-muted me-1"></i>
                                        <span>26</span>
                                        <span className="ms-auto">
                                          <i className="fe fe-calendar text-muted mx-1"></i>
                                          15th Sep 2017
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HKMaintenance;
