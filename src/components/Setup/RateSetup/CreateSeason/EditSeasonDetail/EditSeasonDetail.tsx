import React, { useState } from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Nav,
  Row,
} from "react-bootstrap";
import './EditSeasonDetail.scss'

export interface EditSeasonDetailProps {
  isModelClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditSeasonDetail = (props: EditSeasonDetailProps) => {
  const { isModelClose } = props;

  const [show, setShow] = useState(true);

  return (
    <React.Fragment>
      <Modal
        size="xl"
        show={show}
        onHide={() => {
          isModelClose(false);
        }}
      >
        <ModalBody className="body-modal">
          <Row>
            <Col lg={4} className='sidebar-main'>
              <div>
                <h1>Season</h1>
              </div>
              <div className="tab-name-container">
                <Nav
                  variant="pills"
                  className="panel-tabs nav-tabs panel-secondary sidebar-nav"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Rates</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Rules/Restrictions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Policies</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="side-button">
                <Button
                  variant="primary"
                  onClick={() => {
                    isModelClose(false);
                  }}
                >
                  Save Changes
                </Button>
              </div>
            </Col>
            <Col lg={8}>

            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default EditSeasonDetail;
