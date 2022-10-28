import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./RulesRestrictions.scss";
import Select from "react-select";
import { CommanDropDownType } from "../../../../PropertySetup/AddProperty/types";

const RulesRestrictions = (props: any) => {
  const { seasonBody, onHandleRestrictionInputChange, SetSeasonBody } = props
  const RoomTypes: CommanDropDownType[] = [
    { value: "Master Bedroom", label: "Master Bedroom" },
    { value: "Standard Room", label: "Standard Room" },
    { value: "Southern Hospitality", label: "Southern Hospitality" },
  ];
  const [addAssignRules, setAddAssignRules] = useState<boolean>(false);
  const [minNights, setMinNight] = useState<boolean>(false);
  const [maxNights, setMaxNights] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<boolean>(false);

  const [noCheckIn, setNoCheckIn] = useState<boolean>(false);
  const [noCheckOut, setNoCheckOut] = useState<boolean>(false);

  const assignRules = (e) => {
    setAddAssignRules(e.target.checked);
  };

  useEffect(() => {
    if (seasonBody['restrictions']['minimumNights']) {
      setMinNight(true)
    }
    if (seasonBody['restrictions']['maximumNights']) {
      setMaxNights(true)
    }
  }, [seasonBody])

  const handleCheckCHange = (e) => {
    let obj = seasonBody['restrictions']
    if (!e.target.checked) {
      if (e.target.name == 'minimumNights-check') {
        obj = {
          ...obj,
          minimumNights: 0
        }
      } else if (e.target.name == 'maximumNights-check') {
        obj = {
          ...obj,
          maximumNights: 0
        }
      } else if (e.target.name == 'promoCode-check') {
        obj = {
          ...obj,
          promoCode: ''
        }
      }
      const newObj = { ...seasonBody, restrictions: obj }
      SetSeasonBody(newObj)
    }
  }

  return (
    <React.Fragment>
      <div className="rules">
        <div className="rules-head">
          <h3>Rules/Restrictions</h3>
          <Form.Check
            className="ps-6 check-switch-style d-flex align-items-center"
            type="switch"
            id="additionalCharge"
            label="Assign rules by room class"
            onChange={(e) => {
              assignRules(e);
            }} />
        </div>
        <div className="rules-body">
          {addAssignRules ? (
            <div className="control-group form-group w-50">
              <label className="form-label">Room Type</label>
              <Select
                isMulti
                classNamePrefix="Select"
                options={RoomTypes}
                placeholder="State"
              />
            </div>
          ) : null}
          <Row>
            <Col lg={3}>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="minimumNights-check"
                  checked={minNights ? true : false}
                  onChange={(e) => {
                    if (e.target.checked) setMinNight(true)
                    else setMinNight(false)
                    handleCheckCHange(e)
                  }}
                />
                <span className="custom-control-label">Min nights</span>
              </label>
            </Col>
            <Col lg={3}>
              <span className="d-flex align-items-center">
                <i className="fe fe-minus-circle" />
                <input
                  disabled={!minNights}
                  className="check-input"
                  name='minimumNights'
                  value={seasonBody['restrictions']['minimumNights']}
                  onChange={(e) => {
                    if (e.target.checked) setMaxNights(true)
                    else setMaxNights(false)
                    onHandleRestrictionInputChange(e)
                  }}
                  type="number"
                />
                <i className="fe fe-plus-circle" />
              </span>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="maximumNights-check"
                  checked={seasonBody['restrictions']['maximumNights'] || maxNights ? true : false}
                  onChange={(e) => {
                    setMaxNights(!maxNights)
                    handleCheckCHange(e)
                  }}

                />
                <span className="custom-control-label">Max nights</span>
              </label>
            </Col>
            <Col lg={3}>
              <span className="d-flex align-items-center">
                <i className="fe fe-minus-circle" />
                <input
                  disabled={!maxNights}
                  className="check-input"
                  name='maximumNights'
                  value={seasonBody['restrictions']['maximumNights']}
                  onChange={(e) => {
                    onHandleRestrictionInputChange(e)
                  }}
                  type="number"
                />
                <i className="fe fe-plus-circle" />
              </span>
            </Col>

          </Row>
          <Row>
            <Col lg={3}>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="promoCode-check"
                  checked={seasonBody['restrictions']['promoCode'] || promoCode ? true : false}
                  onChange={(e) => {
                    setPromoCode(!promoCode)
                    handleCheckCHange(e)
                  }}
                />
                <span className="custom-control-label">
                  Promo Code
                </span>
              </label>
            </Col>
            <Col lg={3}>
              <input
                type="text"
                className="form-control required"
                value={seasonBody['restrictions']['promoCode']}
                name='promoCode'
                disabled={!promoCode && !seasonBody['restrictions']['promoCode']}
                onChange={(e) => {
                  onHandleRestrictionInputChange(e)
                }}
                placeholder="$"
              />
            </Col>
          </Row>
          {/* <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
                onClick={() => setNoCheckIn(!noCheckIn)}
              />
              <span className="custom-control-label">No check-in</span>
            </label>
          </div>
          {noCheckIn ? (
            <div className="day-checkbox">
              <Form.Check label="M" type="checkbox" />
              <Form.Check label="T" type="checkbox" />
              <Form.Check label="W" type="checkbox" />
              <Form.Check label="T" type="checkbox" />
              <Form.Check label="F" type="checkbox" />
              <Form.Check label="S" type="checkbox" />
              <Form.Check label="S" type="checkbox" />
            </div>
          ) : null}
          <div className="d-flex">
            <label className="custom-control custom-checkbox-md">
              <input
                type="checkbox"
                className="custom-control-input"
                name="example-checkbox5"
                defaultValue="option5"
                onClick={() => setNoCheckOut(!noCheckOut)}
              />
              <span className="custom-control-label">No check-out</span>
            </label>
          </div>
          {noCheckOut ? (
            <div className="day-checkbox">
              <Form.Check label="M" type="checkbox" />
              <Form.Check label="T" type="checkbox" />
              <Form.Check label="W" type="checkbox" />
              <Form.Check label="T" type="checkbox" />
              <Form.Check label="F" type="checkbox" />
              <Form.Check label="S" type="checkbox" />
              <Form.Check label="S" type="checkbox" />
            </div>
          ) : null} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RulesRestrictions;
