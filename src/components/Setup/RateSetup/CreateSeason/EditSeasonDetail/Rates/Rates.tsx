import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../Redux/Store";
import {
  getRoomType,
  useRateData,
  useRoomTypes,
} from "../../../RateSetupSlice";
import "./Rates.scss";
const Rates = ({ seasonBody, setbasePrice, setChannelPrice }) => {
  const [standardRoom, setStandardRoom] = useState(false);
  const [masterBedroom, setMasterBedroom] = useState(false);
  const [southernHospitality, setSouthernHospitality] = useState(false);
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
  const { rateData } = useRateData();
  const getRoomTypeByID = (id) => {
    if (roomTypes) {
      let i = roomTypes.findIndex((x) => x._id == id);
      if (i > -1) {
        return roomTypes[i].name;
      }
    }
  };
  console.log(seasonBody);

  return (
    <React.Fragment>
      <div className="rate">
        <div className="rate-head">
          <h3>Rates</h3>
        </div>
        <div className="rate-body">
          <Row>
            <Col lg={3} md={6} sm={12}></Col>
            <Col lg={3} md={6} sm={12}></Col>
            {seasonBody &&
              seasonBody.channels.map((item, index) => {
                return (
                  <Col key={index} lg={3} md={6} sm={12}>
                    {item}
                  </Col>
                );
              })}
          </Row>
          {seasonBody &&
            seasonBody.roomTypes.map((item, index) => {
              return (
                <Row key={index}>
                  <Col lg={3} md={6} sm={12}>
                    <label className="custom-control custom-checkbox-md">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name={item.roomTypeId}
                        defaultValue="option5"
                        onClick={() => setStandardRoom(!standardRoom)}
                      />
                      <span className="custom-control-label">
                        {getRoomTypeByID(item.roomTypeId)}
                      </span>
                    </label>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    {standardRoom ? (
                      <div className="standard-rate-night">
                        <div className="control-group form-group">
                          <input
                            type="number"
                            className="form-control required"
                            name={`baseprice${index}`}
                            placeholder="$"
                            value={item.price}
                            onChange={(e) =>
                              setbasePrice(index, e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ) : null}
                  </Col>
                  {seasonBody &&
                    seasonBody.channels.map((val, ind) => {
                      return (
                        <Col key={ind} lg={3} md={6} sm={12}>
                          {standardRoom ? (
                            <div className="standard-rate-night">
                              <div className="control-group form-group">
                                <input
                                  type="number"
                                  className="form-control required"
                                  name={`channel${ind}`}
                                  placeholder="$"
                                  value={item.channelPrices.price}
                                  onChange={(e) =>
                                    setChannelPrice(
                                      index,
                                      e.target.value,
                                      val,
                                      ind
                                    )
                                  }
                                />
                              </div>
                            </div>
                          ) : null}
                        </Col>
                      );
                    })}
                </Row>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rates;
