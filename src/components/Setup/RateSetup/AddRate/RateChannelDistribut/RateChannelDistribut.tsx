import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const RateChannelDistribut = (props) => {
  const [channel, SetChannel] = useState([
    {
      label: "My Website",
      value: "My_Website",
      isChecked: false,
    },
    {
      label: "Booking.com",
      value: "Booking.com",
      isChecked: false,
    },
    {
      label: "Airbnb",
      value: "Airbnb",
      isChecked: false,
    },
    {
      label: "Mosafir",
      value: "Mosafir",
      isChecked: false,
    },
  ]);
  const setChannelValues = (e, index) => {
    if (e.target.checked) {
      let temp: any = Object.assign([], channel);
      temp[index].isChecked = true;
      SetChannel(temp);
    } else {
      let temp: any = Object.assign([], channel);
      temp[index].isChecked = false;
      SetChannel(temp);
    }
  };
  const setSelectAll = (e) => {
    if (e.target.checked) {
      let temp: any = Object.assign([], channel);
      temp = temp.map((item) => {
        return { ...item, isChecked: true };
      });
      SetChannel(temp);
    } else {
      let temp: any = Object.assign([], channel);
      temp = temp.map((item) => {
        return { ...item, isChecked: false };
      });
      SetChannel(temp);
    }
  };
  const isAllChecked = () => {
    let isAll: boolean = false;
    let temp = channel.findIndex((x) => (x.isChecked = false));
    if (temp > -1) {
      isAll = true;
    } else {
      isAll = false;
    }
    console.log(isAll);

    return isAll;
  };
  return (
    <React.Fragment>
      <Row>
        <Col lg={6} md={0} className="question-part px-6 py-4">
          <div>
            <h1>On which channels will this rate plan be distributed?</h1>
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
            {channel.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <label className="custom-control custom-checkbox-md">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name={`example-checkbox5${index}`}
                      checked={item.isChecked}
                      onChange={(e) => setChannelValues(e, index)}
                    />
                    <span className="custom-control-label">{item.label}</span>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="Previous-button">
            <Button onClick={props.previousStep}>Previous</Button>
          </div>
          <div className="next-button">
            <Button onClick={props.nextStep}>Next</Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RateChannelDistribut;
