import React, { FC } from 'react';
import styles from './FormAdvanced.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Col, Form, Row, Card, Button, InputGroup } from 'react-bootstrap';
import { FileUpload, FileuploadCustomised, DisabledFileDropZone, CustomFileuploader, BasicSelect, BasicSelectCustom, BasicSelectSearch, Userslist, BasicTimePicker, TimePickers, DynamicTimePicker, BasicStyle, PalettesStyle, BasicDatePicker, MonthPicker, YearPicker, MultipleMonths, DefaultDatePicker, DualList, SelectBox, SelectBoxwithLabel, CountrySelector, SketchExample } from '../../../../Data/Pages/Forms/FormAdvanceData/DataFormAdvanced';
import { MutipleSelect, DisabledMutipleSelect, SingleGroup, MultipleGroup, GroupFilterOption, GroupMultipleOption, CustomisedSelector, MultipleCoustomSelector } from '../../../../Data/Pages/Forms/FormAdvanceData/DataMultipleSelectStyle';


interface FormAdvancedProps { }

const FormAdvanced: FC<FormAdvancedProps> = () => (
  <div className={styles.FormAdvanced}>
    <PageHeader titles="Form Advanced" active="Form Advanced" items={['Forms']} />
    {/* <!-- Row --> */}
    <Row>
      <Col xl={12} md={12}>
        <Form method="post" className="card">
          <Card.Header>
            <Card.Title as='h3'>File Upload</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className="mb-5">
              <Col lg={4} sm={12} className="mb-4 mb-lg-0">
                <FileUpload />
              </Col>
              <Col lg={4} sm={12} className="mb-4 mb-lg-0">
                <FileuploadCustomised />
              </Col>
              <Col lg={4} sm={12}>
                <DisabledFileDropZone />
              </Col>
            </Row>
            <Form.Group>
              <Form.Label className="form-label mt-0">Single File input Upload</Form.Label>


              <Form.Control type="file" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Multiple files input Upload</Form.Label>


              <Form.Control type="file" id="formFileMultiple" multiple />
            </Form.Group>
            <Form.Group className="mb-0 mt-3">

              <CustomFileuploader />
            </Form.Group>
          </Card.Body>
        </Form>
      </Col>
      <Col xl={12} md={12}>
        <Form method="post" className="card">
          <Card.Header>
            <Card.Title as='h3'>Select2 elements</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Basic</Form.Label>
              <BasicSelect />
            </Form.Group>
            <Form.Group>
              <Form.Label>Basic Select2</Form.Label>

              <BasicSelectCustom />
            </Form.Group>
            <Form.Group>
              <Form.Label> Select2 with search box</Form.Label>

              <BasicSelectSearch />
            </Form.Group>
            <Form.Group>
              <Form.Label>Users list</Form.Label>

              <Userslist />
            </Form.Group>
          </Card.Body>
        </Form>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Time Picker</Card.Title>
          </Card.Header>
          <Card.Body>

            <div className="wd-150 mg-b-30">
              <InputGroup>

                <TimePickers />
              </InputGroup>
            </div>
            {/* <!-- wd-150 --> */}
            <Form.Label className="mt-5">Set the scroll position to local time if no defaultValue selected:</Form.Label>
            <div className="wd-150 mg-b-30">
              <InputGroup>

                <BasicTimePicker />
              </InputGroup>
            </div>
            {/* <!-- wd-150 --> */}
            <Form.Label className="mt-4 mb-4">Dynamically set the time using a Javascript Date object:</Form.Label>
            <div className="d-flex">
              <InputGroup className="wd-150">

                <DynamicTimePicker />

              </InputGroup>
              {/* <!-- input-group --> */}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Color Picker</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicStyle />
            <SketchExample />
            <PalettesStyle />
          </Card.Body>
        </Card>
      </Col>

      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Date, Month, Year Range Picker</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <InputGroup>

                  <BasicDatePicker />
                </InputGroup>
              </Col>
              <Col md={4} className="mt-4 mt-md-0">
                <InputGroup>

                  <MonthPicker />
                </InputGroup>
              </Col>
              <Col md={4} className="mt-4 mt-md-0">
                <InputGroup>

                  <YearPicker />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Default Date picker</Card.Title>
          </Card.Header>
          <Card.Body>
            <p className="mg-b-20 mg-sm-b-40">The datepicker is tied to a standard form input field. Click on the input to open an interactive calendar in a small overlay. If a date is chosen, feedback is shown as the input's defaultValue.</p>
            <div className="wd-200 mg-b-30">
              <InputGroup>

                <DefaultDatePicker />
              </InputGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Multiple Months </Card.Title>
          </Card.Header>
          <Card.Body>
            <p className="mg-b-20 mg-sm-b-40">The datepicker is tied to a standard form input field. Click on the input to open an interactive calendar in a small overlay. If a date is chosen, feedback is shown as the input's defaultValue.</p>
            <div className="wd-200 mg-b-30">
              <InputGroup>

                <MultipleMonths />
              </InputGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Multiple Select Styles</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Basic MutipleSelect</Form.Label>

                  <MutipleSelect />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Disabled MutipleSelect</Form.Label>
                  <DisabledMutipleSelect />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Single Group Disabled MutipleSelect</Form.Label>
                  <SingleGroup />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Multiple Items With Group-Option</Form.Label>
                  <MultipleGroup />
                </Form.Group>

              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>MutipleSelect</Form.Label>
                  <GroupFilterOption />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Group-Option MutipleSelect</Form.Label>
                  <GroupMultipleOption />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Custom style1</Form.Label>
                  <CustomisedSelector />
                </Form.Group>
                <Form.Group className="mb-0">
                  <Form.Label>Custom style2</Form.Label>
                  <MultipleCoustomSelector />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Dual List Box</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={12}>
                <Card className="shadow-none border">
                  <Card.Body>
                    {/* <div className="transfer"></div> */}
                    <DualList />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Select Box</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={6} md={12}>
                <Form.Group className="mb-5 mb-lg-0">
                  <SelectBox />
                </Form.Group>
              </Col>
              <Col lg={6} md={12}>
                <Form.Group>
                  <SelectBoxwithLabel />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row--> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Country selector</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form className='CountrySelector'>
              {/* <Form.Control id="phone" name="phone" type="tel" /> */}<CountrySelector />
              <Button className="btn btn-primary py-1 px-4 mb-1">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /Row --> */}

  </div>

);

export default FormAdvanced;
