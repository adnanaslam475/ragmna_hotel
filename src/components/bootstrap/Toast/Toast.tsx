import React, { FC, useState } from 'react';
import { Card, Row, Col, Form, Collapse } from 'react-bootstrap';
import { Basictoast, ColourAtoast, ColourBtoast, ColourCtoast, ColourDtoast, CustomContenttoast, Customtoast, Placementtoast, StackingAtoast, StackingBtoast, Translucenttoast } from '../../../Data/bootstrap/Toastdata';
import styles from './Toast.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';

interface ToastProps { }

const Toast: FC<ToastProps> = () => {

  const [Basic, setBasic] = useState(false);
  const [Translucent, setTranslucent] = useState(false);
  const [Custom, setCustom] = useState(false);
  const [Color, setColor] = useState(false);
  const [Stacking, setStacking] = useState(false);
  const [Placement, setPlacement] = useState(false);

  return (
    <div className={styles.Toast}>
      <PageHeader titles="Toasts" active="Toasts" items={['Componets']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Basic Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBasic(!Basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4">
                <Row>

                  <Basictoast />

                </Row>
              </div>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
export function Basictoast() {
  const [showA, setShowA] = useState(true);

  const toggleShow = () => setShowA(!showA);
  
  return (
      <div>
          <Toast show={showA} onClose={toggleShow}>
              <Toast.Header>
              <img src={require("../../assets/images/brand/logo-2.png")} alt="" className="me-2" height="18"/>
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
          <Col md={12} className="mt-2 mt-md-0">
                <Button  variant="primary" className="mt-5" onClick={toggleShow}>Show live toast</Button>
              </Col>
      </div>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Translucent Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTranslucent(!Translucent)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border">

                <Translucenttoast />
              </div>
              <Collapse in={Translucent} className="mt-2">
                <pre>
                  <code>
                    {`
  export function Translucenttoast() {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <div>
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                <img src={require("../../assets/images/brand/logo-2.png")} alt="" className="me-2" height="18"/>
  <strong className="me-auto">Bootstrap</strong>
  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        </div>
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
      {/* <!-- ROW-1 CLOSED --> */}

      {/* <!-- ROW-2 OPEN  --> */}
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Custom content Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setCustom(!Custom)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12} xl={6} className="mt-1">

                  <CustomContenttoast />
                </Col>
                <Col md={12} xl={6} className="mt-1">

                  <Customtoast />
                </Col>
              </Row>
              <Collapse in={Custom} className="mt-2">
                <pre>
                  <code>
                    {`

export function CustomContenttoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>

          </Toast>
      </div>
  );
}

export function Customtoast() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <ToastHeader className='justify-content-between'>
                  Hello, world! This is a toast message.
              </ToastHeader>
              <Toast.Body className="mt-2 pt-2">
                  <Button size="sm" variant="primary me-1">Take Action</Button>
                  <Button size="sm" variant="secondary" onClick={() => setShowA(false)}>
                      Close
                  </Button>
              </Toast.Body>
          </Toast>
      </div>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Color Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setColor(!Color)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className="toast align-items-center text-white bg-primary border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div>

                      <ColourAtoast />
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mt-2 mt-md-0">
                  <div className="toast align-items-center text-white bg-secondary border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div>

                      <ColourBtoast />
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mt-2">
                  <div className="toast align-items-center text-white bg-success border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div>

                      <ColourCtoast />
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mt-2">
                  <div className="toast align-items-center text-white bg-danger border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div>

                      <ColourDtoast />
                    </div>
                  </div>
                </Col>
              </Row>
              <Collapse in={Color} className="mt-2">
                <pre>
                  <code>
                    {`
export function ColourAtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header className="bg-primary text-white">
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>
          </Toast>
      </div>
  );
}

export function ColourBtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header className="bg-secondary text-white">
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>
          </Toast>
      </div>
  );
}
export function ColourCtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header className="bg-success text-white">
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>
          </Toast>
      </div>
  );
}
export function ColourDtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header className="bg-danger text-white">
                  <strong className="me-auto">Hello, world! This is a toast message.</strong>
              </Toast.Header>
          </Toast>
      </div>
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
      {/* <!-- ROW-2 CLOSED --> */}

      {/* <!-- ROW-3 OPEN --> */}
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Stacking Toasts</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setStacking(!Stacking)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border">
                <div className="toast-container">

                  <StackingAtoast />

                  <StackingBtoast />
                </div>
              </div>
              <Collapse in={Stacking} className="mt-2">
                <pre>
                  <code>
                    {`
export function StackingAtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA} >
              <Toast.Header>
              <img src={require("../../assets/images/brand/logo-2.png")} alt="" className="me-2" height="18"/>
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">just now</small>
              </Toast.Header>
              <Toast.Body>See? Just like this.</Toast.Body>
          </Toast>
      </div>
  );
}
export function StackingBtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
              <img src={require("../../assets/images/brand/logo-2.png")} alt="" className="me-2" height="18"/>
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">2 seconds ago</small>
              </Toast.Header>
              <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
          </Toast>
      </div>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title className='w-100 w-sm-auto'>Placement Toast</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setPlacement(!Placement)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border">
                <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100 h-180">

                  <Placementtoast />
                </div>
              </div>
              <Collapse in={Placement} className="mt-2">
                <pre>
                  <code>
                    {`
export function Placementtoast() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
      <div>
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
              <img src={require("../../assets/images/brand/logo-2.png")} alt="" className="me-2" height="18"/>
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
      </div>
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
      {/* <!-- ROW-3 CLOSED --> */}
    </div>
  )
};

export default Toast;
