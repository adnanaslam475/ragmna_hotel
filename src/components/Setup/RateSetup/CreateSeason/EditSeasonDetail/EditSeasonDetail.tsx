import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import "./EditSeasonDetail.scss";
import Select from "react-select";
import { CommanDropDownType } from "../../../PropertySetup/AddProperty/types";
import Rates from "./Rates/Rates";
import RulesRestrictions from "./RulesRestrictions/RulesRestrictions";
import Policies from "./Policies/Policies";

export interface EditSeasonDetailProps {
  isModelClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditSeasonDetail = (props: EditSeasonDetailProps) => {
  const colorTypes: CommanDropDownType[] = [
    { value: "#f0642a", label: "#f6881c" },
    { value: "#f6881c", label: "#f6881c" },
    { value: "#cc5a71", label: "#cc5a71" },
    { value: "#d42649", label: "#d42649" },
  ];

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
        className='season-modal'
      >
        <ModalBody className="season-body-modal">
          <Row>
            <Tab.Container defaultActiveKey="first">
              <Col lg={3} className="sidebar-main">
                <div className="main-header">
                  <h1>Season</h1>
                </div>
                <div>
                  {/* <Select
                    classNamePrefix="Select"
                    options={colorTypes}
                    // value={colorTypes.filter(
                    //   (option) => option.value === values.selectedColor
                    // )}
                    placeholder="Select color"
                    name="selectedColor"
                    // onChange={(selectedOption: any) => {
                    //   handleChange("selectedColor")(selectedOption?.value);
                    // }}
                  /> */}
                </div>
                <div className="edit-tab-container">
                  <Nav>
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
              <Col lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Rates />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <RulesRestrictions />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Policies />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Row>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default EditSeasonDetail;
