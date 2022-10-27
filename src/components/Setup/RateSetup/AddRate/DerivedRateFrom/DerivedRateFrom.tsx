import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import { getRate, useRateList } from "../../RateSetupSlice";
import Select from "react-select";
import "./DerivedRateFrom.scss";
import { CommanDropDownType } from "../../../PropertySetup/AddProperty/types";

const DerivedRateFrom = (props) => {
  const [selectedRate, SetSelectedRate] = useState("");
  const [selectRateType, selSelectRateType] = useState<
    "Percentage" | "Fixed"
  >();

  const dispatch = useDispatch<AppDispatch>();
  const getRateDetails = async () => {
    let response: any = await dispatch(getRate()).unwrap();
  };
  useEffect(() => {
    getRateDetails();
  }, []);

  const { rateList } = useRateList();

  const handelChange = (e) => {
    SetSelectedRate(e.target.value);
  };

  const rateThan: CommanDropDownType[] = [
    { value: "greater than", label: "greater than" },
    { value: "lesser than", label: "lesser than" },
  ];

  const inputType: CommanDropDownType[] = [
    { value: "Percentage", label: "percent" },
    { value: "Fixed", label: "USD" },
  ];

  const onSubmit = () => {
    props.selectedRateTypeID(selectedRate);
    props.nextStep();
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part p-4">
          <div>
            <h1>Which rate plan will you be deriving rates from?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="Derived-part p-4">
          <div className="derived">
            {rateList.map((val, index) => {
              return (
                <div key={index}>
                  <label className="custom-control custom-radio-md">
                      <input
                      type="radio"
                      className="custom-control-input"
                      name="radio"
                      value={val._id}
                      checked={selectedRate == val._id}
                      onChange={(e) => {
                        handelChange(e);
                      }}
                    />
                    <span className="custom-control-label">
                      {val.displayName}
                    </span>
                  </label>
                  {selectedRate == val._id ? (
                    <div className="inner-details">
                      <Row className="details">
                        <Col lg={3}>
                          Rates for the derived rate plan are the
                        </Col>
                        <Col lg={2} className="type-input">
                          {props.derivedRate.calculationType == "Fixed" ? (
                            <i className="icon fe fe-dollar-sign" />
                          ) : null}
                          <input
                            type="number"
                            name="amount"
                            value={props.derivedRate.amount}
                            onChange={(e) => {
                              props.valueChange("amount", e.target.value);
                            }}
                          />
                          {props.derivedRate.calculationType == "Percentage" ? (
                            <i className="icon fe fe-percent" />
                          ) : null}
                        </Col>
                        <Col lg={3}>
                          <Select
                            classNamePrefix="Select"
                            options={inputType}
                            value={inputType.filter(
                              (option) =>
                                option.value ===
                                props.derivedRate.calculationType
                            )}
                            placeholder="Select"
                            name="calculationType"
                            onChange={(selectedOption: any) => {
                              props.valueChange(
                                "calculationType",
                                selectedOption?.value
                              );
                            }}
                          />
                        </Col>

                        <Col lg={3}>
                          <Select
                            classNamePrefix="Select"
                            options={rateThan}
                            name="type"
                            value={rateThan.filter(
                              (option) =>
                                option.value === props.derivedRate.type
                            )}
                            onChange={(selectedOption: any) => {
                              props.valueChange("type", selectedOption?.value);
                            }}
                          />
                        </Col>
                        <Col lg={1}>{val.displayName}</Col>
                      </Row>
                      <div>
                        <label className="custom-control custom-checkbox-md">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-promo"
                          />
                          <span className="custom-control-label">
                            Take rules from parent rate plan
                          </span>
                        </label>
                        <p style={{ paddingLeft: "25px" }}>
                          Rules can always be updated using the bulk update
                          feature on the rates grid, which will supersede any
                          base rules taken from the parent rate plan. Rules
                          updated on the rates grid for the parent rate plan
                          will not update the rules for this derived rate plan.
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="Previous-button">
            <Button onClick={props.previousStep}>Previous</Button>
          </div>
          <div className="next-button">
            <Button
              onClick={() => {
                onSubmit();
              }}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DerivedRateFrom;
