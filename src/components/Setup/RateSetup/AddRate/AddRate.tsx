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
import { useDispatch } from "react-redux";
import { addNightly } from "../RateSetupSlice";
import DerivedRateFrom from "./DerivedRateFrom/DerivedRateFrom";
import DerivedDates from "./DerivedDates/DerivedDates";
const AddRate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [type, setRateType] = useState("nightly");
  const [rate, setRate] = useState({
    name: "",
    description: "",
    displayName: "",
    basePrice: "",
    roomTypes: [],
    channels: [],
    restrictions: {
      minimumNights: 0,
      maximumNights: 0,
      promoCode: "",
    },
    default: false,
  });
  const [derivedRate, setDerivedRate] = useState({
    name: "",
    description: "",
    period: [
      {
        startDate: "",
        endDate: "",
      },
    ],
    channels: ["Website"],
    offer: {
      type: "Less Than",
      calculationType: "Fixed",
      amount: 0,
    },
    restrictions: {
      minimumNights: 0,
      maximumNights: 0,
      promoCode: "",
    },
    roomTypes: [""],
    depositPolicy: "",
    cancellationPolicy: "",
    checkInPolicy: "",
    noShowPolicy: "",
  });
  const setType = (type) => {
    setRateType(type);
  };
  const setValues = (key, details) => {
    if (type == "nightly") {
      setRate({ ...rate, [key]: details });
    } else {
      setDerivedRate({ ...derivedRate, [key]: details });
    }
  };
  const setRoomTypes = (roomTypes) => {
    setRate({ ...rate, roomTypes: roomTypes });
  };
  const saveChannel = (channels) => {
    setRate({ ...rate, channels: channels });
  };
  const restrictionsChange = (key, value) => {
    setRate({
      ...rate,
      restrictions: { ...rate.restrictions, [key]: value.target.value },
    });
  };
  const onSubmit = async () => {
    try {
      let payload = Object.assign({}, rate);
      let response: any = await dispatch(addNightly(payload)).unwrap();
      console.log(response, "ADD RATE");
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <Card>
        <Card.Body className="wizard-setup">
          <StepWizard>
            <RateType setType={setType} />
            <RatePlan changeInput={setValues} />
            {type == "nightly" ? (
              <RateChannelDistribut saveChannel={saveChannel} />
            ) : (
              <DerivedRateFrom />
            )}
            {type == "nightly" ? (
              <BaseRate changeInput={setValues} />
            ) : (
              <DerivedDates />
            )}
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
