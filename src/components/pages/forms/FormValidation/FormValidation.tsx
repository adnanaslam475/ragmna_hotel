import React, { FC } from 'react';
import styles from './FormValidation.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { CutomValidation, FormvalidationWithTooltip } from '../../../../Data/Pages/Forms/DataFormValidation';
import Select from 'react-select';

interface FormValidationProps { }

const State = [
  { value: ".....", label: "....." },
];

const Option = [
  { value: "One", label: "One" },
  { value: "Two", label: "Two" },
  { value: "Three", label: "Three" },
  { value: "Four", label: "Four" },

];

const FormValidation: FC<FormValidationProps> = () => {
  return (
  <div className={styles.FormValidation}>
    <PageHeader titles="Form-Validations" active="Form-Validations" items={['Forms']} />
    {/* <!-- ROW OPEN --> */}
    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Cutom Validation</Card.Title>
          </Card.Header>
          <Card.Body>
            <CutomValidation />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Default Validation</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                </Col>
                <Col xl={6} className="mb-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                </Col>
              </div>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Select classNamePrefix="Select" options={State} placeholder='State'/>
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                </Col>
              </div>
              <Form.Group>
                <Form.Check required label="Agree to terms and conditions" feedbackType="invalid" />
              </Form.Group>
              <Button className='mt-3' type="submit">Submit form</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Server Side Validation</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required isValid type="text" placeholder="First name" defaultValue="Mark" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col xl={6} className="mb-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required isValid type="text" placeholder="Last name" defaultValue="Otto" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </div>
              <div className="form-row">
                <Col xl={6} className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required isInvalid />
                  <Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Select classNamePrefix="Select" options={State} placeholder='State'/>
                  <Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
                </Col>
                <Col xl={3} className="mb-3">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required isInvalid />
                  <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                </Col>
              </div>
              <Form.Group>
                <Form.Check required isInvalid label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Supported Elements</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form className="was-validated">
              <div className="mb-3">
                <Form.Label>Textarea</Form.Label>
                <Form.Control as='textarea' className="is-invalid" id="validationTextarea"
                  placeholder="Required example textarea" required></Form.Control>
                <Form.Control.Feedback type="invalid">Please enter a message in the Textarea</Form.Control.Feedback>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />

                <Form.Label className="custom-control-label" forhtml="customControlValidation1" >Check this custom checkbox</Form.Label>

                <div className="invalid-feedback">Example invalid feedback text</div>
              </div>

              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />

                <Form.Label className="custom-control-label" forhtml="customControlValidation2" >Toggle this custom radio</Form.Label>

              </div>

              <div className="custom-control custom-radio mb-3">
                <input type="radio" className="custom-control-input"
                  id="customControlValidation3" name="radio-stacked" required />
                <label className="custom-control-label"
                // for="customControlValidation3"
                >Or toggle
                  this other custom radio</label>
                <div className="invalid-feedback">More example invalid feedback text</div>
              </div>

              <div className="mb-3">
                <InputGroup hasValidation>
                  <InputGroup.Text id="validatedInputGroupPrepend">@</InputGroup.Text>
                  <Form.Control type="text" required isInvalid />
                  <Form.Control.Feedback type="invalid"> Example invalid input group feedback</Form.Control.Feedback>
                </InputGroup>
              </div>



              <div className="mb-3">
                <InputGroup hasValidation className='flex-nowrap'>
                  <InputGroup.Text className='py-2' id="validatedInputGroupPrepend">Option</InputGroup.Text>
                  <Select classNamePrefix="Select" className='w-94' options={Option} placeholder='Select'/>
                  <Form.Control.Feedback type="invalid"> Example invalid input group feedback</Form.Control.Feedback>
                </InputGroup>
              </div>

              <InputGroup  className='wasvalidated'>
                <Form.Control type="file" required />
                <Form.Control.Feedback type="invalid">Example invalid input group feedback</Form.Control.Feedback>
              </InputGroup>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Tooltips</Card.Title>
          </Card.Header>
          <Card.Body>
            <FormvalidationWithTooltip />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW CLOSED --> */}
  </div>
)};

export default FormValidation;
