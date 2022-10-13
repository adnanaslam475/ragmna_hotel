import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import TimezoneSelect, { allTimezones, ITimezoneOption } from "react-timezone-select";
import { useReservationDetailsMutation } from "../Reservation/reservationApi";
import { PropertySetuptypes } from "../types";
import { useParams } from "react-router-dom";
import './SystemConfig.scss'

const SystemConfig = () => {
  let { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id])
  console.log(allTimezones, "allTimezones");

  const [tz, setTz] = useState<ITimezoneOption>({
    value: '',
    label: '',
    abbrev: '',
    altName: '',
    offset: 0
  });

  const [reservationDetails, Result] = useReservationDetailsMutation()

  const onSubmit = async () => {
    try {
      let payload = Object.assign({});
      payload['propertyId'] = id
      payload['type'] = PropertySetuptypes.System
      payload['configurations'] = {
        'timeZone': tz ? tz.label : '',
      }

      await reservationDetails(payload);
      console.log(payload, "payload");

    } catch (err: any) {
      console.log(err);
    }
  }
  return (
    <React.Fragment>
      <Row className='system-details p-4 mb-4'>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Timezone</label>
            <TimezoneSelect
              value={tz}
              onChange={setTz}
              timezones={{
                ...allTimezones,
              }}
            />
          </div>
        </Col>
      </Row>
      <div className='d-flex justify-content-end mt-4 me-3'>
        <Button onClick={onSubmit}>Save & Next</Button>
      </div>
    </React.Fragment>
  );
};
export default SystemConfig;
