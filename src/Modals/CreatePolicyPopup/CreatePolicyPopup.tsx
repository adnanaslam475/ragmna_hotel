import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { boolean } from "yup";

interface policesModalInterface {
  showCancellation: boolean;
  showCheckIn: boolean;
  showDeposit: boolean;
  showNoShow: boolean;
  showInsurance: boolean;
  isEdit: boolean;
}

interface policyDetailInterface {
  _id: string;
  name: string;
  description: string;
  type: string;
  rules: {
    type: string;
    amountType: string;
    amount: string;
    chargeType: string;
    cancelationDay: string;
    cancelationType: string;
    isChecked: string;
  };
}

interface DeletePolicyDetailInterface {
  isDelete: boolean;
  id: string;
}

export interface CreatePolicyPopupProps {
  policesModal: policesModalInterface;
  policyDetail: policyDetailInterface;
  setPolicesModal: Function;
  setPolicyDetail: Function;
  createPolicy: Function;
  editPolicy: Function;
  deletePolicyDetail: DeletePolicyDetailInterface;
}

const CreatePolicyPopup = ({
  policesModal,
  setPolicesModal,
  policyDetail,
  setPolicyDetail,
  deletePolicyDetail,
  createPolicy,
  editPolicy,
}: CreatePolicyPopupProps) => {
  const [comments, setComments] = useState(false);
  return (
    <div>
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
            {policesModal.isEdit ? "Edit" : "New"} Cancellation Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="Policy Name"
            value={policyDetail.name}
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
            value={policyDetail.rules.amountType}
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
                value={policyDetail.rules.amount}
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
                      value={policyDetail.rules.chargeType}
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
                  value={policyDetail.rules.type}
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
                value={policyDetail.description}
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
          {policesModal.isEdit ? (
            <Button
              variant="primary"
              className="modal_footer_button"
              onClick={() => {
                editPolicy("Cancellation");
              }}
            >
              Update Policy
            </Button>
          ) : (
            <Button
              variant="primary"
              className="modal_footer_button"
              onClick={() => {
                createPolicy("Cancellation");
              }}
            >
              Add Policy
            </Button>
          )}
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
            {policesModal.isEdit ? "Edit" : "New"} Deposit Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="Policy Name"
            value={policyDetail.name}
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
            value={policyDetail.rules.amountType}
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
                  value={policyDetail.rules.amount}
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
                    value={policyDetail.rules.chargeType}
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
                  value={policyDetail.rules.amount}
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
                value={policyDetail.description}
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
            {policesModal.isEdit ? "Edit" : "New"} Check In Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="Policy Name"
            value={policyDetail.name}
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
            value={policyDetail.rules.amountType}
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
            <option value="Percentage">% of balance on check-in</option>
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
                value={policyDetail.description}
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
          {policesModal.isEdit ? (
            <Button
              variant="primary"
              className="modal_footer_button"
              onClick={() => {
                editPolicy("Check-in");
              }}
            >
              Update Policy
            </Button>
          ) : (
            <Button
              variant="primary"
              className="modal_footer_button"
              onClick={() => {
                createPolicy("Check-in");
              }}
            >
              Add Policy
            </Button>
          )}
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
            {policesModal.isEdit ? "Edit" : "New"} no show Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="Policy Name"
            value={policyDetail.name}
            onChange={(event) =>
              setPolicyDetail({ ...policyDetail, name: event?.target.value })
            }
          />
          <div style={{ marginTop: 10 }}>
            Select type of fees a guest must pay in the case of a no show:
          </div>
          <select
            name="cars"
            id="cars"
            value={policyDetail.rules.amountType}
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
                  value={policyDetail.rules.amount}
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
                    value={policyDetail.rules.chargeType}
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
                  value={policyDetail.rules.amount}
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
                value={policyDetail.description}
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
          {policesModal.isEdit ? (
            <Button
              variant="primary"
              onClick={() => {
                editPolicy("No-Show");
              }}
              className="modal_footer_button"
            >
              Update Policy
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                createPolicy("No-Show");
              }}
              className="modal_footer_button"
            >
              Add Policy
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* No Show Policy modal fro creating new policy */}
      <Modal
        show={policesModal.showInsurance}
        onHide={() => {
          setPolicesModal({ ...policesModal, showInsurance: false });
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
            {deletePolicyDetail.isDelete ? "Edit" : "New"} Insurance Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="Policy Name"
            value={policyDetail.name}
            onChange={(event) =>
              setPolicyDetail({ ...policyDetail, name: event?.target.value })
            }
          />
          <div style={{ marginTop: 10 }}>
            Select type of fees a guest must pay in the case of a no show:
          </div>
          <select
            name="cars"
            id="cars"
            value={policyDetail.rules.amountType}
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
                  value={policyDetail.rules.amount}
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
                    value={policyDetail.rules.chargeType}
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
                  value={policyDetail.rules.amount}
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
                value={policyDetail.description}
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
          {policesModal.isEdit ? (
            <Button
              variant="primary"
              onClick={() => {
                editPolicy("Insurance");
              }}
              className="modal_footer_button"
            >
              Update Policy
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                createPolicy("Insurance");
              }}
              className="modal_footer_button"
            >
              Add Policy
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreatePolicyPopup;
