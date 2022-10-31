import { Row, Col, Card, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { CarouselwithTopRightIndicator } from "../../../Data/bootstrap/DataCarousels";
import ConformationPopup from "../../../Modals/ConformationPopup/ConformationPopup";
import { useNavigate } from "react-router-dom";
import { getRoomType, deleteProperties } from "./propertySpaceSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/Store";
// import { deleteProperties, getProperties } from '../PropertySetup/propertySetupSlice'
const PropertySpace = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpenDeletePopUp, SetIsOpenDeletePopUP] = useState(false);

  const [deleteId, setDeleteId] = useState("");
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/setup/propertyspace/add-roomtype`;
    navigate(path);
  };
  const [roomtype, setRoomType] = useState<any[]>([]);
  const getAllProperties = async () => {
    try {
      const response: any = await dispatch(getRoomType()).unwrap();
      console.log(response);

      setRoomType(response.data);
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
        dispatch(getRoomType()).unwrap();
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
            <Card.Title className="mt-4">Property Space</Card.Title>
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => {
                  RouteChange();
                }}
              >
                Add Room Type
              </Button>
            </div>
          </Card.Header>
        </Card>
      </Row>
      <Row>
        {roomtype &&
          roomtype.map((item, index) => {
            return (
              <Col key={index} lg={6} xl={4}>
                <Card>
                  <div className="arrow-ribbone-left bg-warning">Room Type</div>

                  <Card.Header
                    style={{ padding: "2.2rem 1.5rem" }}
                    className="d-flex justify-content-between"
                  >
                    <Card.Title as="h3">{item.name}</Card.Title>
                    <div className="action-icons">
                      <span className="mx-3">
                        <i
                          className="fe fe-edit"
                          onClick={() => {
                            navigate(
                              `/setup/propertyspace/add-roomtype/${item._id}`
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

export default PropertySpace;
