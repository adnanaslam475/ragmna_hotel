import { useState } from "react";
import { Button, Dropdown, Offcanvas } from "react-bootstrap";


// Default link button OPEN 

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
// Default link button END

// Button with data-bs target OPEN

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

// Button with data-bs target END

// BackDrop offcanvas OPEN

const options = [
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,

  },
  {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,

  },
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,

  },
];

function OffCanvasExample({ name, ...props }: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title><b>Colored with scrolling</b></Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Try scrolling the rest of the page to see this option in action.<br /><br />
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function Backdrop() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

//   BackDrop offcanvas END

// Placement Offcanvas OPEN

function OffCanvasplacement({ name, ...props }: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function Placementbutton() {
  return (
    <>
      {['top', 'end', 'bottom'].map((placement, idx) => (
        <OffCanvasplacement key={idx} placement={placement} name={`Toggle ${placement} Offcanvas `} />
      ))}
    </>
  );
}

// Placement Offcanvas End
