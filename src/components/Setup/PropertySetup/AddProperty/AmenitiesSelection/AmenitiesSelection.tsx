import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useGetAmenitiesQuery } from "../Amenities/amenitiesApi";

const AmenitiesSelection = () => {
  const { data, isError, isSuccess, isLoading } = useGetAmenitiesQuery();

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
                  name="example-checkbox5"
                  defaultValue="option5"
                  defaultChecked
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
