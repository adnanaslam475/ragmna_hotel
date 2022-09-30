import React, { FC, useState } from 'react';
import { Button, Card, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row, Form, Collapse } from 'react-bootstrap';
import { Fullscreen, ScrollModal, BasicModal, SuccessAlert, WarningAlert, ModalZoom, ModalFade, ModalFlip, ModalDoor, ModalRotate, ModalSlideUp, ModalslideDown, ModalslideLeft, ModalslideRight, SelectInsideModal, InputModal } from '../../../Data/bootstrap/modalData';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './Modal.module.scss';

interface ModalSProps { }
const ModalS: FC<ModalSProps> = () => {

  const [show, setShow] = useState(false);
  const smallmodalClose = () => setShow(false);
  const smallmodalShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const largemodalClose = () => setShow1(false);
  const largemodalShow = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const xtralargemodalClose = () => setShow2(false);
  const xtralargemodalShow = () => setShow2(true);



  // showCode

  const [Annimation, setAnnimation] = useState(false);
  const [Size, setSize] = useState(false);
  const [Select2, setSelect2] = useState(false);
  const [mdo, setMdo] = useState(false);
  const [basic, setbasic] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Warning, setWarning] = useState(false);


  return (
    <div className={styles.Modal}>
      <PageHeader titles="Modal" active="Modal" items={['Advanced Elements']} />

      {/* <!-- Row --> */}
      <Card id="modal5">
        <Card.Header className="border-bottom-0">
          <Card.Title>
            Modal Animation Effects
          </Card.Title>
          <Form className="ms-auto">
            <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setAnnimation(!Annimation)} className="showcode d-flex ms-auto mx-2" />
          </Form>
        </Card.Header>
        <Collapse in={Annimation} className="mt-2">
          <pre>
            <code>
              {`
 export function ModalZoom() {

 const [visible, setVisible] = useState(false);

 const show = () => {
      setVisible(true);
  };

  const hide = () => {
      setVisible(false);
  };

  return (
      <div>
          <Link to="#" className="modal-effect btn btn-primary-light d-grid mb-3" onClick={show}>Zoom</Link>
          <Rodal visible={visible} onClose={hide} animation='Zoom' height={280}>
              <div>Mesage Preview</div>
              <hr />
              <p> Why We Use Electoral College, Not Popular Vote It is a long
                  established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using
                  Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here', making it
                  look like readable English.</p>
              <hr />
              <Button className="me-2" variant="primary" onClick={hide}>Save Changes</Button>
              <Button variant="default" onClick={hide}>Close</Button>
          </Rodal>
      </div>
  );
}

`}
            </code>
          </pre>
        </Collapse>
        <Card.Body>
          <Row>
            <Col sm={6} md={6} xl={3}>
              <ModalZoom />
            </Col>
            <Col sm={6} md={6} xl={3}>
              <ModalFade />
            </Col>
            <Col sm={6} md={6} xl={3}>
              <ModalFlip />
            </Col>
            <Col sm={6} md={6} xl={3}>
              <ModalDoor />
            </Col>
            <Col sm={6} md={6} xl={3}>
              <ModalRotate />
            </Col>
            <Col sm={6} md={6} xl={3}>
              <ModalSlideUp />
            </Col>
            <Col sm={6} md={6} xl={3}>
              <ModalslideDown />
            </Col>
            <Col sm={6} md={6} xl={3}>
              <ModalslideLeft />
            </Col>
            <Col sm={6} md={6} xl={3}>
              <ModalslideRight />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col sm={12} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <Card.Title>Modal Sizes & Types</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSize(!Size)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="text-center">
              <p>Add <code className="highlighter-rouge">.modal-sm </code> or <code className="highlighter-rouge">.modal-lg </code> or <code className="highlighter-rouge">.modal-xl </code> to modal-dialog to increase and decrease the modal box
                sizes.
              </p>

              <Button variant="primary" className="bg-primary-gradient mt-3 me-1" onClick={smallmodalShow}>
                Small Modal
              </Button>

              <Modal size="sm" show={show} onHide={smallmodalClose}>
                <ModalHeader>
                  <ModalTitle>Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={smallmodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={smallmodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={smallmodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <Button variant="success" className=" bg-success-gradient mt-3 me-1" onClick={largemodalShow}>
                large Modal
              </Button>

              <Modal size="lg" show={show1} onHide={largemodalClose}>
                <ModalHeader>
                  <ModalTitle>Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={largemodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={largemodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={largemodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <Button variant="success" className=" bg-success-gradient mt-3 me-1" onClick={xtralargemodalShow}>
                Extralarge Modal
              </Button>

              <Modal size="xl" show={show2} onHide={xtralargemodalClose}>
                <ModalHeader>
                  <ModalTitle>Modal Titel</ModalTitle>
                  <span className="d-flex ms-auto" onClick={xtralargemodalClose}><i className='fe fe-x ms-auto' ></i></span>
                </ModalHeader>
                <ModalBody>Modal body text goes here..!</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={xtralargemodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={xtralargemodalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>

              <ScrollModal />

              <Fullscreen />
              <Collapse in={Size} className="mt-2">
                <pre>
                  <code>
                    {`
export function Fullscreen() {

  let [fullScreen, setFullscreen] = useState("true");
  const [show, setShow] = useState(false);

  const fullscreenmodalClose = () => setShow(false);

  function handleShow(breakpoint: any) {
      setFullscreen(breakpoint);
      setShow(true);
  }

  return (
      <>

  <Button variant="warning" className="bg-warning-gradient mt-3 mb-3 mb-md-0 me-1" onClick={() => handleShow(true)}>
      Full screen

  </Button>

  <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
      <Modal.Header>
  <Modal.Title>Modal</Modal.Title>
  <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
      <Modal.Footer>
  <Button variant="secondary" onClick={fullscreenmodalClose}>
      Close
  </Button>
  <Button variant="primary" onClick={fullscreenmodalClose}>
      Save Changes
  </Button>
      </Modal.Footer>
  </Modal>
      </>
  )
};
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={6} md={6} lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <div className='d-flex'>
                <h6 className="main-content-label mb-3">Select2 Inside Modals</h6>
                <Form className="ms-auto">
                  <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSelect2(!Select2)} className="showcode d-flex ms-auto mx-2" />
                </Form>
                </div>
              </div>
              <SelectInsideModal />
              <Collapse in={Select2} className="mt-2">
                <pre>
                  <code>
                    {`
export function SelectInsideModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button className="me-3 mt-2" variant="pink" onClick={handleShow}>Select2 Modal</Button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <Modal.Title>Select2 Modal</Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  <h6>Modal Body</h6>
                  <Form.Select>
                      <option>Choose one</option>
                      <option value="1">Firefox</option>
                      <option value="2">Chrome</option>
                      <option value="3">Safari</option>
                      <option value="4">Opera</option>
                      <option value="5">Internet Explore</option>
                  </Form.Select>
                  <p className='mt-2'>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="success" onClick={handleClose}>
                      Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
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
        <Col sm={6} md={6} lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="main-content-label mb-3">Input Modal</h6>
                <Form className="ms-auto">
                  <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setMdo(!mdo)} className="showcode d-flex ms-auto mx-2" />
                </Form>
                </div>
              </div>
              <InputModal />
              <Collapse in={mdo} className="mt-2">
                <pre>
                  <code>
                    {`
export function InputModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button className="me-3 mt-2" variant="green" onClick={handleShow}>Open modal for @mdo</Button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                  <Modal.Title>New Message to @mdo</Modal.Title>
                  <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Recipient:</Form.Label>
                          <Form.Control type="text" autoFocus />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Message:</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="success" onClick={handleClose}>
                      Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
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

      {/* <!-- Row --> */}
      <Row>
        <Col lg={12}>
          {/* <!--div--> */}
          <Card id="modal">
            <Card.Header className="border-bottom-0">
              <Card.Title>
                Basic Modal
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setbasic(!basic)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content modal-content-demo">
                      <div className="modal-header">
                        <h6 className="modal-title">Message Preview</h6>
                        <button aria-label="Close" className="btn-close" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div className="modal-body">
                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                          of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-primary">Save changes</button> <button className="btn btn-light">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- pd-y-50 --> */}
              <div className="text-center py-4 bg-light border">

                <BasicModal />
              </div>
              {/* <!-- pd-y-30 --> */}
              <Collapse in={basic} className="mt-2">
                <pre>
                  <code>
                    {`
export function BasicModal() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"
              keyboard={false}
          >
              <Modal.Header >
                  <Modal.Title>Message Preview</Modal.Title>
                  <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>
                  Why We Use Electoral College, Not Popular Vote<br /><br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="primary">Save Changes</Button>
                  <Button variant="light" onClick={viewDemoClose}>
                      Close
                  </Button>

              </Modal.Footer>
          </Modal>
      </>
  );
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card id="modal3">
            <Card.Header className="border-bottom-0">
              <Card.Title>
                Success Alert Messages
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setSuccess(!Success)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4 pb-5">
                        <button aria-label="Close" className="btn-close position-absolute" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                        <i className="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
                        <h4 className="text-success mb-4">Congratulations!</h4>
                        <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p><button className="btn btn-success pd-x-25">Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-wrapper-demo --> */}
              <div className="text-center py-4 bg-light border">

                <SuccessAlert />
              </div>
              {/* <!-- modal-footer-demo --> */}
              <Collapse in={Success} className="mt-2">
                <pre>
                  <code>
                    {`
export function SuccessAlert() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"
          >
              <Modal.Header>
              <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body className="text-center p-4 pb-5" >
                  <i className="icon icon-check fs-70 text-success lh-1 my-4 d-inline-block"></i>
                  <h4 className="text-success mb-4">Congratulations!</h4>
                  <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <Button variant="success" onClick={viewDemoClose}>
                      Continue
                  </Button>
              </Modal.Body>

          </Modal>
      </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card id="modal4">
            <Card.Header className="border-bottom-0">
              <Card.Title>
                Warning Alert Messages
              </Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setWarning(!Warning)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0 mg-t-20">
                <div className="modal d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4 pb-5">
                        <button aria-label="Close" className="btn-close position-absolute" data-bs-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                        <i className="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
                        <h4 className="text-danger mb-20">Error: Cannot process your entry!</h4>
                        <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p><button aria-label="Close" className="btn btn-danger pd-x-25">Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-wrapper-demo --> */}
              <div className="text-center py-4 bg-light border">

                <WarningAlert />
              </div>
              {/* <!-- modal-footer-demo --> */}
              <Collapse in={Warning} className="mt-2">
                <pre>
                  <code>
                    {`
export function WarningAlert() {
  const [show, setShow] = useState(false);

  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => setShow(true);

  return (
      <>
          <Button variant="primary" onClick={viewDemoShow}>
              View Live Demo
          </Button>

          <Modal
              show={show}
              onHide={viewDemoClose}
              backdrop="static"

          >
              <Modal.Header >
              <span className="d-flex ms-auto" onClick={viewDemoClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body className="text-center p-4 pb-5" >
                  <i className="icon icon-close fs-70 text-danger lh-1 my-4 d-inline-block"></i>
                  <h4 className="text-danger mb-20">Error: Cannot process your entry!</h4>
                  <p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <Button variant="danger" onClick={viewDemoClose}>
                      Continue
                  </Button>
              </Modal.Body>

          </Modal>
      </>
  );
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>

  )
};

export default ModalS;
