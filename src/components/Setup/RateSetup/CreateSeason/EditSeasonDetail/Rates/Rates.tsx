import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../Redux/Store";
import {
  getRoomType,
  useRoomTypes,
} from "../../../RateSetupSlice";
import "./Rates.scss";
const Rates = ({ seasonBody, setbasePrice, setChannelPrice ,onRateCheckBoxChange}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { roomTypes } = useRoomTypes();
  const getRoomTypes = async () => {
     await dispatch(getRoomType()).unwrap();
  };
  useEffect(() => {
    getRoomTypes();
  }, []);
  const getRoomTypeByID = (id) => {
    if (roomTypes) {
      let i = roomTypes.findIndex((x) => x._id === id);
      if (i > -1) {
        return roomTypes[i].name;
      }
    }
  };

  // useEffect(()=>{
  //   let array:any = []
  //   for (let index = 0; index < seasonBody.roomTypes.length; index++) {
  //     console.log(seasonBody?.roomTypes[index]?.price,'seasonBody?.roomTypes?.price');
  //     if(seasonBody?.roomTypes[index]?.price > 0){

  //       // setRateCheck([...rateCheck,seasonBody.roomTypes[index].roomTypeId])
  //       array.push(seasonBody.roomTypes[index].roomTypeId)
  //     }
  //   }
  //   setRateCheck(array)
  //   console.log(array,'array');

  //   // console.log(array,'array');

  //   // if(seasonBody?.roomTypes){
  //   //   let array = seasonBody.roomTypes.map((val,i)=>{
  //   //     if(val?.price > 0){
  //   //       return val.roomTypeId
  //   //     }
  //   //   })
  //   //   setRateCheck([...array])
  //   // }

  // },[seasonBody])

  const getCheckValue = (item, index) => {
    if (item.price > 0 || item.price === null || item?.channelPrices?.find((val) => val.price > 0 || val.price === null)) {
      return true
    } else {
      return false
    }
  }

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
                        // checked={item.price > 0 || item.price === null || item.channelPrices.findIndex((val,i)=> val.price > 0 || val.price === null) ? true : false}
                        checked={getCheckValue(item, index)}

                        onChange={(e: any) => {
                          onRateCheckBoxChange(e, index)

                        }}
                      />
                      <span className="custom-control-label">
                        {getRoomTypeByID(item.roomTypeId)}
                      </span>
                    </label>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <div className="standard-rate-night">
                      <div className="control-group form-group">
                        <input
                          type="number"
                          className="form-control required"
                          name={`baseprice${index}`}
                          placeholder="$"
                          value={item.price}
                          onChange={(e) => setbasePrice(index, e.target.value)}
                        />
                      </div>
                    </div>
                  </Col>
                  {seasonBody &&
                    seasonBody.channels.map((val, ind) => {
                      return (
                        <Col key={ind} lg={3} md={6} sm={12}>
                          <div className="standard-rate-night">
                            <div className="control-group form-group">
                              <input
                                type="number"
                                className="form-control required"
                                name={`channel${ind}`}
                                placeholder="$"
                                value={item.channelPrices[ind]?.price}
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
