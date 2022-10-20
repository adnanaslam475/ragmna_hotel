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
  const [selectRateType, selSelectRateType] = useState<"percent" | "USD">();
  console.log(selectRateType, "selectRateType");

  const dispatch = useDispatch<AppDispatch>();
  const getRateDetails = async () => {
    let response: any = await dispatch(getRate()).unwrap();
    console.log(response, "response");
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
    { value: "percent", label: "percent" },
    { value: "USD", label: "USD" },
  ];

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part p-4">
          <div>
            <h1>Which rate plan will you be deriving rates from?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="Derived-part p-4">
          <div>
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
                      <span>
                        Rates for the derived rate plan are the
                        <div className="type-input">
                          {selectRateType == "USD" ? (
                            <i className="icon fe fe-dollar-sign" />
                          ) : null}
                          <input type="number" />
                          {selectRateType == "percent" ? (
                            <i className="icon fe fe-percent" />
                          ) : null}
                        </div>
                        <Select
                          classNamePrefix="Select"
                          options={inputType}
                          value={inputType.filter(
                            (option) => option.value === selectRateType
                          )}
                          placeholder="Select"
                          name="type"
                          onChange={(selectedOption: any) => {
                            selSelectRateType(selectedOption?.value);
                          }}
                        />
                        <Select classNamePrefix="Select" options={rateThan} />
                        {val.displayName}
                      </span>
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
            <Button onClick={props.nextStep}>Next</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DerivedRateFrom;
