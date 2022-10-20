import React, { useEffect, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { array } from "yup/lib/locale";
import { AppDispatch } from "../../../../../Redux/Store";
import { getRoomType, useRoomTypes } from "../../RateList/RateSetupSlice";

import "./DefaultRatePlan.scss";

const DefaultRatePlan = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { roomTypes } = useRoomTypes();
  const getRoomTypes = async () => {
    const response = await dispatch(
      getRoomType("634f7d62e2be24a2b6f3503e")
    ).unwrap();
  };
  useEffect(() => {
    getRoomTypes();
  }, []);
  const [roomType, setRoomType] = useState([]);
  const setRoomTypes = (e, index) => {
    if (e.target.checked) {
      let temp: any = Object.assign([], roomType);
      temp.push({ roomTypeId: roomTypes[index]._id, price: 0 });
      setRoomType(temp);
    } else {
      let temp: any = Object.assign([], roomTypes);
      let i = temp.findIndex((x) => x.roomTypeId === roomTypes[index]._id);
      if (i > -1) {
        temp.splice(i, 1);
        setRoomType(temp);
      }
    }
  };
  const setSelectAll = (e) => {
    if (e.target.checked) {
      let temp: any = Object.assign([], roomType);
      roomTypes.map((item) => {
        {
          temp.push({ roomTypeId: item._id, price: 0 });
        }
      });
      setRoomType(temp);
    } else {
      let temp: any = Object.assign([], roomType);
      temp = [];
      setRoomType(temp);
    }
  };
  const onSubmit = () => {
    props.nextStep();
    props.setRoomTypes(roomType);
  };
  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part px-6 py-4">
          <div>
            <h1>Which room type are available in this rate plan by default?</h1>
          </div>
        </Col>
        <Col lg={6} md={12} className="form-part px-6 py-4">
          <div>
            <div className="d-flex">
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox5"
                  onChange={(e) => setSelectAll(e)}
                />
                <span className="custom-control-label">Select All</span>
              </label>
            </div>
            {roomTypes &&
              roomTypes.map((item, index) => {
                return (
                  <div key={index} className="d-flex">
                    <label className="custom-control custom-checkbox-md">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name={`checkbox${index}`}
                        checked={
                          roomType.findIndex(
                            (x) => x["roomTypeId"] == item._id
                          ) > -1
                        }
                        onChange={(e) => setRoomTypes(e, index)}
                      />
                      <span className="custom-control-label">{item.name}</span>
                    </label>
                  </div>
                );
              })}
          </div>
          <div className="Previous-button">
            <Button onClick={props.previousStep}>Previous</Button>
          </div>
          <div className="next-button">
            <Button onClick={() => onSubmit()}>Next</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DefaultRatePlan;
