import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useRoomTypes } from "../../RateSetupSlice";
import "./BaseRate.scss";

const BaseRate = (props:any) => {
  const {previousStep,changeInput} = props
  const { roomTypes } = useRoomTypes();

  const onSubmit = () => {
    
    props.nextStep();
  };

  const getRoomTypeByID = (id) => {
    if (roomTypes) {
      let i = roomTypes.findIndex((x) => x._id === id);
      if (i > -1) {
        return roomTypes[i].name;
      }
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part p-4">
          <div>
            <h1>What is your base price?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="form-part p-4">
          <div>
          {props.roomTypes.map((item, index) => {
            return (
              <Row className="align-items-center" key={index}>
                <Col lg={6}>
                  <label className="custom-control custom-checkbox-md">
                    {getRoomTypeByID(item.roomTypeId)}
                  </label>
                </Col>
                <Col lg={6} className="price-input">
                  <div className="control-group form-group base-input">
                    <i className="icon fe fe-dollar-sign" />
                    <input
                      type="number"
                      className="form-control required"
                      placeholder="Base Price"
                      name="price"
                      value={item.price}
                      onChange={(e) => {
                        changeInput("price", e.target.value ,index);
                      }}
                    />
                  </div>
                </Col>
              </Row>
            );
          })}
          </div>
          <div className="Previous-button">
            <Button onClick={previousStep}>Previous</Button>
          </div>
          <div className="next-button">
            <Button onClick={() => onSubmit()}>Next</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BaseRate;
