import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import "./EditSeasonDetail.scss";
import Rates from "./Rates/Rates";
import RulesRestrictions from "./RulesRestrictions/RulesRestrictions";
import Policies from "./Policies/Policies";
import {
  addSeason,
  alterSeason,
  getById,
  useRateData,
} from "../../RateSetupSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../../../../Redux/Store";
import {
  Success,
  DangerLeft,
} from "../../../../../Redux/Services/toaster-service";

export interface EditSeasonDetailProps {
  isModelClose: React.Dispatch<React.SetStateAction<boolean>>;
  season: any;
}

const EditSeasonDetail = (props: EditSeasonDetailProps) => {
  const { isModelClose, season } = props;
  const { rateData } = useRateData();
  const dispatch = useDispatch<AppDispatch>();
  let { id } = useParams();
  const getByRateId = async () => {
    await dispatch(getById(id ? id : "")).unwrap;
  };
  useEffect(() => {
    if (id) {
      getByRateId();
    }
  }, [id]);

  let [seasonBody, SetSeasonBody] = useState<any>({
    name: "",
    startDate: "",
    endDate: "",
    days: [],
    roomTypes: [
      {
        price: 0,
        rommTypeId: "",
        channels: [],
      },
    ],
    channels: [],
    color: "",
    depositPolicy: "",
    cancellationPolicy: "",
    checkInPolicy: "",
    noShowPolicy: "",
    restrictions: {
      minimumNights: 0,
      maximumNights: 0,
      promoCode: "",
    },
  });
  console.log(season, 'season');

  useEffect(() => {
    if (season && season._id) {
      let clonedObject = { ...seasonBody };
      clonedObject = {
        ...clonedObject,
        name: season.name,
        color: season.color,
        startDate: season.startDate,
        endDate: season.endDate,
        days: season.days,
        restrictions: season.restrictions,
        roomTypes: season.roomTypes,
        channels: season.channels,
        depositPolicy: season.depositPolicy,
        cancellationPolicy: season.cancellationPolicy,
        checkInPolicy: season.checkInPolicy,
        noShowPolicy: season.noShowPolicy,
      };
      SetSeasonBody(clonedObject);
    }
  }, [season]);
  console.log(rateData, 'rateData');

  useEffect(() => {
    if (!season._id) {
      if (season && rateData) {

        let array: any = []
        for (let i = 0; i < rateData?.channels.length; i++) {
          array.push({
            channel: rateData?.channels[i],
            price: 0
          })
        }

        let array2: any = []
        for (let j = 0; j < rateData?.roomTypes.length; j++) {
          array2.push({
            ...rateData.roomTypes[j],
            channelPrices: array
          })
        }

        let clonedObject = { ...seasonBody };
        clonedObject = {
          ...clonedObject,
          name: season.name,
          color: season.color,
          startDate: season.startDate,
          endDate: season.endDate,
          days: season.days,
          restrictions: rateData.restrictions,
          roomTypes: array2,
          channels: rateData.channels,
          depositPolicy: rateData.depositPolicy,
          cancellationPolicy: rateData.cancellationPolicy,
          checkInPolicy: rateData.checkInPolicy,
          noShowPolicy: rateData.noShowPolicy,
        };
        SetSeasonBody(clonedObject);
      }
    }
  }, [rateData, season]);

  const setbasePrice = (index, value) => {
    if (seasonBody.roomTypes.length) {
      let array = seasonBody.roomTypes.slice();
      // if (value) {
        array[index] = {
          roomTypeId: array[index].roomTypeId,
          channelPrices: array[index].channelPrices,
          price: value ? parseInt(value) : 0,
        }
      // } else {
      //   array[index] = {
      //     roomTypeId: array[index].roomTypeId,
      //     channelPrices: array[index].channelPrices,
      //     price: 0,
      //   }
      // }
      const newObj = { ...seasonBody, roomTypes: array };
      SetSeasonBody(newObj);
    } 

  };

  const hexToRGB = (hex: string, alpha: number | undefined = 1) => {
    hex = hex.toUpperCase();

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const setChannelPrice = (index, value, channel, cIndex) => {
    let array = seasonBody.roomTypes.slice();
    let channelArray = seasonBody.roomTypes[index].channelPrices.slice();
    if (value) {
      channelArray[cIndex] = {
        price: parseInt(value),
        channel: channel,
      };
    }
    else {
      channelArray[cIndex] = {
        price: 0,
        channel: channel,
      };
    }
    array[index] = {
      roomTypeId: array[index].roomTypeId,
      channelPrices: channelArray,
      price: array[index].price,
    };
    const newObj = { ...seasonBody, roomTypes: array };
    SetSeasonBody(newObj);

  };

  const onHandleRestrictionInputChange = (e) => {
    let obj = seasonBody["restrictions"];
    if (e.target.name === "minimumNights") {
      obj = {
        ...obj,
        minimumNights: parseInt(e.target.value),
      };
    } else if (e.target.name === "maximumNights") {
      obj = {
        ...obj,
        maximumNights: parseInt(e.target.value),
      };
    } else if (e.target.name === "promoCode") {
      obj = {
        ...obj,
        promoCode: e.target.value,
      };
    }
    const newObj = { ...seasonBody, restrictions: obj };
    SetSeasonBody(newObj);
  };

  const handleSubmitClick = async () => {
    if (season && season._id) {
      try {
        let payload = Object.assign({}, seasonBody);
        payload["id"] = rateData["_id"];
        payload["sId"] = season._id;
        let response: any = await dispatch(alterSeason(payload)).unwrap();
        if (response) {
          isModelClose(false);
          Success("Season has been Updated");
        }
      } catch (err: any) {
        DangerLeft("Something went Wrong");
      }
    } else {
      try {
        let payload = Object.assign({}, seasonBody);
        payload["id"] = rateData["_id"];
        let response: any = await dispatch(addSeason(payload)).unwrap();
        if (response) {
          isModelClose(false);
          Success("Season has been saved");
        }
      } catch (err: any) {
        DangerLeft("Something went Wrong");
      }
    }
  };

  const onRateCheckBoxChange = (e, index) => {
    let array: any = seasonBody.roomTypes.slice();
    let array2: any = seasonBody.roomTypes[index].channelPrices.slice()
    if (e.target.checked) {
      for (let j = 0; j < array2.length; j++) {
        array2[j] = {
          ...array2[j],
          price: null
        }
      }
      array[index] = {
        roomTypeId: array[index].roomTypeId,
        channelPrices: array2,
        price: null,
      };
      const newObj = { ...seasonBody, roomTypes: array };
      SetSeasonBody(newObj);
      // console.log(array2,'array2');

    } else {

      for (let j = 0; j < array2.length; j++) {
        array2[j] = {
          ...array2[j],
          price: 0
        }
      }
      console.log(array2, 'array2');

      array[index] = {
        roomTypeId: array[index].roomTypeId,
        // channelPrices: array[index].channelPrices,
        channelPrices: array2,
        price: 0,
      };
      const newObj = { ...seasonBody, roomTypes: array };
      SetSeasonBody(newObj);
    }
  }
  console.log(seasonBody, 'seasonBody');

  return (
    <React.Fragment>
      <Modal
        size="xl"
        show={true}
        onHide={() => {
          isModelClose(false);
        }}
        className="season-modal"
      >
        <ModalBody className="season-body-modal">
          <Row>
            <Tab.Container defaultActiveKey="first">
              <Col
                lg={3}
                style={{ backgroundColor: hexToRGB(season.color, 0.5) }}
                className="sidebar-main"
              >
                <div>
                  <div className="main-header">
                    <h1>{season.name}</h1>
                  </div>
                  <div className="edit-tab-container">
                    <Nav>
                      <Nav.Item>
                        <Nav.Link eventKey="first">Rates</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Rules/Restrictions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Policies</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <div className="side-button">
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleSubmitClick();
                    }}
                  >
                    Save Changes
                  </Button>
                </div>
              </Col>
              <Col lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Rates
                      onRateCheckBoxChange={onRateCheckBoxChange}
                      seasonBody={seasonBody}
                      setbasePrice={setbasePrice}
                      setChannelPrice={setChannelPrice}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <RulesRestrictions
                      seasonBody={seasonBody}
                      SetSeasonBody={SetSeasonBody}
                      onHandleRestrictionInputChange={
                        onHandleRestrictionInputChange
                      }
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Policies
                      seasonBody={seasonBody}
                      SetSeasonBody={SetSeasonBody}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Row>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default EditSeasonDetail;
