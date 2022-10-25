import React, { FormEventHandler, useState } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import Select from 'react-select'

import { DropzoneArea } from 'material-ui-dropzone'
interface IfirstChildProps {
	name: string
	updateName: (arg: string) => void
}
export const CutomValidation: React.FC<IfirstChildProps> = ({ name, updateName }) => {
	// export const CutomValidation: React.FC = () => {
	const [validated, setValidated] = useState(false)
	const state = [{ value: 'both', label: 'Both' }]
	const [values, setValues] = useState({})

	const onFormChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setValues({ ...values, [name]: value })
		console.log(name, value)
	}

	const submitHandler: FormEventHandler = (event) => {
		event.preventDefault()
		event.persist()
		console.log('push data somewhere :)')
		console.log(values)
	}

	return (
		<Card>
			<Card.Body>
				{/* <Formik initialValues={{ name: '', email: '', phone: '', blog: '' }}> */}
				<Form noValidate validated={validated} onSubmit={submitHandler}>
					<div className="form-row">
						<Col xl={6} className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control required type="text" placeholder="Name" defaultValue="Data" onChange={onFormChange} />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
						<Col xl={6} className="mb-3">
							<Form.Label>Dimensions</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Dimensions" onChange={onFormChange} />
							<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
						</Col>
					</div>
					<div className="form-row">
						<Col xl={6} className="mb-3">
							<Form.Label>Capacity</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Capacity" onChange={onFormChange} />
							<Form.Control.Feedback type="invalid"> Please provide a valid capacity.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Allowed For</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="State" onChange={onFormChange} />
							<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Virtual Link</Form.Label>
							<Form.Control type="text" placeholder="Virtual Tour Link" required onChange={onFormChange} />
							<Form.Control.Feedback type="invalid">Please provide a valid link.</Form.Control.Feedback>
						</Col>
						<Col xl={12} className="mb-3 mt-4">
							<DropzoneArea
								acceptedFiles={['image/*']}
								// onChange={this.handleChange.bind(this)}
								showFileNames
								showAlerts={true}
								filesLimit={100}
								dropzoneText="Select atleast 5 images"
							/>
						</Col>
					</div>
					<Form.Group className="mb-3">
						<Form.Check
							required
							label="Is Non Smoking?"
							feedback="You must agree before submitting."
							feedbackType="invalid"
						/>
					</Form.Group>
					{/* <Button type="submit" onClick={() => updateName('Micheal')}>
				Save
			</Button> */}

					<Card.Title className="mt-5">Section</Card.Title>
					<div className="form-row">
						<Col xl={4} className="mb-3">
							<Form.Label>Section Type</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Type" />
							<Form.Control.Feedback type="invalid"> Please provide a valid Type.</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control required type="text" placeholder="Name" defaultValue="Mark" />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Quantity</Form.Label>
							<Form.Control required type="text" placeholder="Quantity" defaultValue="12" />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
					</div>
					<div className="form-row">
						<Col xl={3} className="mb-3">
							<Form.Label>Capacity</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Capacity" />
							<Form.Control.Feedback type="invalid"> Please provide a valid capacity.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Allowed For</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="State" />
							<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
						</Col>
						<Col xl={6} className="mb-3">
							<Form.Label>Virtual Link</Form.Label>
							<Form.Control type="text" placeholder="Virtual Tour Link" required />
							<Form.Control.Feedback type="invalid">Please provide a valid link.</Form.Control.Feedback>
						</Col>
					</div>
					<div className="form-row">
						<Col xl={3} className="mb-3">
							<Form.Label>Amenities</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Amenities" />
							<Form.Control.Feedback type="invalid"> Please provide a valid Amenities.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Dimesnions area</Form.Label>
							<Form.Control type="number" placeholder="Area" required />
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={6} className="mb-3">
							<Form.Label>Dimensions Unit</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Unite" />
							<Form.Control.Feedback type="invalid"> Please provide a valid unit.</Form.Control.Feedback>
						</Col>
						<Col xl={12} className="mb-3 mt-4">
							<DropzoneArea
								acceptedFiles={['image/*']}
								// onChange={this.handleChange.bind(this)}
								showFileNames
								showAlerts={true}
								filesLimit={100}
								dropzoneText="Select images"
							/>
						</Col>
					</div>

					<div className="form-row">
						<Col xl={4} className="mb-3">
							<Form.Label>Rental Unit No</Form.Label>
							<Form.Control required type="text" placeholder="Name" defaultValue="Mark" />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Station ID</Form.Label>
							<Form.Control required type="text" placeholder="Station ID" defaultValue="12" />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							<Form.Group className="mb-3"></Form.Group>
						</Col>

						<Col xl={4} className="mb-3">
							<Form.Label>Default Section</Form.Label>

							<Form.Check
								required
								label="Use Default Section"
								feedback="You must agree before submitting."
								feedbackType="invalid"
							/>
						</Col>
					</div>

					<div className="form-row">
						<Col xl={12} className="mb-3>">
							Sections
						</Col>

						<Col xl={4} className="mb-3">
							<Form.Label>Section Type</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Type" />
							<Form.Control.Feedback type="invalid"> Please provide a valid Type.</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control required type="text" placeholder="Name" defaultValue="Mark" />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Quantity</Form.Label>
							<Form.Control required type="text" placeholder="Quantity" defaultValue="12" />
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>

						<Col xl={3} className="mb-3">
							<Form.Label>Capacity</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Capacity" />
							<Form.Control.Feedback type="invalid"> Please provide a valid capacity.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Allowed For</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="State" />
							<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
						</Col>
						<Col xl={6} className="mb-3">
							<Form.Label>Virtual Link</Form.Label>
							<Form.Control type="text" placeholder="Virtual Tour Link" required />
							<Form.Control.Feedback type="invalid">Please provide a valid link.</Form.Control.Feedback>
						</Col>
					</div>
					<div className="form-row">
						<Col xl={3} className="mb-3">
							<Form.Label>Amenities</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Amenities" />
							<Form.Control.Feedback type="invalid"> Please provide a valid Amenities.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Dimesnions area</Form.Label>
							<Form.Control type="number" placeholder="Area" required />
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={6} className="mb-3">
							<Form.Label>Dimensions Unit</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Unite" />
							<Form.Control.Feedback type="invalid"> Please provide a valid unit.</Form.Control.Feedback>
						</Col>
						<Col xl={12} className="mb-3 mt-4">
							<DropzoneArea
								acceptedFiles={['image/*']}
								// onChange={this.handleChange.bind(this)}
								showFileNames
								showAlerts={true}
								filesLimit={100}
								dropzoneText="Select images"
							/>
						</Col>
					</div>
					<Button title="Submit" type="submit" />
				</Form>
				{/* </Formik> */}
			</Card.Body>
		</Card>
	)
}
