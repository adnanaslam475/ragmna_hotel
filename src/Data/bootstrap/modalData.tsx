import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Rodal from "rodal";
import "rodal/lib/rodal.css";

// Fullscreen Modal END


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
// Fullscreen Modal END

// Scroll Modal OPEN    

export function ScrollModal() {
    const [show, setShow] = useState(false);

    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);

    return (
        <>

            <Button variant="danger" className="bg-danger-gradient mt-3 me-1" onClick={handleShow1}>
                Scrolling Modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                    <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto' ></i></span>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..<br /> <br />But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?<br /> <br /> But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

// Scroll Modal END

// Basic Modal OPEN

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

// Basic Modal END

// SUCCESS ALERT Modal START
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

// SUCCESS ALERT Modal END

//  Warning Alert Messages START

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

//  Warning Alert Messages END


// Modal Animation Effects

// Zoom

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

//   Fade

export function ModalFade() {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    return (
        <div>
            <Link to="#" className="modal-effect btn btn-secondary-light d-grid mb-3" onClick={show}>Fade</Link>
            <Rodal visible={visible} onClose={hide} animation='fade' height={280}>
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

//   flip

export function ModalFlip() {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    return (
        <div>
            <Link to="#" className="modal-effect btn btn-danger-light d-grid mb-3" onClick={show}>Flip</Link>
            <Rodal visible={visible} onClose={hide} animation='flip' height={280}>
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

//   door 

export function ModalDoor() {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    return (
        <div>
            <Link to="#" className="modal-effect btn btn-warning-light d-grid mb-3" onClick={show}>Door</Link>
            <Rodal visible={visible} onClose={hide} animation='door' height={280}>
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

//   rotate 

export function ModalRotate() {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    return (
        <div>
            <Link to="#" className="modal-effect btn btn-success-light d-grid mb-3" onClick={show}>Rotate</Link>
            <Rodal visible={visible} onClose={hide} animation='rotate' height={280}>
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

//   slideUp
export function ModalSlideUp() {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    return (
        <div>
            <Link to="#" className="modal-effect btn btn-info-light d-grid mb-3" onClick={show}>Slide-Up</Link>
            <Rodal visible={visible} onClose={hide} animation='slideUp' height={280}>
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

//   slideDown 
export function ModalslideDown() {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    return (
        <div>
            <Link to="#" className="modal-effect btn btn-primary-light d-grid mb-3" onClick={show}>slide-Down</Link>
            <Rodal visible={visible} onClose={hide} animation='slideDown' height={280}>
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

//   slideLeft
export function ModalslideLeft() {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    return (
        <div>
            <Link to="#" className="modal-effect btn btn-secondary-light d-grid mb-3" onClick={show}>slide-Left</Link>
            <Rodal visible={visible} onClose={hide} animation='slideLeft' height={280}>
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

//   slideRight 

export function ModalslideRight() {

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    return (
        <div>
            <Link to="#" className="modal-effect btn btn-danger-light d-grid mb-3" onClick={show}>slide-Right</Link>
            <Rodal visible={visible} onClose={hide} animation='slideRight' height={280}>
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

// Select2 Inside Modals

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
                    <span className="ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto' ></i></span>
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

// Input Modal

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
