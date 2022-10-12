import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { CarouselwithTopRightIndicator } from "../../../Data/bootstrap/DataCarousels";
import "./PropertySetup.scss";
import { useNavigate } from "react-router-dom";
import {
  useDeletePropertySetupMutation,
  useGetPropertySetupQuery,
} from "./propertySetupApi";
import ConformationPopup from "../../../Modals/ConformationPopup/ConformationPopup";

const PropertySetup = () => {
  const { data, isError, isLoading } = useGetPropertySetupQuery();
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/setup/propertysetup/add-property`;
    navigate(path);
  };

  const [isOpenDeletePopUp, SetIsOpenDeletePopUP] = useState(false);

  const [deleteId, setDeleteId] = useState("");

  const [deletePropertySetup, Result] = useDeletePropertySetupMutation();
  const smallmodalClose = async (value) => {
    if (value) {
      try {
        await deletePropertySetup(deleteId);
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
              {data?.data.map((item, index) => {
                return (
                  <Col key={index} lg={6} xl={4}>
                    <Card>
                      <Card.Header className="d-flex justify-content-between">
                        <Card.Title as="h3">{item.name}</Card.Title>
                        <div className="action-icons">
                          <span className="mx-3">
                            <i className="fe fe-edit"
                              onClick={()=>{
                                navigate(`/setup/propertysetup/add-property/${item._id}`)
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
