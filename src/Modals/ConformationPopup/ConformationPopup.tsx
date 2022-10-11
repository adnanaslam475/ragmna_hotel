import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap'
import './ConformationPopup.scss'

export interface ConformationPopupProps{
  smallmodalClose:React.Dispatch<React.SetStateAction<boolean>>
}
const ConformationPopup = (props:ConformationPopupProps) => {
  const {
    smallmodalClose,
  }= props
  const [show, setShow] = useState(true);


  return (
    <React.Fragment>
      <Modal size="sm" show={show} onHide={()=>{smallmodalClose(false)}}>
        <ModalHeader>
          <ModalTitle>Delete</ModalTitle>
          <span className="d-flex ms-auto"  onClick={()=>{smallmodalClose(false)}}><i className='fe fe-x ms-auto' ></i></span>
        </ModalHeader>
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={()=>{smallmodalClose(false)}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{smallmodalClose(true)}}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default ConformationPopup