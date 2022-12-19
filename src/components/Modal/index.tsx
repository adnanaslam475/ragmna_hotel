import React from 'react'
import { Close } from '@mui/icons-material';
import { Typography, IconButton } from '@mui/material';
import { borderRadius } from '@mui/system';
import {
  Row, Alert,
  CloseButton,
  Modal,
  Button, Dropdown, DropdownButton,
} from "react-bootstrap";

function TaskModal({ handleModal, data }) {
  return (
    <Modal
      show={true}
      className='task__modal h-250 p-10'
      onHide={handleModal}
      onBackdropClick={handleModal}
      centered
      backdrop="static"
    >
      <IconButton size='small' className='close__icon' onClick={handleModal}>
        <Close fontSize='small' className='clr-white' />
      </IconButton>
      <Modal.Body className=''>
        <Alert className='d-flex justify-content-between redalert'
        >
          <div className='d-flex flex-column text-align-center'>
            <Typography variant='h5'>
              {data.name}
            </Typography>
            <Typography>
              {data.name}
            </Typography>
          </div>
          <DropdownButton
            align="start"
            className="m-1 filter-drop"
            title="Sort by Room"
          >
            <Dropdown.Item eventKey="1">Room #</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Zone</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Arrival Due</Dropdown.Item>
          </DropdownButton>
        </Alert>
        {[{ name: 'tasks' }, { name: 'task2s' }].map(v => <div key={v.name}
          className='h-7 mt-2 px-2 bg-light-gray w-100 d-flex align-items-center'
        >{v.name}</div>)}
      </Modal.Body>
    </Modal>
  )
}

export default TaskModal