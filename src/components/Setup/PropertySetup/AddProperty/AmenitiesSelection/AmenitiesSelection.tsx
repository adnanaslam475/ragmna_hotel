import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useGetAmenitiesQuery } from "../Amenities/amenitiesApi";

export interface AmenitiesSectionProps {
  isSelectedAmenities: string[]
  setIsSelectedAmenities:any
}

const AmenitiesSelection = (props:AmenitiesSectionProps) => {
  const {
    isSelectedAmenities,
    setIsSelectedAmenities,
  } = props
  const { data, isError, isSuccess, isLoading } = useGetAmenitiesQuery();

  // const [isSelectedAmenities, setIsSelectedAmenities] = useState<any>([]);  

  const onHandelChnage = (e, index) => {
    let val = e.target.value;
    if (e.target.checked) {
      setIsSelectedAmenities([...isSelectedAmenities, val]);
    } else {
      let i = isSelectedAmenities.indexOf(val);
      isSelectedAmenities.splice(i, 1);
      setIsSelectedAmenities(isSelectedAmenities);
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
                  value={item._id}
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
