import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import type { ITimezone } from "react-timezone-select";

const SystemConfig = () => {
     const [tz, setTz] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
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
    </React.Fragment>
  );
};
export default SystemConfig;
