import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../../Redux/Store";
import { fetchPolicies, usePolicies } from "../../RateSetupSlice";
import "./PoliciesRatePlan.scss";

const PoliciesRatePlan = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [cancellation, setCancellation] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<boolean>(false);
  const [checkIn, setCheckIn] = useState<boolean>(false);
  const [noShow, setNoShow] = useState<boolean>(false);

  const { policies } = usePolicies();
  console.log(policies, "policies");

  const getPolicies = () => {
    let response = dispatch(fetchPolicies()).unwrap;
  };

  useEffect(() => {
    getPolicies();
  }, []);

  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/setup/ratesetup/createseason`;
    navigate(path);
  };
  const submitWizard = () => {
    props.onSubmit();
  };
  console.log(props.rate, "rate");

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part px-6 py-4">
          <div>
            <h1>
              What policies will be applied to this rate plan by default ?
            </h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="policies-part px-6 py-4">
          <div className="policies-container">
            <p className="my-4">
              Policies set here are the default for the Rate Plan. It can later
              be changed for an individual season.
            </p>

            <p>
              Policies do not map to external channels. Please create an
              identical policy on the external channel for this Rate Plan in
              order to match innCenter
            </p>
            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  checked={
                    props.rate.cancellationPolicy || cancellation ? true : false
                  }
                  onChange={(e) => {
                    props.clearPolicy(e, "cancellation");
                    setCancellation(!cancellation);
                  }}
                />
                <span className="custom-control-label">Cancellation</span>
              </label>
            </div>
            {props.rate.cancellationPolicy || cancellation
              ? policies &&
                policies.map((item, ind) => {
                  if (item.type === "Cancellation") {
                    return (
                      <div key={ind} className="inner-class">
                        <label className="custom-control custom-radio-md">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="cancellation"
                            checked={item._id === props.rate.cancellationPolicy}
                            onChange={(e) => {
                              props.onRadioChange(e, ind, item, "cancellation");
                            }}
                          />
                          <span className="custom-control-label">
                            {item.name}
                          </span>
                          <p>{item.description}</p>
                        </label>
                      </div>
                    );
                  }
                })
              : null}
            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  checked={props.rate.depositPolicy || deposit ? true : false}
                  onChange={(e) => {
                    props.clearPolicy(e, "deposit");
                    setDeposit(!deposit);
                  }}
                />
                <span className="custom-control-label">Deposit</span>
              </label>
            </div>
            {deposit || props.rate.depositPolicy
              ? policies &&
                policies.map((item, ind) => {
                  if (item.type === "Deposit") {
                    return (
                      <div key={ind} className="inner-class">
                        <label className="custom-control custom-radio-md">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="Deposit"
                            defaultValue="option5"
                            checked={item._id === props.rate.depositPolicy}
                            onChange={(e) => {
                              props.onRadioChange(e, ind, item, "deposit");
                            }}
                          />
                          <span className="custom-control-label">
                            {item.name}
                          </span>
                          <p>{item.description}</p>
                        </label>
                      </div>
                    );
                  }
                })
              : null}
            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  checked={props.rate.checkInPolicy || checkIn ? true : false}
                  onChange={(e) => {
                    props.clearPolicy(e, "check-In");
                    setCheckIn(!checkIn);
                  }}
                />
                <span className="custom-control-label">Check-in</span>
              </label>
            </div>
            <div className="inner-class">
              {checkIn || props.rate.checkInPolicy
                ? policies &&
                  policies.map((item, ind) => {
                    if (item.type === "Check-in") {
                      return (
                        <label
                          key={ind}
                          className="custom-control custom-radio-md"
                        >
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="Check-in"
                            defaultValue="option5"
                            checked={item._id === props.rate.checkInPolicy}
                            onChange={(e) => {
                              props.onRadioChange(e, ind, item, "check-In");
                            }}
                          />
                          <span className="custom-control-label">
                            {item.name}
                          </span>
                          <p>{item.description}</p>
                        </label>
                      );
                    }
                  })
                : null}
            </div>

            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  defaultValue="option5"
                  checked={props.rate.noShowPolicy || noShow ? true : false}
                  onChange={(e) => {
                    props.clearPolicy(e, "No-Show");
                    setNoShow(!noShow);
                  }}
                />
                <span className="custom-control-label">No Show</span>
              </label>
            </div>
            {noShow || props.rate.noShowPolicy
              ? policies &&
                policies.map((item, ind) => {
                  if (item.type === "No-Show") {
                    return (
                      <div key={ind} className="inner-class">
                        <label className="custom-control custom-radio-md">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="No-Show"
                            defaultValue="option5"
                            checked={item._id === props.rate.noShowPolicy}
                            onChange={(e) => {
                              props.onRadioChange(e, ind, item, "No-Show");
                            }}
                          />
                          <span className="custom-control-label">
                            {item.name}
                          </span>
                          <p>{item.description}</p>
                        </label>
                      </div>
                    );
                  }
                })
              : null}
          </div>
          <div className="Previous-button">
            <Button onClick={props.previousStep}>Previous</Button>
          </div>
          <div className="next-button">
            <Button
              onClick={() => {
                submitWizard();
              }}
            >
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PoliciesRatePlan;
