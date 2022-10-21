import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import TimezoneSelect, {
  allTimezones,
  ITimezoneOption,
} from "react-timezone-select";
import { PropertySetuptypes } from "../types";
import { useParams } from "react-router-dom";
import "./SystemConfig.scss";
import { DangerLeft, Success } from "../../../../../Redux/Services/toaster-service";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import {
  getSettingByTypeId,
  saveSettingByTypeId,
} from "../Reservation/reservationSlice";

export interface SystemConfigProps {
  tz: any;
  setTz: any;
}
const SystemConfig = (props:SystemConfigProps) => {
  const {
    tz,
    setTz,
  } = props;

  // const dispatch = useDispatch<AppDispatch>();
  
  // let { id } = useParams();

  // const getConfig = async () => {
  //   try {
  //     let payload = {
  //       id,
  //       typeId: 2,
  //     };
  //     const response: any = await dispatch(
  //       getSettingByTypeId(payload)
  //     ).unwrap();
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (id) {
  //     getConfig();
  //   }
  // }, [id]);

  // const [tz, setTz] = useState<ITimezoneOption>({
  //   value: "",
  //   label: "",
  //   abbrev: "",
  //   altName: "",
  //   offset: 0,
  // });

  // const onSubmit = async () => {
  //   try {
  //     let payload = Object.assign({});
  //     payload["propertyId"] = id;
  //     payload["type"] = PropertySetuptypes.System;
  //     payload["configurations"] = {
  //       timeZone: tz ? tz.label : "",
  //     };
  //     let responce = await dispatch(saveSettingByTypeId(payload)).unwrap();
  //     Success(" Timezone has been saved");
  //     // await reservationDetails(payload);
  //   } catch (err: any) {
  //     DangerLeft("Something went wrong")
  //   }
  // };
  
  return (
    <React.Fragment>
      <Row className="system-details p-4 mb-4">
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
      {/* <div className="d-flex justify-content-end mt-4 me-3">
        <Button disabled={!id} onClick={onSubmit}>
          Save & Next
        </Button>
      </div> */}
    </React.Fragment>
  );
};
export default SystemConfig;
