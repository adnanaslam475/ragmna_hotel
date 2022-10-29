import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./PropertySetup.scss";
import { useNavigate } from "react-router-dom";
import ConformationPopup from "../../../Modals/ConformationPopup/ConformationPopup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/Store";
import {
  deleteProperties,
  getProperties,
  usePropertyList,
} from "./propertySetupSlice";

const PropertySetup = () => {
  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/setup/propertysetup/add-property`;
    navigate(path);
  };
  const { propertyList } = usePropertyList();
  const [isOpenDeletePopUp, SetIsOpenDeletePopUP] = useState<boolean>(false);

  const [deleteId, setDeleteId] = useState<string>("");
  const getAllProperties = async () => {
    try {
      await dispatch(getProperties()).unwrap();
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProperties();
  }, []);

  const smallmodalClose = async (value) => {
    if (value) {
      try {
        await dispatch(deleteProperties(deleteId)).unwrap;
        dispatch(getProperties()).unwrap();
        setDeleteId("");
      } catch (err: any) {}
    }
    SetIsOpenDeletePopUP(false);
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
            <Card.Title className="mt-4">Property List</Card.Title>
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => {
                  RouteChange();
                }}
              >
                Add Property
              </Button>
            </div>
          </Card.Header>
        </Card>
      </Row>

      <Row className="mt-2.">
        {propertyList &&
          propertyList.map((item, index) => {
            return (
              <Col xs={4} key={index}>
                <Card>
                  <div className="arrow-ribbone-left bg-warning">Property</div>

                  <Card.Header
                    style={{ padding: "2.2rem 1.5rem" }}
                    className="d-flex justify-content-between mt-3"
                  >
                    <Card.Title>{item.name}</Card.Title>
                    <div className="action-icons">
                      <span className="mx-3">
                        <i
                          className="fe fe-edit i-e"
                          onClick={() => {
                            navigate(
                              `/setup/propertysetup/add-property/${item._id}`
                            );
                          }}
                        ></i>
                      </span>
                      <span>
                        <i
                          className="fe fe-trash-2 i-d"
                          onClick={() => {
                            SetIsOpenDeletePopUP(true);
                            setDeleteId(item._id);
                          }}
                        ></i>
                      </span>
                    </div>
                  </Card.Header>
                  <Card.Body style={{ padding: 10 }}>
                    <div className="d-flex justify-content-between">
                      <i className="icon fe fe-map-pin" />
                      <span>
                        {item.location ? item.location.city : ""},
                        {item.location ? item.location.state : ""},
                        {item.location ? item.location.country : ""}
                      </span>
                    </div>
                    {/* {item.checkInCheckOutConfig.checkInTime ||
                    item.checkInCheckOutConfig.checkOutTimes ? (
                      <Row className="d-flex justify-content-between">
                        <Col lg={6} md={12}>
                          <i
                            className="icon fe fe-clock"
                            style={{ marginRight: "5px" }}
                          />
                          <span>
                            Check-In :
                            {item.checkInCheckOutConfig
                              ? item.checkInCheckOutConfig.checkInTime
                              : ""}
                          </span>
                        </Col>
                        <Col lg={6} md={12}>
                          <i
                            className="icon fe fe-clock"
                            style={{ marginRight: "5px" }}
                          />
                          <span>
                            Check-Out :
                            {item.checkInCheckOutConfig
                              ? item.checkInCheckOutConfig.checkOutTime
                              : ""}
                          </span>
                        </Col>
                      </Row>
                    ) : null} */}
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

export default PropertySetup;
