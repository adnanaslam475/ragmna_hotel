import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import "./Header.scss";
import { Link } from "react-router-dom";
import {
  FormControl,
  Nav,
  Modal,
  Row,
  Col,
  Dropdown,
  Navbar,
  InputGroup,
} from "react-bootstrap";
import { useGlobalProperty } from "../../Redux/globalReducer";

const SideMenuIcon: any = () => {
  //leftsidemenu
  document.querySelector(".app")?.classList.toggle("sidenav-toggled");
};

// Darkmode
const DarkMode: any = () => {
  document.querySelector(".app")?.classList.toggle("dark-mode");
};

const RightSideBar: any = () => {
  document.querySelector(".sidebar-right")?.classList.toggle("sidebar-open");
};
const Header = () => {
  const { property } = useGlobalProperty();

  useEffect(() => {
    if (property) {
      console.log(property);
    }
  }, [property]);

  document.querySelector(".main-content")?.addEventListener("click", () => {
    document.querySelector(".search-result")?.classList.add("d-none");
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.Header}>
      <div className="header sticky app-header header1">
        <div className="container-fluid main-container">
          <div className="d-flex">
            <Link
              aria-label="Hide Sidebar"
              className="app-sidebar__toggle"
              data-bs-toggle="sidebar"
              to="#"
              onClick={() => SideMenuIcon()}
            />
            <Link className="logo-horizontal " to={`/Dashboard`}>
              <img
                src={require("../../assets/images/brand/logo.png")}
                className="header-brand-img desktop-logo"
                alt="logo"
              />
              <img
                src={require("../../assets/images/brand/logo-3.png")}
                className="header-brand-img light-logo1"
                alt="logo"
              />
            </Link>
            <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
              <Dropdown className="dropdown d-none">
                <Link to="#" className="nav-link icon ">
                  <i className="fe fe-search"></i>
                </Link>
                <Dropdown.Menu className="header-search dropdown-menu-start ">
                  <InputGroup className="input-group w-100 p-2">
                    <FormControl type="text" placeholder="Search...." />
                    <InputGroup.Text className="btn btn-primary">
                      <i className="fe fe-search" aria-hidden="true"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Dropdown.Menu>
              </Dropdown>
              <Navbar.Toggle className="d-lg-none ms-auto header2">
                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
              </Navbar.Toggle>

              <div className="responsive-navbar p-0">
                <Navbar.Collapse className="" id="navbarSupportedContent-4">
                  <div className="d-flex order-lg-2">
                    <Dropdown className="d-lg-none d-flex">
                      <Dropdown.Toggle
                        href="#"
                        className="nav-link icon no-caret"
                      >
                        <i className="fe fe-search"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="header-search dropdown-menu-start">
                        <InputGroup className="w-100 p-2">
                          <FormControl type="text" placeholder="Search...." />
                          <InputGroup.Text>
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="d-flex country">
                      <Link
                        to="#"
                        onClick={handleShow}
                        className="nav-link icon text-center"
                      >
                        <i className="fe fe-globe"></i>
                        <span className="fs-16 ms-2 d-none d-xl-block">
                          English
                        </span>
                      </Link>
                      <Modal
                        className="modal fade"
                        show={show}
                        onHide={handleClose}
                        centered
                      >
                        <Modal.Header>
                          <Modal.Title as="h6">Choose Country</Modal.Title>
                          <span
                            className="d-flex ms-auto"
                            onClick={handleClose}
                          >
                            <i className="fe fe-x ms-auto"></i>
                          </span>
                        </Modal.Header>
                        <Modal.Body>
                          <Row as="ul" className="p-3">
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block active"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/us_flag.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                USA
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/italy_flag.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                Italy
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/spain_flag.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                Spain
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/india_flag.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                India
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/french_flag.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                French
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/russia_flag.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                Russia
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/germany_flag.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                Germany
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/argentina.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                Argentina
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/malaysia.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                Malaysia
                              </Link>
                            </Col>
                            <Col lg={6} as="li" className="mb-2">
                              <Link
                                to="#"
                                className="btn btn-country btn-lg btn-block"
                              >
                                <span className="country-selector">
                                  <img
                                    alt=""
                                    src={require("../../assets/images/flags/turkey.jpg")}
                                    className="me-3 language"
                                  />
                                </span>
                                Turkey
                              </Link>
                            </Col>
                          </Row>
                        </Modal.Body>
                      </Modal>
                    </div>

                    {/* Dark Mode */}

                    <div className="dropdown  d-flex">
                      <Nav.Link
                        className="nav-link icon theme-layout nav-link-bg layout-setting"
                        onClick={() => DarkMode()}
                      >
                        <span className="dark-layout">
                          <i className="fe fe-moon"></i>
                        </span>
                        <span className="light-layout">
                          <i className="fe fe-sun"></i>
                        </span>
                      </Nav.Link>
                    </div>

                    {/* Notification */}

                    <Dropdown className="d-flex notifications">
                      <Dropdown.Toggle
                        variant=""
                        className="nav-link icon no-caret"
                      >
                        <i className="fe fe-bell"></i>
                        <span className=" pulse"></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">
                              Notifications
                            </h6>
                          </div>
                        </div>
                        <div className="notifications-menu">
                          <Dropdown.Item
                            className="d-flex"
                            href={`/Pages/notificationlist`}
                          >
                            <div className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                              <i className="fe fe-mail"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">
                                New Application received
                              </h5>
                              <span className="notification-subtext">
                                3 days ago
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`/Pages/notificationlist`}
                          >
                            <div className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                              <i className="fe fe-check-circle"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">
                                Project has been approved
                              </h5>
                              <span className="notification-subtext">
                                2 hours ago
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`/Pages/notificationlist`}
                          >
                            <div className="me-3 notifyimg  bg-success brround box-shadow-success">
                              <i className="fe fe-shopping-cart"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">
                                Your Product Delivered
                              </h5>
                              <span className="notification-subtext">
                                30 min ago
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`/Pages/notificationlist`}
                          >
                            <div className="me-3 notifyimg bg-pink brround box-shadow-pink">
                              <i className="fe fe-user-plus"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">
                                Friend Requests
                              </h5>
                              <span className="notification-subtext">
                                1 day ago
                              </span>
                            </div>
                          </Dropdown.Item>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Dropdown.Item
                          href={`/Pages/notificationlist`}
                          className="dropdown-item text-center p-3 text-muted"
                        >
                          View all Notification
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Right Side-bar */}

                    <div
                      className="dropdown d-flex header-settings"
                      onClick={() => RightSideBar()}
                    >
                      <Link
                        to="#;"
                        className="nav-link icon"
                        data-bs-toggle="sidebar-right"
                        data-target=".sidebar-right"
                      >
                        <i className="fe fe-align-right"></i>
                      </Link>
                    </div>

                    {/* Profile  */}

                    <Dropdown className="d-flex profile-1">
                      <Dropdown.Toggle
                        variant=""
                        className="nav-link leading-none d-flex no-caret"
                      >
                        {/* <img
                          src={require("../../assets/images/users/21.jpg")}
                          alt="profile-user"
                          className="avatar  profile-user brround cover-image"
                        /> */}
                        <i className="profile-user-header  icon fe fe-user" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading">
                          <div className="text-center">
                            <h5 className="text-dark mb-0 fs-14 fw-semibold">
                              Percy Kewshun
                            </h5>
                            <small className="text-muted">Senior Admin</small>
                          </div>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Dropdown.Item
                          className="dropdown-item"
                          // href={`/Pages/profile`}
                        >
                          <Link to={"/pages/profile"} className="p-0">
                            <i className="dropdown-icon fe fe-user"></i> Profile
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          href={`/Pages/mailinbox`}
                        >
                          <i className="dropdown-icon fe fe-mail"></i> Inbox
                          <span className="badge bg-danger rounded-pill float-end">
                            5
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          href={`/Authentication/lockscreen`}
                        >
                          <i className="dropdown-icon fe fe-lock"></i>
                          Lockscreen
                        </Dropdown.Item>

                        <Dropdown.Item
                          className="dropdown-item"
                          href={`/`}
                          onClick={() => {
                            localStorage.clear();
                          }}
                        >
                          <i className="dropdown-icon fe fe-alert-circle"></i>
                          Sign out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Navbar.Collapse>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
