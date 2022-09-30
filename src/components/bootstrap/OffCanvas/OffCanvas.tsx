import React, { FC, useState } from 'react';
import { Card, Row, Col, Collapse, Form } from 'react-bootstrap';
import { Backdrop, Databutton, Defaultlink, Placementbutton } from '../../../Data/bootstrap/Dataoffcanvas';
import styles from './OffCanvas.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

interface OffCanvasProps { }

const OffCanvas: FC<OffCanvasProps> = () => {

  const [Basic, setBasic] = useState(false);
  const [BackDrop, setBackDrop] = useState(false);
  const [placement, setplacement] = useState(false);

  return (
  <div className={styles.OffCanvas}>
    <PageHeader titles="Offcanvas" active="Offcanvas" items={['Apps']} />

    {/* <!-- Row --> */}
    <Row>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Default Offcanvas</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBasic(!Basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="btn-list">
              <Defaultlink />
              <Databutton />
            </div>
            <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
 export function Defaultlink() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Link with href
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
        </Offcanvas.Header>

        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Dropdown className="mt-5">
            <Dropdown.Toggle>
              Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventkey="1">Action</Dropdown.Item>
              <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
              <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export function Databutton() {
  const [show, setShow] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow1}>
        Button with data-bs-target
      </Button>

      <Offcanvas show={show} onHide={handleClose1}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto'></i></span>
        </Offcanvas.Header>

        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Dropdown className="mt-5">
            <Dropdown.Toggle>
              Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventkey="1">Action</Dropdown.Item>
              <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
              <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>BackDrop Offcanvas</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBackDrop(!BackDrop)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="btn-list">
              <Backdrop />
            </div>
            <Collapse in={BackDrop} className="mt-2">
                <pre>
                  <code>
                    {`
export function Backdrop() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Placement Offcanvas</Card.Title>
            <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setplacement(!placement)} className="showcode d-flex ms-auto mx-2" />
              </Form>
          </Card.Header>
          <Card.Body>
            <div className="btn-list">
              <Placementbutton />
            </div>
            <Collapse in={placement} className="mt-2">
                <pre>
                  <code>
                    {`
export function Placementbutton() {
  return (
    <>
      {['top', 'end', 'bottom'].map((placement, idx) => (
        <OffCanvasplacement key={idx} placement={placement} name={Toggle {placement} Offcanvas } />
      ))}
    </>
  );
}

`}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
)};

export default OffCanvas;
