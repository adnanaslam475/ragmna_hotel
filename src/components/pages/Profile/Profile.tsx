import React, { FC } from "react";
import "./Profile.scss";
import PageHeader from "../../../Layouts/PageHeader/PageHeader";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";

interface ProfileProps {}
const Profile: FC<ProfileProps> = () => (
  <div className="profile">
    {/* <PageHeader titles="Profile" active="Profile" items={['Pages']} /> */}

    {/* <!-- ROW-1 OPEN --> */}
    <Row id="user-profile">
      <Col lg={12}>
        <Card className="profile-head">
          <Card.Body>
            <div className="wideget-user mb-2">
              <h3>Profile</h3>
              <Row>
                <Col lg={12} md={12}>
                  <Row>
                    <div className="panel profile-cover">
                      {/* <div className="profile-cover__action bg-img"></div> */}
                      {/* <div className="profile-cover__img"> */}
                      <div>
                        {/* <img
                          className="profile-img"
                          src={require("../../../assets/images/users/21.jpg")}
                          alt="user21"
                        /> */}
                        <i className="profile-img icon fe fe-user" />
                      </div>
                      <div className="profile-img-content text-dark text-start mt-2">
                        <div className="text-dark">
                          <h3 className="h3 mb-2">Percy Kewshun</h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Row className="Contect-details p-4 mb-4">
            <Col lg={6} md={12}>
              <div className="control-group form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="First Name"
                  name="fname"
                  // value={}
                  // onChange={(e) => {
                  // }}
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="control-group form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Last Name"
                  name="shortCode"
                  // value={}
                  // onChange={(e) => {
                  // }}
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="control-group form-group">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Email"
                  name="email"
                  disabled
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <label className="form-label">Phone Number</label>
              <div className="wrap-input100 validate-input input-group profile-phone-wrap">
                <div className="CountrySelector profile-phone">
                  <PhoneInput
                    country={"us"}
                    inputProps={{ name: "phoneNumber" }}
                  />
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <label className="form-label">Whatsapp Number</label>
              <div className="wrap-input100 validate-input input-group profile-phone-wrap">
                <div className="CountrySelector profile-phone">
                  <PhoneInput
                    country={"us"}
                    inputProps={{ name: "whatsappNumber" }}
                  />
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="control-group form-group">
                <label className="form-label">Supplier ID</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Supplier ID"
                  name="supplierid"
                  disabled
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="control-group form-group">
                <label className="form-label">Business Name</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Business Name"
                  name="businessname"
                  disabled
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="control-group form-group">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Address"
                  name="address"
                  // value={}
                  // onChange={(e) => {
                  // }}
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <Form.Group>
                <Form.Check
                  className="ps-6 switch-style d-flex align-items-center my-2"
                  type="switch"
                  id="automaticRoomAssignment"
                  label="Active"
                  // onChange={(e) => {
                  //
                  // }}
                  // checked={values.automaticRoomAssignment}
                />
              </Form.Group>
            </Col>
            <Row>
              <div className="d-flex justify-content-end">
                <Button>Save</Button>
              </div>
            </Row>
          </Row>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
);

export default Profile;
