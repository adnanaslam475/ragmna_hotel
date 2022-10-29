import React, { useState } from "react";
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
import {
  CustomDateTypes,
  DerivedRateTypes,
  RateTypes,
} from "../rateSetupTypes";
const AddRate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [type, setRateType] = useState("nightly");
  const [rate, setRate] = useState<RateTypes>({
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
    depositPolicy: undefined,
    cancellationPolicy: undefined,
    checkInPolicy: undefined,
    noShowPolicy: undefined,
  });
  const [customDate, setCustomDate] = useState<CustomDateTypes[]>([
    {
      startDate: undefined,
      endDate: undefined,
    },
  ]);
  const [derivedRate, setDerivedRate] = useState<DerivedRateTypes>({
    name: "",
    description: "",
    // period: [
    //   {
    //     startDate: "",
    //     endDate: "",
    //   },
    // ],
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
    depositPolicy: undefined,
    cancellationPolicy: undefined,
    checkInPolicy: undefined,
    noShowPolicy: undefined,
    roomTypes: [{ roomTypeId: "" }],
  });
  const setType = (type) => {
    setRateType(type);
  };
  const setValues = (key, details) => {
    if (type === "nightly") {
      setRate({ ...rate, [key]: details });
    } else {
      setDerivedRate({ ...derivedRate, [key]: details });
    }
  };
  const setRoomTypes = (roomTypes) => {
    if (type === "nightly") {
      setRate({ ...rate, roomTypes: roomTypes });
    } else {
      setDerivedRate({ ...derivedRate, roomTypes: roomTypes });
    }
  };
  const saveChannel = (channels) => {
    if (type === "nightly") {
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
    if (type === "nightly") {
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
    let temp: any = Object.assign([], customDate);
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
    if (type === "nightly") {
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
        payload["rateId"] = rateId;
        payload["roomTypes"] = temp;
        if (customDate[0].startDate) {
          payload["period"] = [...customDate];
        }
        let response: any = await dispatch(addDerived(payload)).unwrap();
        if (response) {
          let path = `/setup/ratesetup`;
          navigate(path);
          Success("Derived rate has been added");
        }
      } catch (err: any) {
        console.log(err);
      }
    }
  };
  const onRadioChange = (e, ind, val, types) => {
    if (type === "nightly") {
      switch (types) {
        case "cancellation":
          if (e.target.checked) {
            setRate({ ...rate, cancellationPolicy: val._id });
          } else {
            setRate({ ...rate, cancellationPolicy: undefined });
          }
          break;
        case "deposit":
          if (e.target.checked) {
            setRate({ ...rate, depositPolicy: val._id });
          } else {
            setRate({ ...rate, depositPolicy: undefined });
          }
          break;
        case "check-In":
          if (e.target.checked) {
            setRate({ ...rate, checkInPolicy: val._id });
          } else {
            setRate({ ...rate, checkInPolicy: undefined });
          }
          break;
        case "No-Show":
          if (e.target.checked) {
            setRate({ ...rate, noShowPolicy: val._id });
          } else {
            setRate({ ...rate, noShowPolicy: undefined });
          }
          break;

        default:
          break;
      }
    } else {
      switch (types) {
        case "cancellation":
          if (e.target.checked) {
            setDerivedRate({ ...derivedRate, cancellationPolicy: val._id });
          } else {
            setDerivedRate({ ...derivedRate, cancellationPolicy: undefined });
          }
          break;
        case "deposit":
          if (e.target.checked) {
            setDerivedRate({ ...derivedRate, depositPolicy: val._id });
          } else {
            setDerivedRate({ ...derivedRate, depositPolicy: undefined });
          }
          break;
        case "check-In":
          if (e.target.checked) {
            setDerivedRate({ ...derivedRate, checkInPolicy: val._id });
          } else {
            setDerivedRate({ ...derivedRate, checkInPolicy: undefined });
          }
          break;
        case "No-Show":
          if (e.target.checked) {
            setDerivedRate({ ...derivedRate, noShowPolicy: val._id });
          } else {
            setDerivedRate({ ...derivedRate, noShowPolicy: undefined });
          }
          break;

        default:
          break;
      }
    }
  };

  const clearPolicy = (e, types) => {
    if (type === "nightly") {
      switch (types) {
        case "cancellation":
          setRate({ ...rate, cancellationPolicy: undefined });
          break;
        case "deposit":
          setRate({ ...rate, depositPolicy: undefined });
          break;
        case "check-In":
          setRate({ ...rate, checkInPolicy: undefined });
          break;
        case "No-Show":
          setRate({ ...rate, noShowPolicy: undefined });
          break;
        default:
          break;
      }
    } else {
      switch (types) {
        case "cancellation":
          setDerivedRate({ ...derivedRate, cancellationPolicy: undefined });
          break;
        case "deposit":
          setDerivedRate({ ...derivedRate, depositPolicy: undefined });
          break;
        case "check-In":
          setDerivedRate({ ...derivedRate, checkInPolicy: undefined });
          break;
        case "No-Show":
          setDerivedRate({ ...derivedRate, noShowPolicy: undefined });
          break;
        default:
          break;
      }
    }
  };
  return (
    <React.Fragment>
      <Card>
        <Card.Body className="wizard-setup">
          {type === "nightly" ? (
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
              <PoliciesRatePlan
                rate={rate}
                clearPolicy={clearPolicy}
                onRadioChange={onRadioChange}
                onSubmit={onSubmit}
              />
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
              />
              <RateChannelDistribut saveChannel={saveChannel} />
              <DefaultRatePlan setRoomTypes={setRoomTypes} />
              <QualifyRatePlan
                rate={derivedRate.restrictions}
                restrictionsChange={restrictionsChange}
              />
              <PoliciesRatePlan
                rate={derivedRate}
                clearPolicy={clearPolicy}
                onRadioChange={onRadioChange}
                onSubmit={onSubmit}
              />
            </StepWizard>
          )}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
export default AddRate;
