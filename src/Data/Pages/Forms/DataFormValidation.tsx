import React, { useState } from 'react'
import { Button, Col, Form, Row, } from 'react-bootstrap';
import { Formik } from 'formik';
import *as Yup from 'yup';
import Select from 'react-select';


// Basic Form validation

export function CutomValidation() {
    const [validated, setValidated] = useState(false);
      const state = [
        { value: ".....", label: "....." },
      ];
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="form-row">
                <Col xl={6} className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col xl={6} className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
            </div>
            <div className="form-row">
                <Col xl={6} className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
                </Col>
                <Col xl={3} className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Select classNamePrefix="Select" options={state} placeholder='State'/>
                    <Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
                </Col>
                <Col xl={3} className="mb-3">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                </Col>
            </div>
            <Form.Group className='mb-3'>
                <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}



// Form Validation with Tooltips

const schema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zip: Yup.string().required(),
    file: Yup.mixed().required(),
    terms: Yup.bool().required().oneOf([true], 'terms must be accepted'),
});

export function FormvalidationWithTooltip() {

    const state = [
        { value: "....", label: "...." },
      ];

    return (
        <Formik validationSchema={schema} onSubmit={console.log} initialValues={{ firstName: 'Mark', lastName: 'Otto', username: '', city: '', state: '', zip: '', file: null, terms: false }}>
            {({ handleSubmit, handleChange, values, touched, errors }) => (

                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" name="firstName" value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName} />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName} />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.city}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik104" className="position-relative ">
                            <Form.Label>State</Form.Label>
                           <Select classNamePrefix="Select" options={state} placeholder='State'/>

                            <Form.Control.Feedback type="invalid" tooltip> {errors.state}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />
                            <Form.Control.Feedback type="invalid" tooltip>{errors.zip}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}
