import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../Redux/Store";
import { usePropertyList } from "../../PropertySetup/propertySetupSlice";
import "./RateList.scss";
import { getRate, removeRate, useRateList } from "../RateSetupSlice";
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
  const { rateList } = useRateList();
  const dispatch = useDispatch<AppDispatch>();
  const getRateDetails = async () => {
    let response: any = await dispatch(getRate()).unwrap();
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
        let response: any = await dispatch(getRate()).unwrap();
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
  return (
    <React.Fragment>
      <Row>
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
      </Row>
      <Row className="d-flex">
        {rateList &&
          rateList.map((item, index) => {
            return (
              <Col key={index} lg={4} md={6} sm={12} className="main-box">
                <Card className="rate-card">
                  <Card.Header className="d-flex justify-content-between">
                    <Card.Title as="h3">{item.name}</Card.Title>
                    <div className="action-icons">
                      <span className="mx-3">
                        <i
                          className="fe fe-edit"
                          onClick={() => {
                            navigate(`/setup/ratesetup/editrate/${item._id}`);
                          }}
                        ></i>
                      </span>
                      <span onClick={() => deleteRate(index, item._id)}>
                        <i className="fe fe-trash-2"></i>
                      </span>
                    </div>
                  </Card.Header>
                  <Card.Body className="h-100">
                    <div className="inner-box">
                      <div className="inner-box-size">
                        <span>5%</span>
                      </div>
                      <div className="inner-box-size">
                        <span>D</span>
                        <span>10%</span>
                      </div>
                    </div>
                    <div className="inner-box-row-2">
                      <div className="inner-box-size-2">
                        <span>Reg</span>
                        <span>$90</span>
                      </div>
                      <div className="inner-box-size-2">
                        <span>WKD</span>
                        <span>$120</span>
                      </div>
                      <div className="inner-box-size-2">
                        <span>Xmas</span>
                        <span>$210</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                {/* <div className="icons">
                  <i
                    className="icon i-e fe fe-edit"
                    onClick={() => {
                      navigate(`/setup/ratesetup/editrate/`);
                    }}
                  />
                  <i className="icon i-t fe fe-trash-2" />
                </div> */}
                {/* <div className="inner-box">
                  <div className="inner-box-size">
                    <span>5%</span>
                  </div>
                  <div className="inner-box-size">
                    <span>D</span>
                    <span>10%</span>
                  </div>
                </div> */}
                {/* <div className="inner-header py-2">
                  <h5>
                    {item.name} - <span> $100</span>
                  </h5>
                </div> */}
                {/* <div className="inner-box-row-2">
                  <div className="inner-box-size-2">
                    <span>Reg</span>
                    <span>$90</span>
                  </div>
                  <div className="inner-box-size-2">
                    <span>WKD</span>
                    <span>$120</span>
                  </div>
                  <div className="inner-box-size-2">
                    <span>Xmas</span>
                    <span>$210</span>
                  </div>
                </div> */}
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
