import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'
import { DropzoneArea } from 'material-ui-dropzone'
import { Title } from 'chart.js'

// Basic Form validation
interface IfirstChildProps {
	name: string
	updateName: (arg: string) => void
}
export const CutomValidation: React.FC<IfirstChildProps> = ({ name, updateName }) => {
	// export const CutomValidation: React.FC = () => {
	const [validated, setValidated] = useState(false)
	const state = [{ value: 'both', label: 'Both' }]
	const handleSubmit = (event) => {
		console.log(event.target.value)
		event.preventDefault()
		const form = event.currentTarget
		const formDataObj = Object.fromEntries(form.entries())
		console.log(formDataObj)

		if (form.checkValidity() === false) {
			event.preventDefault()
			event.stopPropagation()
		}

		setValidated(true)
	}

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="form-row">
				<Col xl={6} className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control required type="text" placeholder="Name" defaultValue="Mark" />
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				</Col>
				<Col xl={6} className="mb-3">
					<Form.Label>Dimensions</Form.Label>
					<Select classNamePrefix="Select" options={state} placeholder="Dimensions" />
					<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
				</Col>
			</div>
			<div className="form-row">
				<Col xl={6} className="mb-3">
					<Form.Label>Capacity</Form.Label>
					<Select classNamePrefix="Select" options={state} placeholder="Capacity" />
					<Form.Control.Feedback type="invalid"> Please provide a valid capacity.</Form.Control.Feedback>
				</Col>
				<Col xl={3} className="mb-3">
					<Form.Label>Allowed For</Form.Label>
					<Select classNamePrefix="Select" options={state} placeholder="State" />
					<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
				</Col>
				<Col xl={3} className="mb-3">
					<Form.Label>Virtual Link</Form.Label>
					<Form.Control type="text" placeholder="Virtual Tour Link" required />
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
			<Button type="submit" onClick={() => updateName('Micheal')}>
				Save
			</Button>
		</Form>
	)
}

// Section Form

export function SectionForm() {
	const [validated, setValidated] = useState(false)
	const state = [{ value: 'both', label: 'Both' }]
	const handleSubmit = (event) => {
		const form = event.currentTarget
		if (form.checkValidity() === false) {
			event.preventDefault()
			event.stopPropagation()
		}

		setValidated(true)
	}

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
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
		</Form>
	)
}

// Rental Unit Section
export function RentalUnitForm() {
	const [validated, setValidated] = useState(false)
	const state = [{ value: 'both', label: 'Both' }]
	const handleSubmit = (event: any) => {
		console.log(event)

		const form = event.currentTarget
		if (form.checkValidity() === false) {
			event.preventDefault()
			event.stopPropagation()
		}

		setValidated(true)
	}

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
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
		</Form>
	)
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
})

export function FormvalidationWithTooltip() {
	const state = [{ value: '....', label: '....' }]

	return (
		<Formik
			validationSchema={schema}
			onSubmit={console.log}
			initialValues={{
				firstName: 'Mark',
				lastName: 'Otto',
				username: '',
				city: '',
				state: '',
				zip: '',
				file: null,
				terms: false,
			}}
		>
			{({ handleSubmit, handleChange, values, touched, errors }) => (
				<Form noValidate onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative">
							<Form.Label>First name</Form.Label>
							<Form.Control
								type="text"
								name="firstName"
								value={values.firstName}
								onChange={handleChange}
								isValid={touched.firstName && !errors.firstName}
							/>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative">
							<Form.Label>Last name</Form.Label>
							<Form.Control
								type="text"
								name="lastName"
								value={values.lastName}
								onChange={handleChange}
								isValid={touched.lastName && !errors.lastName}
							/>
							<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative">
							<Form.Label>City</Form.Label>
							<Form.Control
								type="text"
								placeholder="City"
								name="city"
								value={values.city}
								onChange={handleChange}
								isInvalid={!!errors.city}
							/>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.city}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="3" controlId="validationFormik104" className="position-relative ">
							<Form.Label>State</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="State" />

							<Form.Control.Feedback type="invalid" tooltip>
								{' '}
								{errors.state}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative">
							<Form.Label>Zip</Form.Label>
							<Form.Control
								type="text"
								placeholder="Zip"
								name="zip"
								value={values.zip}
								onChange={handleChange}
								isInvalid={!!errors.zip}
							/>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.zip}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Button type="submit">Submit form</Button>
				</Form>
			)}
		</Formik>
	)
}
