import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useGetAmenitiesQuery } from "../Amenities/amenitiesApi";

const AmenitiesSelection = () => {
  const { data, isError, isSuccess, isLoading } = useGetAmenitiesQuery();

  const [isCheckedData, setIsCheckedData] = useState<any>([]);

  const onHandelChnage = (e, index) => {
    let val = e.target.value;
    if (e.target.checked) {
      setIsCheckedData([...isCheckedData, val]);
    } else {
      let i = isCheckedData.indexOf(val);
      isCheckedData.splice(i, 1);
      setIsCheckedData(isCheckedData);
    }
  };

  return (
    <React.Fragment>
      <Row className="Amenities-form p-4 mb-4">
        <h4>Select Amenities</h4>
        {data?.data.map((item, index) => {
          return (
            <Col key={index} lg={4} md={12}>
              <label className="custom-control custom-checkbox-md">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name={item.name}
                  value={item.name}
                  onChange={(e) => {
                    onHandelChnage(e, index);
                  }}
                />
                <span className="custom-control-label">{item.name}</span>
              </label>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};
export default AmenitiesSelection;
