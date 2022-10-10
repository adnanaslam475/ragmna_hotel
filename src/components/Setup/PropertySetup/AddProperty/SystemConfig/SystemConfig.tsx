import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import type { ITimezone } from "react-timezone-select";

const SystemConfig = () => {
  const [tz, setTz] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const Onsubmit = () => {
    console.log(tz);
  }
  return (
    <React.Fragment>
      <Row>
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
      <Row>
        <div className="d-flex justify-content-end">
          <Button onClick={Onsubmit}>Save & Next</Button>
        </div>
      </Row>
    </React.Fragment>
  );
};
export default SystemConfig;
