import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../Redux/Store";
import "./RateList.scss";
import {
  getRate,
  getRoomType,
  removeRate,
  useRateList,
  useRoomTypes,
} from "../RateSetupSlice";
import {
  DangerLeft,
  Success,
} from "../../../../Redux/Services/toaster-service";
import ConformationPopup from "../../../../Modals/ConformationPopup/ConformationPopup";
const RateList = () => {
  let navigate = useNavigate();
  const [isOpenDeletePopUp, setIsOpenDeletePopUp] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState("");
  const RouteChange = () => {
    let path = `/setup/ratesetup/addrate`;
    navigate(path);
  };
  const { roomTypes } = useRoomTypes();
  const getRoomTypes = async () => {
    await dispatch(getRoomType()).unwrap();
  };
  useEffect(() => {
    getRoomTypes();
  }, []);
  const { rateList } = useRateList();
  console.log(rateList, "rateList");
  const dispatch = useDispatch<AppDispatch>();
  const getRateDetails = async () => {
    await dispatch(getRate()).unwrap();
  };

  useEffect(() => {
    getRateDetails();
  }, []);
  const deleteRate = (index, id) => {
    setIsOpenDeletePopUp(true);
    setDeleteId(id);
  };
  const smallmodalClose = async (value) => {
    if (value) {
      try {
        await dispatch(removeRate(deleteId)).unwrap();
        await dispatch(getRate()).unwrap();
        setIsOpenDeletePopUp(false);
        setDeleteId("");
        Success("Rate has been deleted");
      } catch (err: any) {
        setIsOpenDeletePopUp(false);
        DangerLeft("Something went Wrong");
      }
    } else {
      setIsOpenDeletePopUp(false);
    }
  };
  const getRoomTypeByID = (id) => {
    if (roomTypes) {
      let i = roomTypes.findIndex((x) => x._id === id);
      if (i > -1) {
        return roomTypes[i].name;
      }
    }
  };
  return (
    <React.Fragment>
      <Row className="mt-4">
        <Card id="Tooltip">
          <span className="ribbone-success-left ">
            <span>
              <i className="fe fe-zap"></i>
            </span>
          </span>
          <Card.Header className="d-flex justify-content-between">
            <Card.Title className="mt-4">Rate List</Card.Title>
            <div className="d-flex justify-content-end">
              <Button
                className="m-2"
                onClick={() => {
                  RouteChange();
                }}
              >
                Add Rate
              </Button>
            </div>
          </Card.Header>
        </Card>
      </Row>
      <Row className="mt-2. rateList">
        {rateList &&
          rateList.map((item, index) => {
            return (
              <Col xs={4} key={index}>
                <Card>
                  <div className="arrow-ribbone-left bg-warning">Rate</div>
                  <Card.Header
                    style={{ padding: "2.2rem 1.5rem" }}
                    className="d-flex justify-content-between mt-3"
                  >
                    <Card.Title className="title-name">{item.name}</Card.Title>
                    <div className="rateAction-icons">
                      <span className="mx-3">
                        <i
                          className="fe fe-edit i-e"
                          onClick={() => {
                            navigate(`/setup/ratesetup/editrate/${item._id}`);
                          }}
                        ></i>
                      </span>
                      <span onClick={() => deleteRate(index, item._id)}>
                        <i className="fe fe-trash-2 i-d"></i>
                      </span>
                    </div>
                  </Card.Header>
                  <Card.Body style={{ padding: 0 }}>
                    <Accordion className="red">
                      {item?.derivedRates.length !== 0 && (
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Derived Rate List</Accordion.Header>
                          <Accordion.Body>
                            {item?.derivedRates
                              ? item?.derivedRates.map((derived, ind) => {
                                  return (
                                    <div
                                      key={ind}
                                      className="d-flex justify-content-between"
                                    >
                                      <span>{derived?.name}</span>
                                      <span className="fw-bolder">
                                        {derived?.offer?.amount}
                                        {derived?.offer?.calculationType ===
                                        "Percentage"
                                          ? "%"
                                          : "$"}
                                      </span>

                                      <span>
                                        <i
                                          className="fe fe-edit"
                                          onClick={() => {
                                            navigate(
                                              `/setup/ratesetup/editrate/${item._id}/true/${ind}`
                                            );
                                          }}
                                        ></i>
                                      </span>
                                    </div>
                                  );
                                })
                              : null}
                          </Accordion.Body>
                        </Accordion.Item>
                      )}
                      {item.roomTypes.length !== 0 && (
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Room Types List</Accordion.Header>
                          <Accordion.Body>
                            {item?.roomTypes
                              ? item.roomTypes.map((roomType, rindex) => {
                                  return (
                                    <div className="d-flex justify-content-between">
                                      <span>
                                        {getRoomTypeByID(roomType.roomTypeId)}
                                      </span>
                                      <span className="fw-bolder">
                                        ${roomType.price}
                                      </span>
                                    </div>
                                  );
                                })
                              : null}
                          </Accordion.Body>
                        </Accordion.Item>
                      )}
                    </Accordion>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
      {isOpenDeletePopUp && (
        <ConformationPopup smallmodalClose={smallmodalClose} />
      )}
    </React.Fragment>
  );
};
export default RateList;
