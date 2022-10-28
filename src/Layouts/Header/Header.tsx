import React, { useEffect, useState, useMemo } from "react";
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
  Badge,
  Navbar,
  InputGroup,
  Form,
  Card,
} from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { MENUITEMS } from "../Sidebar/Sidemenu";
import Select from "react-select";
import {
  getProperties,
  usePropertyList,
} from "../../components/Setup/PropertySetup/propertySetupSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/Store";
import {
  saveGlobalProperty,
  useGlobalProperty,
} from "../../Redux/globalReducer";

const SideMenuIcon: any = () => {
  //leftsidemenu
  document.querySelector(".app")?.classList.toggle("sidenav-toggled");
};

// Darkmode
const DarkMode: any = () => {
  document.querySelector(".app")?.classList.toggle("dark-mode");
};

// FullScreen
var elem: any = document.documentElement;
var i = true;
const Fullscreen: any = (vale: any) => {
  switch (vale) {
    case true:
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      i = false;
      break;
    case false:
      document.exitFullscreen();
      i = true;
      break;
  }
};

// SwitcherMenu

const SidSwitcherIcon: any = () => {
  //leftsidemenu
  document.querySelector(".demo_changer")?.classList.toggle("active");
  let Rightside: any = document.querySelector(".demo_changer");
  Rightside.style.right = "0px";
};

const RightSideBar: any = () => {
  //leftsidemenu

  //rightsidebar
  document.querySelector(".sidebar-right")?.classList.toggle("sidebar-open");
  //swichermainright
};
const Header = () => {
  const { property } = useGlobalProperty();
  const { propertyList } = usePropertyList();
  const dispatch = useDispatch<AppDispatch>();

  const getAllProperties = async () => {
    try {
      const response: any = await dispatch(getProperties()).unwrap();
    } catch (error: any) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (selectedProperty.value) {
  //     const response: any = dispatch(saveGlobalProperty(selectedProperty));
  //   }
  // }, [selectedProperty]);
  // useEffect(() => {
  //   getAllProperties();
  // }, []);
  useEffect(() => {
    if (property) {
      console.log(property);
    }
  }, [property]);
  const getPropertyName = () => {
    if (!propertyList) {
      return [];
    }
    const data = propertyList.map((item: any, index: any) => ({
      value: `${item["_id"]}`,
      label: `${item["name"]}`,
    }));
    return [...data];
  };

  document.querySelector(".main-content")?.addEventListener("click", () => {
    document.querySelector(".search-result")?.classList.add("d-none");
  });

  // For CountrySelector Modal
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [searchval, setsearchval] = useState("Type something");
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [NavData, setNavData] = useState<any>([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {});
  let myfunction = (inputvalue: any) => {
    document.querySelector(".search-result")?.classList.remove("d-none");

    let i: any = [];
    let allElement2: any[] = [];

    MENUITEMS.map((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.map((sublevel) => {
          // console.log("sublevel --- ", sublevel)
          if (sublevel.children) {
            sublevel.children.map((sublevel1: any) => {
              // console.log("sublevel1 --- ", sublevel1)
              i.push(sublevel1);
              if (sublevel1.children) {
                sublevel1.children.map((sublevel2) => {
                  // console.log("sublevel2 --- ", sublevel2)
                  i.push(sublevel2);
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;
    });
    for (let allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (
          allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())
        ) {
          setShow2(true);
          allElement2.push(allElement);
        }
      }
    }
    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something");
        setsearchcolor("text-dark");
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor("text-danger");
        setsearchval("There is no component with this name");
      }
    }
    setNavData(allElement2);
  };

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
            {/* <div className="main-header-center ms-3 d-none d-lg-block">
              <FormControl
                onChange={(ele) => {
                  myfunction(ele.target.value);
                  setInputValue(ele.target.value);
                }}
                onClick={() => {
                  setShow1(true);
                }}
                placeholder="Search for results..."
                type="search"
              />
              <button className="btn px-0 pt-2">
                <i className="fe fe-search" aria-hidden="false"></i>
              </button>
              {show1 ? (
                <div className="card search-result p-absolute w-100 card border mt-1">
                  <div className="card-header">
                    <h4 className="card-title me-2 text-break">
                      Search result of "{InputValue}"
                    </h4>
                  </div>
                  <ul className="card-body list-group">
                    {show2 ? (
                      NavData.map((e) => (
                        <li key={Math.random()}>
                          <Link className="list-group-item" to={`${e.path}/`}>
                            {e.title}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <b className={`${searchcolor} list-group-item`}>
                        {searchval}
                      </b>
                    )}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div> */}

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

                    {/* Country Select Modal */}

                    {/* <Form.Group>
                      <Select classNamePrefix="Select" options={getPropertyName()} onChange={setSelectedProperty} />
                    </Form.Group> */}

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
                          <Link to={"/pages/profile"} className='p-0'>
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

              {/* Switcher  */}

              {/* <div
                className="demo-icon nav-link icon"
                onClick={() => SidSwitcherIcon()}
              >
                <i className="fe fe-settings fa-spin  text_primary"></i>
              </div> */}
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
