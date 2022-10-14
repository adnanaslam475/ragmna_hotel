import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RateSetup = () => {
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/setup/ratesetup/addrate`;
    navigate(path);
  };
  return (
    <React.Fragment>
      <Card className="mt-6">
        <Card.Body>
          <Row>
            <div className="d-flex justify-content-end">
              <Button
                className="m-2"
                onClick={() => {
                  RouteChange();
                }}
              >
                Add
              </Button>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default RateSetup;
