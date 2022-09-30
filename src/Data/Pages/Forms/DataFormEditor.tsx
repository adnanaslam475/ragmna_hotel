import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import 'draft-js/dist/Draft.css';
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import SunEditor from 'suneditor-react';



// Basic Form Editor

export const FormTextEditor = props => {
  return (
    <div>
      <SunEditor />
    </div>
  );
};

// Quill Editor 


export function QuillEditor() {
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
    }
  }, [quill]);

  return (
    <div style={{ width: 'auto' }}>

      <div ref={quillRef} />
    </div>
  );
};



// Form Editor in Modal

export const ModalEditor = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        View live demo
      </Button>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <SunEditor />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Form Inline-Editor

const htmlWithTableImages = `<center>  </center>`;
   
export function App() {
  // replace with initial value with different html variables to reproduce bugs
  const [value, setValue] = React.useState(htmlWithTableImages);

  return (
    <div className="App">
      <SunEditor
        setContents={value}
        onChange={setValue}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            ['paragraphStyle', 'blockquote'],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript"
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],
            ["table", "horizontalRule", "link", "image", "video"],
            ["preview", "print"],
            ["removeFormat"]
          ], 
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
          attributesWhitelist: {
            all: "style",
            table: "cellpadding|width|cellspacing|height|style",
            tr: "valign|style",
            td: "styleinsert|height|style",
            img: "title|alt|src|style"
          }
        }}
      />
      <hr />
      <h2>Example given value output:</h2>
      <textarea className='text-editor'
        disabled
        value={JSON.stringify(value, null, 2)}
        style={{ width: "100%", resize: "none", height: "600px" }}
      />
    </div>
  );
}