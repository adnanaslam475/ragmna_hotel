import React from 'react'
import { Form } from 'react-bootstrap'

const FormFeedBack = (props) => {
  return (
    <Form.Control.Feedback type='invalid'>
        {props.children}
    </Form.Control.Feedback>
  )
}

export default FormFeedBack