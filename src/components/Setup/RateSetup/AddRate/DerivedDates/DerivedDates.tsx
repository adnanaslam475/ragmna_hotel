import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { date } from "yup/lib/locale";
import "./DerivedDates.scss";

const DerivedDates = (props) => {
  const [selectedPlan, setSelectedPlan] = useState("");


  const handelChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const removeDate = (index) => {
    let temp = Object.assign([],props.customDate)
    temp.splice(index , 1)
    props.setCustomDate(temp)
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part p-4">
          <div>
            <h1>Which rate plan will you be deriving rates from?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="DerivedDate-part p-4">
          <div>
            <label className="custom-control custom-radio-md">
              <input
                type="radio"
                className="custom-control-input"
                name="derivedDate"
                value="Always available"
                checked={selectedPlan == "Always available"}
                onChange={(e) => {
                  handelChange(e);
                }}
              />
              <span className="custom-control-label">Always available</span>
              <p>
                Rates will exist for this rate plan for every day that the
                parent rate plan has rates
              </p>
            </label>
            <label className="custom-control custom-radio-md">
              <input
                type="radio"
                className="custom-control-input"
                name="derivedDate"
                value="Custom date range"
                checked={selectedPlan == "Custom date range"}
                onChange={(e) => {
                  handelChange(e);
                }}
              />
              <span className="custom-control-label">Custom date range</span>
              <p>
                Enter date ranges for when the derived rate plan will be
                available
              </p>
            </label>
            {selectedPlan == "Custom date range" ? (
              <div>
                {props.customDate.map((val, index) => {
                  return (
                    <div key={index} className="date-picker">
                      <DayPickerInput
                        format="DD/MM/YYYY"
                        dayPickerProps={{
                          disabledDays: { before: new Date() },
                        }}
                        value={val.startDate}
                        onDayChange={(e) => {props.setDates('startDate',e,index)}}
                      />
                      <DayPickerInput
                        format="DD/MM/YYYY"
                        dayPickerProps={{
                          disabledDays: { before: new Date() },
                        }}
                        value={val.endDate}
                        onDayChange={(e) => {props.setDates('endDate',e,index)}}
                      />
                      {props.customDate.length > 1 ?  <i
                        className="icon fe fe-minus-circle"
                        onClick={() => {
                          removeDate(index)
                        }}
                      /> : null}
                    </div>
                  );
                })}
                <i
                  className="icon i-plus fe fe-plus-circle"
                  onClick={() => {
                    props.setCustomDate([...props.customDate, { startDate:null, endDate:null}]);
                  }}
                />
              </div>
            ) : null}
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

export default DerivedDates;
