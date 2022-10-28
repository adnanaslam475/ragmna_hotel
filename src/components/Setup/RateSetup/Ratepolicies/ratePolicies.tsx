import React, { useState, useEffect } from "react";
import { Accordion, Card, Col, Collapse, Nav, Row, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ratePolicies.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getpolicies, deletePolicies } from "./ratePolicySlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Redux/Store";
import { TableCell } from "@mui/material";
import { addPolicy } from "../../../../Redux/Services/policiesService";
import { toast } from "react-toastify";
const RatePolicies = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [polices, setpolicies] = useState<any[]>([]);
  const [policesModal, setPolicesModal] = useState({
    showCancellation: false,
    showCheckIn: false,
    showDeposit: false,
    showNoShow: false,
  });

  const [ratetype, setRate] = useState();
  const [depositRatetype, setDepositRate] = useState();
  const [checkinRatetype, setCheckinRate] = useState();
  const [noshowRatetype, setNoshowRate] = useState();

  const [comments, setComments] = useState(false);

  const handleselect = (e) => {
    setRate(e.target.value);
  };
  const depositRateselect = (e) => {
    setDepositRate(e.target.value);
  };
  const checkinRateselect = (e) => {
    setCheckinRate(e.target.value);
  };
  const noshowRateselect = (e) => {
    setNoshowRate(e.target.value);
  };
  const delPolicies = async (value: any) => {
    try {
      await dispatch(deletePolicies(value)).unwrap;
      dispatch(getpolicies()).unwrap();
      // setDeleteId("");
    } catch (err: any) {}
  };

  const getAllPolicies = async () => {
    try {
      const response: any = await dispatch(getpolicies()).unwrap();
      setpolicies(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPolicies();
  }, []);

  const policiesType = [
    { key: "Cancellation", name: "Cancellation", modal: "showCancellation" },
    { key: "Check-in", name: "Check In", modal: "showCheckIn" },
    { key: "Deposit", name: "Deposit", modal: "showDeposit" },
    { key: "No-Show", name: "No Show", modal: "showNoShow" },
    { key: "Insurance", name: "Insurance", modal: "" },
  ];

  const renderPolicies = (type) => {
    const policy = polices.filter((item) => item.type === type.key);
    return polices?.length > 0
      ? policy.map((entry) => (
          <Accordion.Body>
            <div className="policy-item">
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    color: "#333",
                    fontSize: 16,
                    width: "auto",
                  }}
                >
                  {entry.name}
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <span className="icon-edit" style={{ cursor: "pointer" }}>
                    Edit
                  </span>
                  <span
                    className="icon-edit"
                    style={{
                      marginLeft: 15,
                      cursor: "pointer",
                    }}
                    onClick={() => delPolicies(entry._id)}
                  >
                    Del
                  </span>
                  <span
                    className="icon-edit"
                    style={{
                      marginLeft: 15,
                      cursor: "pointer",
                    }}
                  >
                    4 Uses
                  </span>
                </div>
              </div>
              <span
                style={{
                  color: "#666",
                  fontSize: 14,
                  fontWeight: 300,
                  marginLeft: 20,
                  display: "block",
                  marginBottom: 5,
                  marginTop: 5,
                }}
              >
                {entry.description}
              </span>
            </div>
          </Accordion.Body>
        ))
      : null;
  };

  const [policyDetail, setPolicyDetail] = useState({
    name: "",
    description: "",
    type: "",
    rules: {
      type: "",
      amountType: "",
      amount: "",
      chargeType: "",
      cancelationDay: "",
      cancelationType: "",
      isChecked: "",
    },
  });
  const createPolicy = async (type) => {
    try {
      const policyPayload = {
        name: policyDetail.name ? policyDetail.name : "",
        description: policyDetail.description ? policyDetail.description : "",
        type: policyDetail.type ? type : "Cancellation",
        rules: [
          {
            type: policyDetail.rules.type ? policyDetail.rules.type : "",
            amountType: policyDetail.rules.amountType
              ? policyDetail.rules.amountType
              : "",
            amount: policyDetail.rules.amount
              ? parseInt(policyDetail.rules.amount)
              : 0,
            chargeType: policyDetail.rules.chargeType
              ? policyDetail.rules.chargeType
              : "TotalCharge",
            cancelationDay: policyDetail.rules.cancelationDay
              ? policyDetail.rules.cancelationDay
              : "",
            cancelationType: policyDetail.rules.cancelationType
              ? policyDetail.rules.cancelationType
              : "",
            isChecked: policyDetail.rules.isChecked
              ? policyDetail.rules.isChecked
              : "",
          },
        ],
      };

      const addNewPolicy: any = await addPolicy(policyPayload);
      if (addNewPolicy.statusCode === 200) {
        toast.success("Policy has been added");
        setPolicesModal({
          showCancellation: false,
          showCheckIn: false,
          showDeposit: false,
          showNoShow: false,
        });
        getAllPolicies();
      } else {
        toast.success("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col xl={12}>
          <Card className="card-bg">
            <Card.Header>
              <Card.Title>Manage Policy</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion
                defaultActiveKey="0"
                className="demo-accordion accordionjs m-0"
              >
                {policiesType.map((type, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    className="acc_section "
                  >
                    <Accordion.Header className="acc_head">
                      <div style={{ display: "flex" }}>{type.name} Policy</div>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "auto",
                          marginRight: 20,
                        }}
                        onClick={() => {
                          setPolicesModal({
                            ...policesModal,
                            [type.modal]: true,
                          });
                        }}
                      >
                        Create New
                      </div>
                    </Accordion.Header>
                    {polices && renderPolicies(type)}
                  </Accordion.Item>
                ))}
              </Accordion>
              <Collapse className="mt-2">
                <pre>
                  <code>
                    {`
 
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Cancellation Modal for creating new policies */}
      <Modal
        show={policesModal.showCancellation}
        onHide={() => {
          setPolicesModal({ ...policesModal, showCancellation: false });
        }}
      >
        <Modal.Header closeButton style={{ background: "#1c7bc2" }}>
          <Modal.Title
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 500,
              fontFamily: "serif",
            }}
          >
            New Cancellation Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="Policy Name"
            onChange={(event) =>
              setPolicyDetail({ ...policyDetail, name: event?.target.value })
            }
          />
          <div style={{ marginTop: 10 }}>
            Select type of fees a guest must pay if they cancel:
          </div>
          <select
            name="cars"
            id="cars"
            onChange={(event) => {
              setPolicyDetail({
                ...policyDetail,
                rules: {
                  ...policyDetail.rules,
                  amountType: event.target.value,
                },
              });
            }}
            style={{ height: 40, borderRadius: 2 }}
            className="mt-3"
          >
            <option value="select">Select</option>
            <option value="Percentage">Percent of stay</option>
            <option value="Fixed">Flat Fee</option>
            <option value="Nights">Number of nights</option>
          </select>
          <div className="mt-3 mb-5">
            <div>
              <span style={{ fontSize: "large" }}>
                Guests will incur a fee of
              </span>{" "}
              <input
                type="text"
                placeholder="%"
                style={{
                  fontSize: "large",
                  marginLeft: "3%",
                  width: "15%",
                  textAlign: "center",
                  color: "#3ea8f4",
                }}
                onChange={(event) =>
                  setPolicyDetail({
                    ...policyDetail,
                    rules: {
                      ...policyDetail.rules,
                      amount: event.target.value,
                    },
                  })
                }
              />{" "}
              {policyDetail.rules.amountType === "Percentage" && (
                <>
                  <span style={{ fontSize: "large", marginLeft: "3%" }}>
                    of
                  </span>
                  <span
                    style={{
                      fontSize: "initial",
                      marginLeft: "3%",
                    }}
                  >
                    <select
                      style={{
                        border: "none",
                        borderBottom: "1px solid #3ea8f4",
                        color: "#3ea8f4",
                      }}
                      onChange={(event) =>
                        setPolicyDetail({
                          ...policyDetail,
                          rules: {
                            ...policyDetail.rules,
                            chargeType: event.target.value,
                          },
                        })
                      }
                    >
                      <option value="TotalCharge">total charges</option>
                      <option value="RoomCharge">room charges</option>
                    </select>
                  </span>
                </>
              )}
              {policyDetail.rules.amountType === "Nights" && (
                <span style={{ fontSize: "large", marginLeft: "3%" }}>
                  nights
                </span>
              )}
            </div>
            <div className="mt-3">
              <span style={{ fontSize: "large" }}>if they cancel</span>{" "}
              <input
                type="text"
                style={{
                  fontSize: "large",
                  marginLeft: "2%",
                  width: "10%",
                  textAlign: "center",
                  color: "#3ea8f4",
                }}
              />{" "}
              <span style={{ fontSize: "large", marginLeft: "2%" }}>days</span>{" "}
              <span
                style={{
                  fontSize: "initial",
                }}
              >
                <select
                  style={{
                    border: "none",
                    borderBottom: "1px solid #3ea8f4",
                    color: "#3ea8f4",
                  }}
                  onChange={(event) =>
                    setPolicyDetail({
                      ...policyDetail,
                      rules: {
                        ...policyDetail.rules,
                        type: event.target.value,
                      },
                    })
                  }
                >
                  <option value="CheckInDate">within checkin date</option>
                  <option value="BookingDate">
                    after the reservation was made
                  </option>
                </select>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <p className="mb-0" style={{ fontSize: 16 }}>
              Cancellation fine print
            </p>
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Form.Check
                style={{ fontSize: 16 }}
                type="switch"
                id="custom-switch"
                label="Check this switch"
                onChange={(e) => {
                  setComments(e.target.checked);
                }}
              />
            </div>
          </div>
          {comments === true ? (
            <div style={{ marginTop: 10 }}>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) =>
                  setPolicyDetail({
                    ...policyDetail,
                    description: event.target.value,
                  })
                }
              />
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer className="modal_footer_button_alignment">
          <Button
            variant="primary"
            className="modal_footer_button"
            onClick={() => {
              createPolicy("Cancellation");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Show Deposit modal for creating new deposit policy */}
      <Modal
        show={policesModal.showDeposit}
        onHide={() => {
          setPolicesModal({ ...policesModal, showDeposit: false });
        }}
      >
        <Modal.Header closeButton style={{ background: "#1c7bc2" }}>
          <Modal.Title
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 500,
              fontFamily: "serif",
            }}
          >
            New Deposit Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="Policy Name"
            onChange={(event) =>
              setPolicyDetail({ ...policyDetail, name: event?.target.value })
            }
          />
          <div style={{ marginTop: 10 }}>
            Select type of fees a guest must pay if they cancel:
          </div>
          <select
            name="cars"
            id="cars"
            onChange={(event) => {
              setPolicyDetail({
                ...policyDetail,
                rules: {
                  ...policyDetail.rules,
                  amountType: event.target.value,
                },
              });
            }}
            style={{ height: 40, borderRadius: 2 }}
            className="mt-3"
          >
            <option value="select">Select</option>
            <option value="Percentage">Percent of stay</option>
            <option value="Fixed">Flat Fee</option>
            <option value="Nights">Number of nights</option>
          </select>
          {policyDetail.rules.amountType === "Percentage" ? (
            <div className="mt-3 mb-5">
              <div>
                <span style={{ fontSize: "large" }}>
                  When guest books reservation, they must pay
                </span>{" "}
                <input
                  type="text"
                  placeholder="%"
                  style={{
                    fontSize: "large",
                    marginLeft: "3%",
                    width: "15%",
                    textAlign: "center",
                    color: "#3ea8f4",
                  }}
                  onChange={(event) =>
                    setPolicyDetail({
                      ...policyDetail,
                      rules: {
                        ...policyDetail.rules,
                        amount: event.target.value,
                      },
                    })
                  }
                />{" "}
                <span style={{ fontSize: "large" }}>of</span>
                <span
                  style={{
                    fontSize: "initial",
                    marginLeft: "3%",
                  }}
                >
                  <select
                    style={{
                      border: "none",
                      borderBottom: "1px solid #3ea8f4",
                      color: "#3ea8f4",
                    }}
                    onChange={(event) =>
                      setPolicyDetail({
                        ...policyDetail,
                        rules: {
                          ...policyDetail.rules,
                          chargeType: event.target.value,
                        },
                      })
                    }
                  >
                    <option value="TotalCharge">total charges</option>
                    <option value="RoomCharge">room charges</option>
                  </select>
                </span>
              </div>
            </div>
          ) : policyDetail.rules.amountType === "Fixed" ? (
            <div className="mt-5">
              <span style={{ fontSize: "large" }}>
                When guest books reservation, they must pay
              </span>{" "}
              <input
                type="text"
                placeholder="$"
                style={{
                  fontSize: "large",
                  marginLeft: "3%",
                  width: "15%",
                  color: "#3ea8f4",
                }}
              />{" "}
            </div>
          ) : policyDetail.rules.amountType === "Nights" ? (
            <div>
              <div className="mt-5">
                <span style={{ fontSize: "larger" }}>
                  When guest books reservation, they must pay the first
                </span>{" "}
                <input
                  type="text"
                  style={{
                    fontSize: "large",
                    marginLeft: "3%",
                    width: "7%",
                    color: "#3ea8f4",
                  }}
                  onChange={(event) =>
                    setPolicyDetail({
                      ...policyDetail,
                      rules: {
                        ...policyDetail.rules,
                        amount: event.target.value,
                      },
                    })
                  }
                />{" "}
              </div>
              <div className="mt-2">
                <span
                  style={{
                    fontSize: "initial",
                  }}
                >
                  {" "}
                  nights of Room Charges
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <p className="mb-0" style={{ fontSize: 16 }}>
              Deposit fine print
            </p>
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Form.Check
                style={{ fontSize: 16 }}
                type="switch"
                id="custom-switch"
                label="Check this switch"
                onChange={(e) => {
                  setComments(e.target.checked);
                }}
              />
            </div>
          </div>
          {comments === true ? (
            <div style={{ marginTop: 10 }}>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) =>
                  setPolicyDetail({
                    ...policyDetail,
                    description: event.target.value,
                  })
                }
              />
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer className="modal_footer_button_alignment">
          <Button
            variant="primary"
            className="modal_footer_button"
            onClick={() => {
              createPolicy("Deposit");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Check In Policy modal fro creating new policy */}

      <Modal
        show={policesModal.showCheckIn}
        onHide={() => {
          setPolicesModal({ ...policesModal, showCheckIn: false });
        }}
      >
        <Modal.Header closeButton style={{ background: "#1c7bc2" }}>
          <Modal.Title
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 500,
              fontFamily: "serif",
            }}
          >
            New Check In Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="Policy Name"
            onChange={(event) =>
              setPolicyDetail({ ...policyDetail, name: event?.target.value })
            }
          />
          <div style={{ marginTop: 10 }}>
            Select type of fees a guest pay on check in
          </div>
          <select
            name="checkin"
            id="checkin"
            onChange={(event) => {
              setPolicyDetail({
                ...policyDetail,
                rules: {
                  ...policyDetail.rules,
                  amountType: event.target.value,
                },
              });
            }}
            style={{ height: 40, borderRadius: 2 }}
            className="mt-3"
          >
            <option value="select">Select</option>
            <option value="percentage">% of balance on check-in</option>
          </select>
          {policyDetail.rules.amountType === "Percentage" ? (
            <div className="mt-3 mb-5">
              <div>
                <span style={{ fontSize: "larger" }}>Upon check in,</span>{" "}
                <input
                  type="text"
                  placeholder="%"
                  style={{
                    fontSize: "large",
                    marginLeft: "1%",
                    width: "14%",
                    textAlign: "center",
                    color: "#3ea8f4",
                  }}
                />{" "}
                <span style={{ fontSize: "larger", marginLeft: "1%" }}>
                  of the balance will be
                </span>
                <span
                  style={{
                    fontSize: "initial",
                    marginLeft: "3%",
                  }}
                >
                  <select
                    style={{
                      border: "none",
                      borderBottom: "1px solid #3ea8f4",
                      color: "#3ea8f4",
                    }}
                  >
                    <option>captured</option>
                    <option>authorized</option>
                  </select>
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <p className="mb-0" style={{ fontSize: 16 }}>
              Check-in fine print
            </p>
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Form.Check
                style={{ fontSize: 16 }}
                type="switch"
                id="custom-switch"
                label="Custom Text"
                onChange={(e) => {
                  setComments(e.target.checked);
                }}
              />
            </div>
          </div>
          {comments === true ? (
            <div style={{ marginTop: 10 }}>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) =>
                  setPolicyDetail({
                    ...policyDetail,
                    description: event.target.value,
                  })
                }
              />
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer className="modal_footer_button_alignment">
          <Button
            variant="primary"
            className="modal_footer_button"
            onClick={() => {
              createPolicy("Deposit");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* No Show Policy modal fro creating new policy */}

      <Modal
        show={policesModal.showNoShow}
        onHide={() => {
          setPolicesModal({ ...policesModal, showNoShow: false });
        }}
      >
        <Modal.Header closeButton style={{ background: "#1c7bc2" }}>
          <Modal.Title
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 500,
              fontFamily: "serif",
            }}
          >
            New no show Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control type="text" placeholder="Policy Name" />
          <div style={{ marginTop: 10 }}>
            Select type of fees a guest must pay in the case of a no show:
          </div>
          <select
            name="cars"
            id="cars"
            onChange={(event) => {
              setPolicyDetail({
                ...policyDetail,
                rules: {
                  ...policyDetail.rules,
                  amountType: event.target.value,
                },
              });
            }}
            style={{ height: 40, borderRadius: 2 }}
            className="mt-3"
          >
            <option value="select">Select</option>
            <option value="Percentage">Percent of stay</option>
            <option value="Fixed">Flat Fee</option>
            <option value="Nights">Number of nights</option>
          </select>
          {policyDetail.rules.amountType === "Percentage" ? (
            <div className="mt-3 mb-5">
              <div>
                <span style={{ fontSize: "large" }}>
                  If a guest is a no show, they must pay
                </span>{" "}
                <input
                  type="text"
                  placeholder="%"
                  style={{
                    fontSize: "large",
                    marginLeft: "1%",
                    width: "15%",
                    textAlign: "center",
                    color: "#3ea8f4",
                  }}
                  onChange={(event) =>
                    setPolicyDetail({
                      ...policyDetail,
                      rules: {
                        ...policyDetail.rules,
                        amount: event.target.value,
                      },
                    })
                  }
                />{" "}
                <span style={{ fontSize: "large", marginLeft: "1%" }}>of</span>
                <span
                  style={{
                    fontSize: "initial",
                    marginLeft: "3%",
                  }}
                >
                  <select
                    style={{
                      border: "none",
                      borderBottom: "1px solid #3ea8f4",
                      color: "#3ea8f4",
                    }}
                    onChange={(event) =>
                      setPolicyDetail({
                        ...policyDetail,
                        rules: {
                          ...policyDetail.rules,
                          chargeType: event.target.value,
                        },
                      })
                    }
                  >
                    <option value="TotalCharge">total charges</option>
                    <option value="RoomCharge">room charges</option>
                  </select>
                </span>
              </div>
            </div>
          ) : policyDetail.rules.amountType === "Fixed" ? (
            <div className="mt-5">
              <span style={{ fontSize: "large" }}>
                If a guest is a no show, they must pay
              </span>{" "}
              <input
                type="text"
                placeholder="$"
                style={{
                  fontSize: "large",
                  marginLeft: "3%",
                  width: "15%",
                  color: "#3ea8f4",
                }}
              />{" "}
            </div>
          ) : policyDetail.rules.amountType === "Nights" ? (
            <div>
              <div className="mt-5">
                <span style={{ fontSize: "larger" }}>
                  If a guest is a no show, they must pay the first
                </span>{" "}
                <input
                  type="text"
                  style={{
                    fontSize: "large",
                    marginLeft: "3%",
                    width: "7%",
                    color: "#3ea8f4",
                  }}
                  onChange={(event) =>
                    setPolicyDetail({
                      ...policyDetail,
                      rules: {
                        ...policyDetail.rules,
                        amount: event.target.value,
                      },
                    })
                  }
                />{" "}
              </div>
              <div className="mt-2">
                <span
                  style={{
                    fontSize: "initial",
                  }}
                >
                  {" "}
                  nights of Room Charges
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <p className="mb-0" style={{ fontSize: 16 }}>
              No Show fine print
            </p>
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Form.Check
                style={{ fontSize: 16 }}
                type="switch"
                id="custom-switch"
                label="Check this switch"
                onChange={(e) => {
                  setComments(e.target.checked);
                }}
              />
            </div>
          </div>
          {comments === true ? (
            <div style={{ marginTop: 10 }}>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) =>
                  setPolicyDetail({
                    ...policyDetail,
                    description: event.target.value,
                  })
                }
              />
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
        {/* <Modal.Footer className="modal_footer_button_alignment">
          <Button
            variant="primary"
            onClick={handlenoshowClose}
            className="modal_footer_button"
          >
            Add Policy
          </Button>
        </Modal.Footer> */}
      </Modal>
    </React.Fragment>
  );
};

export default RatePolicies;
