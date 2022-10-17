import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import "./EditSeasonDetail.scss";
import Select from "react-select";
import { CommanDropDownType } from "../../../PropertySetup/AddProperty/types";

export interface EditSeasonDetailProps {
  isModelClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditSeasonDetail = (props: EditSeasonDetailProps) => {
  const colorTypes: CommanDropDownType[] = [
    { value: "#f0642a", label: "#f6881c" },
    { value: "#f6881c", label: "#f6881c" },
    { value: "#cc5a71", label: "#cc5a71" },
    { value: "#d42649", label: "#d42649" },
  ];

  /* Rates usestate */

  const [addAdditionalCharge, SetAddAdditionalCharge] =
    useState<boolean>(false);
  const [standardRoom, setStandardRoom] = useState(false);
  const [masterBedroom, setMasterBedroom] = useState(false);
  const [southernHospitality, setSouthernHospitality] = useState(false);
  
  const addAdditionalCharges = (e) => {
    SetAddAdditionalCharge(e.target.checked);
  };

  /* Rules/Restrictions  */

  /* Policies */

  const { isModelClose } = props;

  const [show, setShow] = useState(true);

  return (
    <React.Fragment>
      <Modal
        size="xl"
        show={show}
        onHide={() => {
          isModelClose(false);
        }}
      >
        <ModalBody className="body-modal">
          <Row>
            <Tab.Container>
              <Col lg={3} className="sidebar-main">
                <div className="main-header">
                  <h1>Season</h1>
                </div>
                <div>
                  <Select
                    classNamePrefix="Select"
                    options={colorTypes}
                    // value={colorTypes.filter(
                    //   (option) => option.value === values.selectedColor
                    // )}
                    placeholder="Select PropertyType"
                    name="selectedColor"
                    // onChange={(selectedOption: any) => {
                    //   handleChange("selectedColor")(selectedOption?.value);
                    // }}
                  />
                </div>
                <div className="edit-tab-container">
                  <Nav.Link eventKey="first">Rates</Nav.Link>
                  <Nav.Link eventKey="second">Rules/Restrictions</Nav.Link>
                  <Nav.Link eventKey="third">Policies</Nav.Link>
                </div>
                <div className="side-button">
                  <Button
                    variant="primary"
                    onClick={() => {
                      isModelClose(false);
                    }}
                  >
                    Save Changes
                  </Button>
                </div>
              </Col>
              <Col lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="rate">
                      <div className="rate-head">
                        <h3>Rates</h3>
                        <Form.Check
                          className="ps-6 check-switch-style d-flex align-items-center"
                          type="switch"
                          id="additionalCharge"
                          label="Charge for additional adult/child"
                          onChange={(e) => {
                            addAdditionalCharges(e);
                          }}
                          // onChange={(e) => {
                          //   setFieldValue(
                          //     "additionalCharge",
                          //     e.target.checked
                          //   );
                          // }}
                          // checked={values.additionalCharge}
                        />
                      </div>
                      <div className="rate-body">
                        <div className="standard-room">
                          <div>
                            <label className="custom-control custom-checkbox-md">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name="example-checkbox5"
                                defaultValue="option5"
                                onClick={() => setStandardRoom(!standardRoom)}
                              />
                              <span className="custom-control-label">
                                Standard Room
                              </span>
                              <p>
                                Capacity:2 adults
                                <br />
                                Capacity:2 persons
                              </p>
                            </label>
                          </div>

                          {standardRoom ? (
                            <div className="standard-rate-night">
                              <div className="control-group form-group">
                                <label className="form-label">
                                  Rate per night
                                </label>
                                <input
                                  type="number"
                                  className="form-control required"
                                  name="ratePerNight"
                                  placeholder="$"
                                />
                              </div>
                              {addAdditionalCharge ? (
                                <div className="standard-add-charge">
                                  <div className="charge-input">
                                    <label className="form-label">
                                      Included Adults
                                    </label>
                                    <i className="fe fe-minus-circle" />
                                    <input
                                      className="check-input"
                                      type="number"
                                    />
                                    <i className="fe fe-plus-circle" />
                                  </div>
                                  <div className="charge-input">
                                    <label className="form-label">
                                      Included Persons
                                    </label>
                                    <i className="fe fe-minus-circle" />
                                    <input
                                      className="check-input"
                                      type="number"
                                    />
                                    <i className="fe fe-plus-circle" />
                                  </div>
                                  <div className="control-group form-group">
                                    <label className="form-label">
                                      Add.adult/night
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control required"
                                      name="addAdult"
                                      placeholder="$"
                                    />
                                  </div>
                                  <div className="control-group form-group">
                                    <label className="form-label">
                                      Add.child/night
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control required"
                                      name="addChild"
                                      placeholder="$"
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                        <div className="standard-room">
                          <div>
                            <label className="custom-control custom-checkbox-md">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name="example-checkbox5"
                                defaultValue="option5"
                                onClick={() => setMasterBedroom(!masterBedroom)}
                              />
                              <span className="custom-control-label">
                                Master Bedroom
                              </span>
                              <p>
                                Capacity:2 adults
                                <br />
                                Capacity:2 persons
                              </p>
                            </label>
                          </div>

                          {masterBedroom ? (
                            <div className="standard-rate-night">
                              <div className="control-group form-group">
                                <label className="form-label">
                                  Rate per night
                                </label>
                                <input
                                  type="number"
                                  className="form-control required"
                                  name="ratePerNight"
                                  placeholder="$"
                                />
                              </div>
                              {addAdditionalCharge ? (
                                <div className="standard-add-charge">
                                  <div className="charge-input">
                                    <label className="form-label">
                                      Included Adults
                                    </label>
                                    <i className="fe fe-minus-circle" />
                                    <input
                                      className="check-input"
                                      type="number"
                                    />
                                    <i className="fe fe-plus-circle" />
                                  </div>
                                  <div className="charge-input">
                                    <label className="form-label">
                                      Included Persons
                                    </label>
                                    <i className="fe fe-minus-circle" />
                                    <input
                                      className="check-input"
                                      type="number"
                                    />
                                    <i className="fe fe-plus-circle" />
                                  </div>
                                  <div className="control-group form-group">
                                    <label className="form-label">
                                      Add.adult/night
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control required"
                                      name="addAdult"
                                      placeholder="$"
                                    />
                                  </div>
                                  <div className="control-group form-group">
                                    <label className="form-label">
                                      Add.child/night
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control required"
                                      name="addChild"
                                      placeholder="$"
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                        <div className="standard-room">
                          <div>
                            <label className="custom-control custom-checkbox-md">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name="example-checkbox5"
                                defaultValue="option5"
                                onClick={() => setSouthernHospitality(!southernHospitality)}
                              />
                              <span className="custom-control-label">
                                Standard Room
                              </span>
                              <p>
                                Capacity:2 adults
                                <br />
                                Capacity:2 persons
                              </p>
                            </label>
                          </div>

                          {southernHospitality ? (
                            <div className="standard-rate-night">
                              <div className="control-group form-group">
                                <label className="form-label">
                                  Rate per night
                                </label>
                                <input
                                  type="number"
                                  className="form-control required"
                                  name="ratePerNight"
                                  placeholder="$"
                                />
                              </div>
                              {addAdditionalCharge ? (
                                <div className="standard-add-charge">
                                  <div className="charge-input">
                                    <label className="form-label">
                                      Included Adults
                                    </label>
                                    <i className="fe fe-minus-circle" />
                                    <input
                                      className="check-input"
                                      type="number"
                                    />
                                    <i className="fe fe-plus-circle" />
                                  </div>
                                  <div className="charge-input">
                                    <label className="form-label">
                                      Included Persons
                                    </label>
                                    <i className="fe fe-minus-circle" />
                                    <input
                                      className="check-input"
                                      type="number"
                                    />
                                    <i className="fe fe-plus-circle" />
                                  </div>
                                  <div className="control-group form-group">
                                    <label className="form-label">
                                      Add.adult/night
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control required"
                                      name="addAdult"
                                      placeholder="$"
                                    />
                                  </div>
                                  <div className="control-group form-group">
                                    <label className="form-label">
                                      Add.child/night
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control required"
                                      name="addChild"
                                      placeholder="$"
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Rates</Tab.Pane>
                  <Tab.Pane eventKey="third">Rates</Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Row>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default EditSeasonDetail;
