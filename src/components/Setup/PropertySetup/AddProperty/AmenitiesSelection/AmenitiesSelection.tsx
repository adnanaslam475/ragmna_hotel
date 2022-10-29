import React from "react";
import { Col, Row } from "react-bootstrap";
import { useGetAmenitiesQuery } from "../Amenities/amenitiesApi";

export interface AmenitiesSectionProps {
  onSelectedAmenitiesChange?: any;
  isSelectedAmenities?: string[];
}

const AmenitiesSelection = (props: AmenitiesSectionProps) => {
  const { onSelectedAmenitiesChange, isSelectedAmenities } = props;
  const { data } = useGetAmenitiesQuery();
  
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
                    onSelectedAmenitiesChange(e, index);
                  }}
                  checked={isSelectedAmenities?.includes(item._id)}
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
