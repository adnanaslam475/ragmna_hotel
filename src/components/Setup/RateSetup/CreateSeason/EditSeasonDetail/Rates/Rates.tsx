import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Rates.scss";
const Rates = () => {
  const [addAdditionalCharge, SetAddAdditionalCharge] =
    useState<boolean>(false);
  const [standardRoom, setStandardRoom] = useState(false);
  const [masterBedroom, setMasterBedroom] = useState(false);
  const [southernHospitality, setSouthernHospitality] = useState(false);

  const addAdditionalCharges = (e) => {
    SetAddAdditionalCharge(e.target.checked);
  };
  return (
    <React.Fragment>
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
                <span className="custom-control-label">Standard Room</span>
              </label>
            </div>

            {standardRoom ? (
              <div className="standard-rate-night">
                <div className="control-group form-group">
                  <label className="form-label">Rate per night</label>
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
                      <label className="form-label">Included Adults</label>
                      <i className="fe fe-minus-circle" />
                      <input className="check-input" type="number" />
                      <i className="fe fe-plus-circle" />
                    </div>
                    <div className="charge-input">
                      <label className="form-label">Included Persons</label>
                      <i className="fe fe-minus-circle" />
                      <input className="check-input" type="number" />
                      <i className="fe fe-plus-circle" />
                    </div>
                    <div className="control-group form-group">
                      <label className="form-label">Add.adult/night</label>
                      <input
                        type="number"
                        className="form-control required"
                        name="addAdult"
                        placeholder="$"
                      />
                    </div>
                    <div className="control-group form-group">
                      <label className="form-label">Add.child/night</label>
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
                <span className="custom-control-label">Master Bedroom</span>
              </label>
            </div>

            {masterBedroom ? (
              <div className="standard-rate-night">
                <div className="control-group form-group">
                  <label className="form-label">Rate per night</label>
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
                      <label className="form-label">Included Adults</label>
                      <i className="fe fe-minus-circle" />
                      <input className="check-input" type="number" />
                      <i className="fe fe-plus-circle" />
                    </div>
                    <div className="charge-input">
                      <label className="form-label">Included Persons</label>
                      <i className="fe fe-minus-circle" />
                      <input className="check-input" type="number" />
                      <i className="fe fe-plus-circle" />
                    </div>
                    <div className="control-group form-group">
                      <label className="form-label">Add.adult/night</label>
                      <input
                        type="number"
                        className="form-control required"
                        name="addAdult"
                        placeholder="$"
                      />
                    </div>
                    <div className="control-group form-group">
                      <label className="form-label">Add.child/night</label>
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
                  Southern Hospitality
                </span>
              </label>
            </div>

            {southernHospitality ? (
              <div className="standard-rate-night">
                <div className="control-group form-group">
                  <label className="form-label">Rate per night</label>
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
                      <label className="form-label">Included Adults</label>
                      <i className="fe fe-minus-circle" />
                      <input className="check-input" type="number" />
                      <i className="fe fe-plus-circle" />
                    </div>
                    <div className="charge-input">
                      <label className="form-label">Included Persons</label>
                      <i className="fe fe-minus-circle" />
                      <input className="check-input" type="number" />
                      <i className="fe fe-plus-circle" />
                    </div>
                    <div className="control-group form-group">
                      <label className="form-label">Add.adult/night</label>
                      <input
                        type="number"
                        className="form-control required"
                        name="addAdult"
                        placeholder="$"
                      />
                    </div>
                    <div className="control-group form-group">
                      <label className="form-label">Add.child/night</label>
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
    </React.Fragment>
  );
};

export default Rates;
