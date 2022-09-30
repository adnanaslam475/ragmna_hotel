import { useState } from "react";
import { Toast, Button, ToastHeader, Col } from "react-bootstrap";

// BasicToast START
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
// BasicToast END

// Translucent Toasts START
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
// Translucent Toasts END

// Custom content Toasts START
export function CustomContenttoast() {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <div>
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header className="border-bottom-0">
                    <strong className="me-auto">Hello, world! This is a toast message.</strong>
                </Toast.Header>

            </Toast>
        </div>
    );
}
// Custom content Toasts END

// CustomToasts START
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
// CustomToasts END

// ColourA Toasts START
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
// ColourA Toasts END

// ColourB Toasts START
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
// ColourB Toasts END

// ColourC Toasts START
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
// ColourC Toasts END
// ColourD Toasts START
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
// ColourD Toasts END
// StackingA Toasts START
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
// StackingA Toasts END
// StackingB Toasts START
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
// StackingB Toasts END

// Placement Toasts START
export function Placementtoast() {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <div>
            <Toast className='w-100' show={showA} onClose={toggleShowA}>
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
// Placement Toasts END