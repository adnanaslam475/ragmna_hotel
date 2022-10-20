import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import StepWizard from "react-step-wizard";
import RateType from "./RateType/RateType";
import "./AddRate.scss";
import RateChannelDistribut from "./RateChannelDistribut/RateChannelDistribut";
import RatePlan from "./RatePlan/RatePlan";
import DefaultRatePlan from "./DefaultRatePlan/DefaultRatePlan";
import QualifyRatePlan from "./QualifyRatePlan/QualifyRatePlan";
import PoliciesRatePlan from "./PoliciesRatePlan/PoliciesRatePlan";
import BaseRate from "./BaseRate/BaseRate";
import { AppDispatch } from "../../../../Redux/Store";
import {
  getRoomType,
  selectRoomTypes,
  useRoomTypes,
} from "../RateList/RateSetupSlice";
import { useDispatch } from "react-redux";
const AddRate = () => {
  const [rate, setRate] = useState({
    type: "nightly",
    name: "",
    description: "",
    basePrice: "",
    roomTypes: [],
    restrictions: {
      minimumNights: 0,
      maximumNights: 0,
      promoCode: "",
    },
  });
  const setType = (type) => {
    setRate({ ...rate, type });
  };
  const setValues = (key, details) => {
    setRate({ ...rate, [key]: details });
  };
  const setRoomTypes = (roomTypes) => {
    setRate({ ...rate, roomTypes: roomTypes });
  };
  const restrictionsChange = (key, value) => {
    setRate({
      ...rate,
      restrictions: { ...rate.restrictions, [key]: value.target.value },
    });
  };
  const onSubmit = () => {};
  return (
    <React.Fragment>
      <Card>
        <Card.Body className="wizard-setup">
          <StepWizard>
            <RateType setType={setType} />
            <RatePlan changeInput={setValues} />
            <RateChannelDistribut />
            <BaseRate changeInput={setValues} />
            <DefaultRatePlan setRoomTypes={setRoomTypes} />
            <QualifyRatePlan
              rate={rate.restrictions}
              restrictionsChange={restrictionsChange}
            />
            <PoliciesRatePlan onSubmit={onSubmit} />
          </StepWizard>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default AddRate;
