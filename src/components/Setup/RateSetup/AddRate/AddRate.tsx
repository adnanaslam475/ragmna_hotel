import React from "react";
import { Card } from "react-bootstrap";
import StepWizard from "react-step-wizard";
import RateType from "./RateType/RateType";
import './AddRate.scss'

const AddRate = () => {
  return (
    <React.Fragment>
      <Card>
        <Card.Body className="wizard-setup">
          <StepWizard>
            <RateType />
          </StepWizard>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default AddRate;
