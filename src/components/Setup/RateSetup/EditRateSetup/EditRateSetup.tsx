import React, { useEffect, useState } from "react";
import { Button, Card, Nav, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateRate } from "../../../../Redux/Services/rateService";
import {
  DangerLeft,
  Success,
} from "../../../../Redux/Services/toaster-service";
import { AppDispatch } from "../../../../Redux/Store";
import CreateSeason from "../CreateSeason/CreateSeason";
import {
  getById,
  getRoomType,
  updateNightlyRate,
  useRateData,
  useRoomTypes,
} from "../RateSetupSlice";
import EditRateInfo from "./EditRateInfo/EditRateInfo";
import EditRatePolicies from "./EditRatePolicies/EditRatePolicies";

const EditRateSetup = () => {
  const [nightlyName, setNightlyName] = useState<any>("");
  const dispatch = useDispatch<AppDispatch>();
  let { id, isDerived, ind } = useParams();
  const { rateData } = useRateData();
  const { roomTypes } = useRoomTypes();
  const getRoomTypes = async () => {
    const response = await dispatch(getRoomType()).unwrap();
  };

  const getByRateId = async () => {
    let response = await dispatch(getById(id ? id : "")).unwrap();
    console.log(response);
    setNightlyName(response?.data?.name);
  };
  useEffect(() => {
    if (id) {
      getByRateId();
    }
  }, [id]);
  useEffect(() => {
    getRoomTypes();
  }, []);
  const [details, setDetails] = useState<any[]>([
    { startDate: null, endDate: null },
  ]);
  const [ratePlanDetails, setRatePlanDetails] = useState<any>(
    isDerived && ind ? rateData?.derivedRates[ind] : rateData
  );

  const handelChange = (key, val) => {
    setRatePlanDetails({ ...ratePlanDetails, [key]: val });
  };

  const handleParentRatePlanChange = (key, val) => {
    setRatePlanDetails({
      ...ratePlanDetails,
      offer: { ...ratePlanDetails.offer, [key]: val.value },
    });
  };
  console.log(ratePlanDetails, "ratePlanDetails");

  const handelCheckBoxChange = (e) => {
    if (e.target.checked) {
      let i = ratePlanDetails.channels.findIndex((x) => x === e.target.name);
      let array = ratePlanDetails.channels.slice();
      array.push(e.target.name);
      const newObj = { ...ratePlanDetails, channels: array };
      setRatePlanDetails(newObj);
    } else {
      let i = ratePlanDetails.channels.findIndex((x) => x === e.target.name);
      let array = ratePlanDetails.channels.slice();
      array.splice(i, 1);
      const newObj = { ...ratePlanDetails, channels: array };
      setRatePlanDetails(newObj);
    }
  };
  const handelRoomChange = (e, id, index) => {
    if (e.target.checked) {
      let array = ratePlanDetails.roomTypes.slice();
      array.push({
        roomTypeId: roomTypes[index]._id,
        price: 0,
        channelPrices: [],
      });
      const newObj = { ...ratePlanDetails, roomTypes: array };
      setRatePlanDetails(newObj);
    } else {
      let array = ratePlanDetails.roomTypes.slice();
      let i = array.findIndex((x) => x.roomTypeId === id);
      array.splice(i, 1);
      const newObj = { ...ratePlanDetails, roomTypes: array };
      setRatePlanDetails(newObj);
    }
  };
  const handelChangeRestrictions = (key, val) => {
    let clonedObject = { ...ratePlanDetails };
    clonedObject = {
      ...clonedObject,
      restrictions: { ...clonedObject.restrictions, [key]: val },
    };
    setRatePlanDetails(clonedObject);
  };

  const handelCheckChange = (e, key) => {
    if (e.target.checked) {
      let clonedObject = { ...ratePlanDetails };
      clonedObject = {
        ...clonedObject,
        restrictions: { ...clonedObject.restrictions, [key]: 1 },
      };
      setRatePlanDetails(clonedObject);
    } else {
      let clonedObject = { ...ratePlanDetails };
      clonedObject = {
        ...clonedObject,
        restrictions: { ...clonedObject.restrictions, [key]: null },
      };
      setRatePlanDetails(clonedObject);
    }
  };
  const onRadioChange = (e, ind, val, key) => {
    switch (key) {
      case "cancellation":
        if (e.target.checked) {
          setRatePlanDetails({
            ...ratePlanDetails,
            cancellationPolicy: val._id,
          });
        } else {
          setRatePlanDetails({
            ...ratePlanDetails,
            cancellationPolicy: undefined,
          });
        }
        break;
      case "deposit":
        if (e.target.checked) {
          setRatePlanDetails({ ...ratePlanDetails, depositPolicy: val._id });
        } else {
          setRatePlanDetails({
            ...ratePlanDetails,
            depositPolicy: undefined,
          });
        }
        break;
      case "check-In":
        if (e.target.checked) {
          setRatePlanDetails({ ...ratePlanDetails, checkInPolicy: val._id });
        } else {
          setRatePlanDetails({
            ...ratePlanDetails,
            checkInPolicy: undefined,
          });
        }
        break;
      case "No-Show":
        if (e.target.checked) {
          setRatePlanDetails({ ...ratePlanDetails, noShowPolicy: val._id });
        } else {
          setRatePlanDetails({ ...ratePlanDetails, noShowPolicy: undefined });
        }
        break;

      default:
        break;
    }
  };
  const clearPolicy = (e, key) => {
    switch (key) {
      case "cancellation":
        setRatePlanDetails({
          ...ratePlanDetails,
          cancellationPolicy: undefined,
        });
        break;
      case "deposit":
        setRatePlanDetails({ ...ratePlanDetails, depositPolicy: undefined });
        break;
      case "check-In":
        setRatePlanDetails({ ...ratePlanDetails, checkInPolicy: undefined });
        break;
      case "No-Show":
        setRatePlanDetails({ ...ratePlanDetails, noShowPolicy: undefined });
        break;
      default:
        break;
    }
  };
  const updateRates = async () => {
    try {
      let payload = Object.assign({}, ratePlanDetails);
      payload["id"] = id;
      let response: any = await dispatch(updateNightlyRate(payload)).unwrap();
      if (response.statusCode === 200) {
        Success("Rate has been updated");
      }
    } catch (err: any) {
      DangerLeft("Something went wrong!");
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <Card className="card-bg">
        <Card.Body>
          <div className="panel panel-secondary">
            <Tab.Container id="left-tabs-example p-0" defaultActiveKey="first">
              <div className="tab-name-container d-flex justify-content-between">
                <Nav
                  variant="pills"
                  className="panel-tabs nav-tabs panel-secondary"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Rate plan overview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      Restrictions & Policies
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Calendar</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Button
                  onClick={() => updateRates()}
                  style={{ borderRadius: "0px 10px 10px 0" }}
                >
                  Save
                </Button>
              </div>
              <div className="tab-content-container">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <EditRateInfo
                      ratePlanDetails={ratePlanDetails}
                      handelChange={handelChange}
                      nightlyName={nightlyName}
                      setRatePlanDetails={setRatePlanDetails}
                      handelCheckBoxChange={handelCheckBoxChange}
                      handleParentRatePlanChange={handleParentRatePlanChange}
                      handelRoomChange={handelRoomChange}
                      isDerived={isDerived}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <EditRatePolicies
                      handelChangeRestrictions={handelChangeRestrictions}
                      editPolicies={ratePlanDetails}
                      onRadioChange={onRadioChange}
                      handelCheckChange={handelCheckChange}
                      clearPolicy={clearPolicy}
                      isDerived={isDerived}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <CreateSeason
                      ratePlanDetails={ratePlanDetails}
                      setRatePlanDetails={setRatePlanDetails}
                      details={details}
                      setDetails={setDetails}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default EditRateSetup;
