import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { CarouselwithTopRightIndicator } from "../../../Data/bootstrap/DataCarousels";
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
      const response: any = await dispatch(getProperties()).unwrap();
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
      <Card className="mt-6">
        <Card.Body>
          <div>
            <Row className="my-3">
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => {
                    RouteChange();
                  }}
                >
                  Add Property
                </Button>
              </div>
            </Row>
            <Row>
              {propertyList &&
                propertyList.map((item, index) => {
                  return (
                    <Col key={index} lg={6} xl={4}>
                      <Card>
                        <Card.Header className="d-flex justify-content-between">
                          <Card.Title as="h3">{item.name}</Card.Title>
                          <div className="action-icons">
                            <span className="mx-3">
                              <i
                                className="fe fe-edit"
                                onClick={() => {
                                  navigate(
                                    `/setup/propertysetup/add-property/${item._id}`
                                  );
                                }}
                              ></i>
                            </span>
                            <span>
                              <i
                                className="fe fe-trash-2"
                                onClick={() => {
                                  SetIsOpenDeletePopUP(true);
                                  setDeleteId(item._id);
                                }}
                              ></i>
                            </span>
                          </div>
                        </Card.Header>
                        <Card.Body className="h-100">
                          <div
                            id="carousel-indicators2"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <CarouselwithTopRightIndicator />
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </Card.Body>
      </Card>
      {isOpenDeletePopUp && (
        <ConformationPopup smallmodalClose={smallmodalClose} />
      )}
    </React.Fragment>
  );
};

export default PropertySetup;
