import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../Redux/Store";
import { usePropertyList } from "../../PropertySetup/propertySetupSlice";
import "./RateList.scss";
import { getRate } from "./RateSetupSlice";
const RateList = () => {
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/setup/ratesetup/addrate`;
    navigate(path);
  };

  const dispatch = useDispatch<AppDispatch>();
  const getRateDetails = async () => {
    let response: any = await dispatch(getRate()).unwrap();
    console.log(response, "response");
  };
  useEffect(() => {
    getRateDetails();
  }, []);

  return (
    <React.Fragment>
      <Row>
        <div className="d-flex justify-content-end">
          <Button
            className="m-2"
            onClick={() => {
              RouteChange();
            }}
          >
            Add
          </Button>
        </div>
      </Row>
      <Row className="d-flex justify-content-evenly">
        <Col lg={3} className="main-box">
          <div className="icons">
            <i
              className="icon i-e fe fe-edit"
              onClick={() => {
                navigate(`/setup/ratesetup/editrate/`);
              }}
            />
            <i className="icon i-t fe fe-trash-2" />
          </div>
          <div className="inner-box">
            <div className="inner-box-size">
              <span>5%</span>
            </div>
            <div className="inner-box-size">
              <span>D</span>
              <span>10%</span>
            </div>
          </div>
          <div className="inner-header py-2">
            <h5>
              Rate Take - <span> $100</span>
            </h5>
          </div>
          <div className="inner-box-row-2">
            <div className="inner-box-size-2">
              <span>Reg</span>
              <span>$90</span>
            </div>
            <div className="inner-box-size-2">
              <span>WKD</span>
              <span>$120</span>
            </div>
            <div className="inner-box-size-2">
              <span>Xmas</span>
              <span>$210</span>
            </div>
          </div>
        </Col>
        <Col lg={3} className="main-box"></Col>
        <Col lg={3} className="main-box"></Col>
        <Col lg={3} className="main-box">
          <div className="inner-box">
            <div className="inner-box-size">
              <span>5%</span>
            </div>
            <div className="inner-box-size">
              <span>D</span>
              <span>10%</span>
            </div>
          </div>
          <div className="inner-header py-2">
            <h5>
              Rate Take - <span> $100</span>
            </h5>
          </div>
          <div className="inner-box-row-2">
            <div className="inner-box-size-2">
              <span>Reg</span>
              <span>$90</span>
            </div>
            <div className="inner-box-size-2">
              <span>WKD</span>
              <span>$120</span>
            </div>
            <div className="inner-box-size-2">
              <span>Xmas</span>
              <span>$210</span>
            </div>
          </div>
        </Col>
        <Col lg={3} className="main-box"></Col>
        <Col lg={3} className="main-box"></Col>
      </Row>
    </React.Fragment>
  );
};
export default RateList;
