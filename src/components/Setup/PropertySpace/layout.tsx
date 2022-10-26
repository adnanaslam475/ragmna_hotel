import React, { FormEventHandler, useState } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import Select from 'react-select'

import { DropzoneArea } from 'material-ui-dropzone'
import { CommanDropDownType } from './types'
import { Box } from '@mui/system'
import { useGetAmenitiesQuery } from './apiendpoints'
import { addRoomTypeData } from './propertySpaceSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../Redux/Store'
import { useFormik } from 'formik'
interface IfirstChildProps {
	name: string
	updateName: (arg: string) => void
}
export const CutomValidation: React.FC<IfirstChildProps> = ({ name, updateName }) => {
	// export const CutomValidation: React.FC = () => {
	const { data } = useGetAmenitiesQuery()
	const dispatch = useDispatch<AppDispatch>()

	console.log(data)

	const [validated, setValidated] = useState(false)
	const state = [{ value: 'both', label: 'Both' }]

	const allowFors: CommanDropDownType[] = [
		{ value: '', label: 'Select Allowed For' },
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
		{ value: 'Both', label: 'Both' },
	]

	const units: CommanDropDownType[] = [
		{ value: '', label: 'Select Units For' },
		{ value: 'SquareFeet', label: 'SquareFeet' },
	]
	const sectionsType: CommanDropDownType[] = [
		{ value: '', label: 'Select Units For' },
		{ value: 'Kitchen', label: 'Kitchen' },
		{ value: 'SwimmingPool', label: 'SwimmingPool' },
		{ value: 'FootballField', label: 'FootballField' },
		{ value: 'BasketballField', label: 'BasketballField' },
	]

	let onSubmit = async (values: any) => {
		console.log(values)

		// try {
		let payload = Object.assign({}, values)
		//  payload['supplierId'] = user.supplierId
		// 	payload['contact'] = {
		// 		name: values.Cname,
		// 		phoneNumber: values.CphoneNumber,
		// 		waNumber: values.waNumber,
		// 	}

		let data = {
			name: values.roomname,
			section: [
				{
					name: values.sectionName,
				},
			],
		}
		console.log(data)

		// 	payload['owner'] = {
		// 		name: values.Oname,
		// 		phoneNumber: values.OphoneNumber,
		// 	}
		// 	payload['dimensions'] = {
		// 		area: values.area,
		// 		unit: values.unit,
		// 	}
		// 	payload['maxCapacity'] = {
		// 		adults: values.adults,
		// 		children: values.children,
		// 	}
		// 	payload['reservationConfig'] = {
		// 		automaticRoomAssignment: values.automaticRoomAssignment,
		// 		emailDisplayName: values.emailDisplayName,
		// 		replyToEmailAddress: values.replyToEmailAddress,
		// 		sendCCOnAllEmails: values.sendCCOnAllEmails,
		// 		setOccupiedRoomToDirty: values.setOccupiedRoomToDirty,
		// 		allowOverBookingManually: values.allowOverBookingManually,
		// 		addMarketSegment: [],
		// 	}
		// 	// payload['sections'] = [...sectionArray]
		// 	// payload["images"] = [];
		// 	// payload['availableForEntireRental'] = isChecked
		// 	// if (id) {
		// 	// 	payload['id'] = id
		// 	// 	let response: any = await dispatch(updatePropertyData(payload)).unwrap()
		// 	// }
		// 	//  if {
		let response: any = await dispatch(addRoomTypeData(values)).unwrap()
		console.log(response)
		// 	// navigateToId(response.data._id)
		// 	// }
		// } catch (err: any) {
		// 	console.log(err, 'err')
		// }
	}
	const initialValues = {
		roomname: '',
		roomarea: '',
		roomunit: '',
		roomadults: 0,
		roomchilderen: 0,
		roomallowedfor: '',
		roomlink: '',
		roomsmoking: false,
		sectionType: '',
		sectionName: '',
		sectionQuantity: '',
		sectionAllowfor: '',
	}
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues,
		onSubmit,
	})

	console.log(values.roomunit)

	return (
		<Card>
			<Card.Body>
				{/* <Formik initialValues={{ name: '', email: '', phone: '', blog: '' }}> */}
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<div className="form-row">
						<Col xl={6} className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Name"
								defaultValue="Data"
								name="roomname"
								value={values.roomname}
								onChange={handleChange}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Dimesnions area</Form.Label>
							<Form.Control
								type="number"
								placeholder="Area"
								name="roomarea"
								required
								value={values.roomarea}
								onChange={handleChange}
							/>
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Dimensions Unit</Form.Label>
							<Select
								classNamePrefix="Select"
								placeholder="Unite"
								options={units}
								name="roomunit"
								// value={values.roomunit}
								onChange={(v) => handleChange({ target: { name: 'roomunit', value: v?.value || '' } })}
								// value={units.filter((option) => option.value === values.goodFor)}
							/>
							<Form.Control.Feedback type="invalid"> Please provide a valid unit.</Form.Control.Feedback>
						</Col>
					</div>
					<div className="form-row">
						<Col xl={6} className="mb-3">
							<Box>
								<div className="form-row">
									<Col xl={6}>
										<Form.Label>Adults</Form.Label>
										<Form.Control type="number" name="roomadults" placeholder="Adults" required />
										<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
									</Col>
									<Col xl={6}>
										<Form.Label>Childeren</Form.Label>
										<Form.Control type="number" name="roomchilderen" placeholder="Childerens" required />
										<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
									</Col>
								</div>
							</Box>
							{/* <Form.Label>Capacity</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Capacity" onChange={onFormChange} />
							<Form.Control.Feedback type="invalid"> Please provide a valid capacity.</Form.Control.Feedback> */}
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Allowed For</Form.Label>
							<Select
								classNamePrefix="Select"
								// options={state}
								placeholder="State"
								options={allowFors}
								name="roomallowedfor"
								onChange={(v) => handleChange({ target: { name: 'roomallowedfor', value: v?.value || '' } })}

								// value={allowFors.filter((option) => option.value === values.allowedFor)}
							/>
							<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Virtual Link</Form.Label>
							<Form.Control type="text" placeholder="Virtual Tour Link" name="roomlink" required />
							<Form.Control.Feedback type="invalid">Please provide a valid link.</Form.Control.Feedback>
						</Col>
						<Col xl={12} className="mb-3 mt-4">
							<DropzoneArea
								onDrop={(acceptedFiles) => console.log(acceptedFiles)}
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
							name="roomsmoking"
							onChange={handleChange}
						/>
					</Form.Group>

					<Card.Title className="mt-5" style={{ fontWeight: 'bold', fontSize: '24px' }}>
						Section
					</Card.Title>
					<div className="form-row">
						<Col xl={4} className="mb-3">
							<Form.Label>Section Type</Form.Label>
							<Select
								classNamePrefix="Select"
								options={sectionsType}
								placeholder="Type"
								name="sectionType"
								onChange={handleChange}
							/>
							<Form.Control.Feedback type="invalid"> Please provide a valid Type.</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								required
								type="text"
								name="sectionName"
								onChange={handleChange}
								placeholder="Name"
								defaultValue="Mark"
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Quantity</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Quantity"
								name="sectionQuantity"
								onChange={handleChange}
								defaultValue="12"
							/>
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
							<Select
								classNamePrefix="Select"
								options={allowFors}
								placeholder="State"
								onChange={handleChange}
								name="sectionAllowfor"
							/>
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
							{/* {data.} */}
							{/* 0<Form.Control as="select">
								{data?data.map((opt) => (
									<option value={opt.value}>{opt.value}</option>
								))} */}
							{/* <Select
								classNamePrefix="Select"
								options={amenitiesTypes}
								value={data.filter((option) => option.value === values.type)}
								placeholder="Select Amenities Type"
								name="type"
								onChange={(selectedOption: any, e) => {
									handleChange('type')(selectedOption?.value)
								}}
							/> */}
							<select placeholder="Amentities">
								{data?.data.map((item, index) => {
									return <option value={item._id}>{item.name}</option>
								})}
							</select>

							<Form.Control.Feedback type="invalid"> Please provide a valid Amenities.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Dimesnions area</Form.Label>
							<Form.Control type="number" placeholder="Area" required />
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={6} className="mb-3">
							<Form.Label>Dimensions Unit</Form.Label>
							<Select classNamePrefix="Select" options={units} placeholder="Unite" />
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
					<Card.Title className="mt-5" style={{ fontWeight: 'bold', fontSize: '24px' }}>
						Rental
					</Card.Title>
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
							<Select classNamePrefix="Select" options={allowFors} placeholder="State" />
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
							<Select classNamePrefix="Select" options={units} placeholder="Unite" />
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
