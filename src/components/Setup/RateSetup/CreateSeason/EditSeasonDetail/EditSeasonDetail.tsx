import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import "./EditSeasonDetail.scss";
import Select from "react-select";
import { CommanDropDownType } from "../../../PropertySetup/AddProperty/types";
import Rates from "./Rates/Rates";
import RulesRestrictions from "./RulesRestrictions/RulesRestrictions";
import Policies from "./Policies/Policies";
import { getById, useRateData } from "../../RateSetupSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../../../../Redux/Store";
import { AnyArray } from "immer/dist/internal";

export interface EditSeasonDetailProps {
  isModelClose: React.Dispatch<React.SetStateAction<boolean>>;
  season: any;
}

const EditSeasonDetail = (props: EditSeasonDetailProps) => {
  const { isModelClose, season } = props;
  const { rateData } = useRateData();
  const dispatch = useDispatch<AppDispatch>();
  let { id } = useParams();
  const getByRateId = () => {
    let response = dispatch(getById(id ? id : "")).unwrap;
  };
  useEffect(() => {
    if (id) {
      getByRateId();
    }
  }, [id]);
  const [show, setShow] = useState(true);
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

  useEffect(() => {
    if (season && rateData) {
      let clonedObject = { ...seasonBody };
      clonedObject = {
        ...clonedObject,
        name: season.name,
        color: season.color,
        startDate: season.startDate,
        endDate: season.endDate,
        days: season.days,
        restrictions: rateData.restrictions,
        roomTypes: rateData.roomTypes,
        channels: rateData.channels,
        depositPolicy: rateData.depositPolicy,
        cancellationPolicy: rateData.cancellationPolicy,
        checkInPolicy: rateData.checkInPolicy,
        noShowPolicy: rateData.noShowPolicy,
      };
      SetSeasonBody(clonedObject);
    }
  }, [rateData, season]);
  const setbasePrice = (index, value) => {
    if (seasonBody.roomTypes.length) {
      let array = seasonBody.roomTypes.slice();
      if (array[index]?.price) {
        array[index] = {
          roomTypeId: array[index].roomTypeId,
          channelPrices: array[index].channelPrices,
          price: value,
        };
      }
      const newObj = { ...seasonBody, roomTypes: array };
      SetSeasonBody(newObj);
    }
  };
  const setChannelPrice = (index, value, channel, cIndex) => {
    let array = seasonBody.roomTypes.slice();
    let channelArray = seasonBody.roomTypes[index].channelPrices.slice();
    channelArray[cIndex] = {
      price: value,
      channel: channel,
    };
    array[index] = {
      roomTypeId: array[index].roomTypeId,
      channelPrices: channelArray,
      price: array[index].price,
    };
    const newObj = { ...seasonBody, roomTypes: array };
    SetSeasonBody(newObj);
  };
  return (
    <React.Fragment>
      <Modal
        size="xl"
        show={show}
        onHide={() => {
          isModelClose(false);
        }}
        className="season-modal"
      >
        <ModalBody className="season-body-modal">
          <Row>
            <Tab.Container defaultActiveKey="first">
              <Col lg={3} className="sidebar-main">
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
                <div className="side-button">
                  <Button
                    variant="primary"
                    onClick={() => {
                      isModelClose(false);
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
                      seasonBody={seasonBody}
                      setbasePrice={setbasePrice}
                      setChannelPrice={setChannelPrice}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <RulesRestrictions />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Policies />
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
