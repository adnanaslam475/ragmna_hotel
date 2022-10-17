import React, { useState } from "react";
import { Card } from "react-bootstrap";
import StepWizard from "react-step-wizard";
import RateType from "./RateType/RateType";
import "./AddRate.scss";
import RateChannelDistribut from "./RateChannelDistribut/RateChannelDistribut";
import RatePlan from "./RatePlan/RatePlan";
import DefaultRatePlan from "./DefaultRatePlan/DefaultRatePlan";
import QualifyRatePlan from "./QualifyRatePlan/QualifyRatePlan";
import PoliciesRatePlan from "./PoliciesRatePlan/PoliciesRatePlan";

const AddRate = () => {
  return (
    <React.Fragment>
      <Card>
        <Card.Body className="wizard-setup">
          <StepWizard>
            <RateType />
            <RatePlan />
            <RateChannelDistribut />
            <DefaultRatePlan />
            <QualifyRatePlan />
            <PoliciesRatePlan />
          </StepWizard>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default AddRate;
