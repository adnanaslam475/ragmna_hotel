import React, { useState, useEffect, Fragment } from "react";
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
import { addDerived, addNightly } from "../RateSetupSlice";
import DerivedRateFrom from "./DerivedRateFrom/DerivedRateFrom";
import DerivedDates from "./DerivedDates/DerivedDates";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../Redux/Services/toaster-service";
const AddRate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [type, setRateType] = useState("nightly");
  const [rate, setRate] = useState({
    name: "",
    description: "",
    displayName: "",
    roomTypes: [],
    channels: [],
    restrictions: {
      minimumNights: 0,
      maximumNights: 0,
      promoCode: "",
    },
    default: false,
  });
  const [customDate, setCustomDate] = useState<any>([
    {
      startDate: null,
      endDate: null,
    },
  ]);
  const [derivedRate, setDerivedRate] = useState({
    name: "",
    description: "",
    period: [
      {
        startDate: "",
        endDate: "",
      },
    ],
    channels: [],
    offer: {
      type: "",
      calculationType: "",
      amount: 0,
    },
    restrictions: {
      minimumNights: 0,
      maximumNights: 0,
      promoCode: "",
    },
    roomTypes: [{ roomTypeId: "" }],
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
    if (type == "nightly") {
      setRate({ ...rate, roomTypes: roomTypes });
    } else {
      setDerivedRate({ ...derivedRate, roomTypes: roomTypes });
    }
  };
  const saveChannel = (channels) => {
    if (type == "nightly") {
      setRate({ ...rate, channels: channels });
    } else {
      setDerivedRate({ ...derivedRate, channels: channels });
    }
  };
  const derivedValueChange = (key, value) => {
    setDerivedRate({
      ...derivedRate,
      offer: {
        ...derivedRate.offer,
        [key]: value,
      },
    });
  };
  const restrictionsChange = (key, value) => {
    if (type == "nightly") {
      setRate({
        ...rate,
        restrictions: { ...rate.restrictions, [key]: value.target.value },
      });
    } else {
      setDerivedRate({
        ...derivedRate,
        restrictions: {
          ...derivedRate.restrictions,
          [key]: value.target.value,
        },
      });
    }
  };
  const setDates = (key, value, index) => {
    let temp = Object.assign([], customDate);
    temp[index][key] = value;
    setCustomDate(temp);
  };
  const changeInput = (key, value, index) => {
    let temp: any = Object.assign([], rate);
    temp.roomTypes[index][key] = parseInt(value);
    setRate(temp);
  };
  const [rateId, setRateId] = useState<string>("");
  const selectedRateTypeID = (id) => {
    setRateId(id);
  };
  let navigate = useNavigate();
  const RouteChange = (id) => {
    let path = `/setup/ratesetup/createseason/${id}`;
    navigate(path);
  };
  const onSubmit = async () => {
    if (type == "nightly") {
      try {
        let payload = Object.assign({}, rate);
        let response: any = await dispatch(addNightly(payload)).unwrap();
        if (response) {
          RouteChange(response.data._id);
          Success("Nightly rate has been added");
        }
      } catch (err: any) {
        console.log(err);
      }
    } else {
      try {
        let temp: any = [];
        for (let i = 0; i < derivedRate.roomTypes.length; i++) {
          temp.push(derivedRate.roomTypes[i].roomTypeId);
        }
        let payload = Object.assign({}, derivedRate);
        payload["period"] = [...customDate];
        // payload["rateId"] = rateId;
        payload["roomTypes"] = temp;
        let response: any = await dispatch(addDerived(payload)).unwrap();
        console.log(response, "ADD dereived RATE");
        if (response) {
          // RouteChange();
          Success("Derived rate has been added");
        }
      } catch (err: any) {
        console.log(err);
      }
    }
  };
  return (
    <React.Fragment>
      <Card>
        <Card.Body className="wizard-setup">
          {type == "nightly" ? (
            <StepWizard>
              <RateType setType={setType} />
              <RatePlan changeInput={setValues} />
              <RateChannelDistribut saveChannel={saveChannel} />
              <DefaultRatePlan setRoomTypes={setRoomTypes} />
              <BaseRate changeInput={changeInput} roomTypes={rate.roomTypes} />
              <QualifyRatePlan
                rate={rate.restrictions}
                restrictionsChange={restrictionsChange}
              />
              <PoliciesRatePlan onSubmit={onSubmit} />
            </StepWizard>
          ) : (
            <StepWizard>
              <RateType setType={setType} />
              <RatePlan changeInput={setValues} />
              <DerivedRateFrom
                derivedRate={derivedRate.offer}
                valueChange={derivedValueChange}
                selectedRateTypeID={selectedRateTypeID}
              />
              <DerivedDates
                customDate={customDate}
                setDates={setDates}
                setCustomDate={setCustomDate}
                derivedDate={derivedRate.period}
              />
              <RateChannelDistribut saveChannel={saveChannel} />
              <DefaultRatePlan setRoomTypes={setRoomTypes} />
              <QualifyRatePlan
                rate={derivedRate.restrictions}
                restrictionsChange={restrictionsChange}
              />
              <PoliciesRatePlan onSubmit={onSubmit} />
            </StepWizard>
          )}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
export default AddRate;
