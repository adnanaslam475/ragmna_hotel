import React, { useEffect, useState } from "react";
import { Button, Card, Nav, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Success,
} from "../../../../Redux/Services/toaster-service";
import { AppDispatch } from "../../../../Redux/Store";
import CreateSeason from "../CreateSeason/CreateSeason";
import {
  alterDerivedRate,
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
    await dispatch(getRoomType()).unwrap();
  };
  const [ratePlanDetails, setRatePlanDetails] = useState<any>({});
  const getByRateId = async () => {
    let response = await dispatch(getById(id ? id : "")).unwrap();
    setNightlyName(response?.data?.name);
  };
  useEffect(() => {
    if (id) {
      getByRateId();
    }
  }, [id]);
  useEffect(() => {
    if (isDerived) {
      setRatePlanDetails(rateData?.derivedRates[ind || 0]);
    } else {
      setRatePlanDetails(rateData);
    }
  }, [rateData]);

  useEffect(() => {
    getRoomTypes();
  }, []);
  const [details, setDetails] = useState<any[]>([
    { startDate: null, endDate: null },
  ]);

  const handelChange = (key, val) => {
    setRatePlanDetails({ ...ratePlanDetails, [key]: val });
  };

  const handleParentRatePlanChange = (key, val) => {
    setRatePlanDetails({
      ...ratePlanDetails,
      offer: { ...ratePlanDetails.offer, [key]: val.value },
    });
  };

  const handelCheckBoxChange = (e) => {
    if (e.target.checked) {
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
    if (isDerived) {
      if (e.target.checked) {
        let array = ratePlanDetails.roomTypes.slice();
        array.push(roomTypes[index]._id);
        const newObj = { ...ratePlanDetails, roomTypes: array };
        setRatePlanDetails(newObj);
      } else {
        let array = ratePlanDetails.roomTypes.slice();
        let i = array.findIndex((x) => x === id);
        array.splice(i, 1);
        const newObj = { ...ratePlanDetails, roomTypes: array };
        setRatePlanDetails(newObj);
      }
    } else {
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
    }
  };
  const handelChangeRestrictions = (key, val) => {
    let clonedObject = { ...ratePlanDetails };
    clonedObject = {
      ...clonedObject,
      restrictions: { ...clonedObject.restrictions, [key]: val ? key === 'promoCode' ? val : parseInt(val) : key === 'promoCode' ? '' : 0 },
    };
    setRatePlanDetails(clonedObject);
  };

  const handelCheckChange = (e, key) => {
    let clonedObject = { ...ratePlanDetails };
    if (e.target.checked) {
        clonedObject = {
          ...clonedObject,
          restrictions: { ...clonedObject.restrictions, [key]: key == 'promoCode'? '': null },
        };
        setRatePlanDetails(clonedObject);
    } else {
      if(key == 'LengthOfStay'){
        clonedObject = {
          ...clonedObject,
          restrictions: { ...clonedObject.restrictions, minimumNights: 0,maximumNights:0 },
        };
        setRatePlanDetails(clonedObject);
      } else {
      clonedObject = {
        ...clonedObject,
        restrictions: { ...clonedObject.restrictions, [key]: 0 },
      };
      setRatePlanDetails(clonedObject);
    }
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
    if (isDerived) {
      try {
        let payload = Object.assign({}, ratePlanDetails);
        payload["id"] = id;
        payload["dId"] = ratePlanDetails["_id"];
        let response: any = await dispatch(alterDerivedRate(payload)).unwrap();
        if (response.statusCode === 200) {
          Success("Derived Rate has been updated");
        }
      } catch (err: any) {}
    } else {
      try {
        let payload = Object.assign({}, ratePlanDetails);
        payload["id"] = id;
        let response: any = await dispatch(updateNightlyRate(payload)).unwrap();
        if (response.statusCode === 200) {
          Success("Rate has been updated");
        }
      } catch (err: any) {}
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
