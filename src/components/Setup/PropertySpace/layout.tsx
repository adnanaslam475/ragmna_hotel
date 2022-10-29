import { useEffect } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import Select from 'react-select'

import { DropzoneArea } from 'material-ui-dropzone'
import { CommanDropDownType } from './types'
import { Box } from '@mui/system'
import { useGetAmenitiesQuery } from './apiendpoints'
import { addRoomTypeData, getPropertyDataById } from './propertySpaceSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../Redux/Store'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import { Success } from '../../../Redux/Services/toaster-service'

export const AddRoomType = () => {
	let navigate = useNavigate()
	const RouteChange = () => {
		let path = `/setup/propertyspace`
		navigate(path)
	}
	// export const CutomValidation: React.FC = () => {
	const { data } = useGetAmenitiesQuery()
	const dispatch = useDispatch<AppDispatch>()

	let { id } = useParams()
	console.log(id)

	console.log(data)

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
		// { value: 'Bedroom', label: 'Bedroom' },
		// { value: 'Ballroom', label: 'Ballroom' },
	]

	let onSubmit = async (values: any) => {
		try {
			console.log(values)
			let data = {
				name: values.roomname,
				dimensions: {
					area: values.roomarea,
					unit: values.roomunit,
				},
				maxCapacity: {
					adulta: values.roomadults,
					children: values.children,
				},
				virtualTourLink: values.roomlink,
				allowedFor: values.roomallowedfor,
				isNonSmoking: values.roomsmoking,
				section: [
					{
						name: values.sectionName,
						type: values.sectionType,
						quantity: values.sectionQuantity,
						allowedFor: values.sectionAllowfor,
						maxCapacity: {
							adults: values.sectionAdults,
							children: values.sectionChildren,
						},
						virtualTourLink: values.sectionLink,
						amenities: [values.sectionAmenities],
						dimensions: {
							area: values.sectionArea,
							unit: values.sectionUnit,
						},
					},
				],
				rentalUnits: [
					{
						rentalUnitNumber: values.rentalUnitNo,
						stationId: values.stationID,
						useDefaultSections: values.defaultSection,
						sections: [
							{
								type: values.rentalSectionType,
								name: values.rentalSectionName,
								quantity: values.rentalSectionQuantity,
								virtualTourLink: values.rentalSectionLink,
								allowedFor: values.rentalSectionAllowed,
								amenities: [],
								dimensions: {
									area: values.rentalSectionArea,
									unit: values.rentalSectionUnit,
								},
								maxCapacity: {
									adults: values.rentalSectionAdults,
									children: values.rentalSectionChildren,
								},
							},
						],
					},
				],
			}
			console.log(data)
			// if (id) {
			// 	let response: any = await dispatch(updatePropertyData(data)).unwrap()
			// 	console.log(response)
			// } else {
			// 	let response: any = await dispatch(addRoomTypeData(data)).unwrap()
			// 	console.log(response)
			// }
			let response: any = await dispatch(addRoomTypeData(data)).unwrap()
			console.log(response.code)
			Success('Room Type add successfully')
			RouteChange()
			// if (response !== '') {
			// 	Success('Room Type add successfully')
			// } else {
			// 	alert('error')
			// }
		} catch (error: any) {
			console.log(error)

			Swal.fire({
				title: error.message,
				icon: 'error',
				allowOutsideClick: false,
				showCancelButton: true,
				cancelButtonText: 'Exit',
				confirmButtonColor: 'default',
				cancelButtonColor: '#6c5ffc',
			})
		}
	}
	const initialValues = {
		roomname: '',
		roomarea: 0,
		roomunit: '',
		roomadults: 0,
		roomchilderen: 0,
		roomallowedfor: '',
		roomlink: '',
		roomsmoking: false,
		sectionType: '',
		sectionName: '',
		sectionQuantity: 0,
		sectionAllowfor: '',
		sectionAdults: 0,
		sectionChildren: 0,
		sectionLink: '',
		sectionAmenities: '',
		sectionArea: 0,
		sectionUnit: '',

		rentalUnitNo: 0,
		stationID: '',
		defaultSection: false,
		rentalSectionType: '',
		rentalSectionName: '',
		rentalSectionQuantity: 0,
		rentalSectionLink: '',
		rentalSectionAllowed: '',
		rentalSectionAmenities: '',
		rentalSectionArea: 0,
		rentalSectionUnit: '',
		rentalSectionadults: 0,
		rentalSectionChildren: 0,
		section: [],
	}
	const { handleSubmit, values, handleChange, setValues } = useFormik({
		initialValues,
		onSubmit,
	})
	const getById = async () => {
		if (id) {
			let response: any = await dispatch(getPropertyDataById(id)).unwrap()
			console.log(response)

			if (response?.data) {
				setValues({
					...values,
					roomname: response?.data?.name ? response?.data?.name : '',
					roomarea: response?.data?.dimensions.area ? response?.data?.dimensions.area : '',
					roomunit: response?.data?.dimensions.unit ? response?.data?.dimensions.unit : '',
					roomadults: response?.data?.maxCapacity.adults ? response?.data?.maxCapacity.adults : '',
					roomchilderen: response?.data?.maxCapacity.children ? response?.data?.maxCapacity.children : '',
					section: response?.data?.sections,
				})
				// if (response?.data?.sections) setSectionArray(response.data.sections)
			}
		}
	}
	useEffect(() => {
		if (id) {
			getById()
		}
	}, [id])
	console.log(values.roomunit)

	return (
		<Card>
			<Card.Body>
				{/* <Formik initialValues={{ name: '', email: '', phone: '', blog: '' }}> */}
				<Form noValidate validated={false} onSubmit={handleSubmit}>
					<Card.Title>Room Information</Card.Title>
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
								onChange={(v) => handleChange({ target: { name: 'roomunit', value: v?.value || '' } })}
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
										<Form.Control
											type="number"
											name="roomadults"
											placeholder="Adults"
											required
											onChange={handleChange}
										/>
										<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
									</Col>
									<Col xl={6}>
										<Form.Label>Childeren</Form.Label>
										<Form.Control
											type="number"
											name="roomchilderen"
											placeholder="Childerens"
											required
											onChange={handleChange}
										/>
										<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
									</Col>
								</div>
							</Box>
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
							<Form.Control
								type="text"
								placeholder="Virtual Tour Link"
								name="sectionlink"
								required
								onChange={handleChange}
							/>
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
					{/* {values.section.map((item: any) => (
						<div className="form-row">
							<Col xl={4} className="mb-3">
								<Form.Label>Section Type</Form.Label>
								<Select
									classNamePrefix="Select"
									options={sectionsType}
									placeholder="Type"
									name="sectionType"
									onChange={(v) => handleChange({ target: { name: 'sectionType', value: v?.value || '' } })}
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
									value={item.name}
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
					))} */}
					<div className="form-row">
						<Col xl={4} className="mb-3">
							<Form.Label>Section Type</Form.Label>
							<Select
								classNamePrefix="Select"
								options={sectionsType}
								placeholder="Type"
								name="sectionType"
								onChange={(v) => handleChange({ target: { name: 'sectionType', value: v?.value || '' } })}
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
								// value={item.name}
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
						<Col xl={3}>
							<Form.Label>Adults</Form.Label>
							<Form.Control type="number" name="sectionAdults" placeholder="Adults" required onChange={handleChange} />
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={3}>
							<Form.Label>Childrens</Form.Label>
							<Form.Control
								type="number"
								name="sectionChildren"
								placeholder="Childrens"
								required
								onChange={handleChange}
							/>
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Allowed For</Form.Label>
							<Select
								classNamePrefix="Select"
								options={allowFors}
								placeholder="State"
								onChange={(v) => handleChange({ target: { name: 'sectionAllowfor', value: v?.value || '' } })}
								name="sectionAllowfor"
							/>
							<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Virtual Link</Form.Label>
							<Form.Control
								type="text"
								placeholder="Virtual Tour Link"
								required
								name="sectionLink"
								onChange={handleChange}
							/>
							<Form.Control.Feedback type="invalid">Please provide a valid link.</Form.Control.Feedback>
						</Col>
					</div>
					<div className="form-row">
						<Col xl={3} className="mb-3">
							<Form.Label>Amenities</Form.Label>

							<select
								placeholder="Amentities"
								name="sectionAmenities"
								onChange={(v) => handleChange({ target: { name: 'sectionAmenities', value: v?.target.value || '' } })}
							>
								{data?.data.map((item, index) => {
									return <option value={item._id}>{item.name}</option>
								})}
							</select>

							<Form.Control.Feedback type="invalid"> Please provide a valid Amenities.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Dimesnions area</Form.Label>
							<Form.Control type="number" placeholder="Area" required name="sectionArea" onChange={handleChange} />
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={6} className="mb-3">
							<Form.Label>Dimensions Unit</Form.Label>
							<Select
								classNamePrefix="Select"
								options={units}
								placeholder="Unit"
								name="sectionUnit"
								onChange={(v) => handleChange({ target: { name: 'sectionUnit', value: v?.value || '' } })}
							/>
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
							<Form.Control
								required
								type="number"
								placeholder="Name"
								defaultValue="10"
								name="rentalUnit"
								onChange={handleChange}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Station ID</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Station ID"
								defaultValue="12"
								name="stationID"
								onChange={handleChange}
							/>
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
								name="defaultSection"
								onChange={handleChange}
							/>
						</Col>
					</div>

					<div className="form-row">
						<Col xl={12} className="mb-3>">
							Sections
						</Col>

						<Col xl={4} className="mb-3">
							<Form.Label>Section Type</Form.Label>
							<Select
								classNamePrefix="Select"
								options={sectionsType}
								placeholder="Type"
								name="rentalSectionType"
								onChange={(v) => handleChange({ target: { name: 'rentalSectionType', value: v?.value || '' } })}
							/>
							<Form.Control.Feedback type="invalid"> Please provide a valid Type.</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Name"
								defaultValue="Mark"
								name="rentalSectionName"
								onChange={handleChange}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>
						<Col xl={4} className="mb-3">
							<Form.Label>Quantity</Form.Label>
							<Form.Control
								required
								type="number"
								placeholder="Quantity"
								defaultValue="12"
								name="rentalSectionQuantity"
								onChange={handleChange}
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Col>

						<Col xl={3}>
							<Form.Label>Adults</Form.Label>
							<Form.Control
								type="number"
								name="rentalSectionAdults"
								placeholder="Adults"
								required
								onChange={handleChange}
							/>
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={3}>
							<Form.Label>Childrens</Form.Label>
							<Form.Control
								type="number"
								name="rentalSectionChildren"
								placeholder="Childrens"
								required
								onChange={handleChange}
							/>
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Allowed For</Form.Label>
							<Select
								classNamePrefix="Select"
								options={allowFors}
								placeholder="State"
								name="rentalSectionAllowed"
								onChange={(v) => handleChange({ target: { name: 'rentalSectionAllowed', value: v?.value || '' } })}
							/>
							<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Virtual Link</Form.Label>
							<Form.Control
								type="text"
								placeholder="Virtual Tour Link"
								required
								name="rentalSectionLink"
								onChange={handleChange}
							/>
							<Form.Control.Feedback type="invalid">Please provide a valid link.</Form.Control.Feedback>
						</Col>
					</div>
					<div className="form-row">
						<Col xl={3} className="mb-3">
							<Form.Label>Amenities</Form.Label>
							<Select classNamePrefix="Select" options={state} placeholder="Amenities" name="rentalSectionAmenities" />
							<Form.Control.Feedback type="invalid"> Please provide a valid Amenities.</Form.Control.Feedback>
						</Col>
						<Col xl={3} className="mb-3">
							<Form.Label>Dimesnions area</Form.Label>
							<Form.Control
								type="number"
								placeholder="Area"
								required
								name="rentalSectionArea"
								onChange={handleChange}
							/>
							<Form.Control.Feedback type="invalid">Please provide a valid area.</Form.Control.Feedback>
						</Col>
						<Col xl={6} className="mb-3">
							<Form.Label>Dimensions Unit</Form.Label>
							<Select
								classNamePrefix="Select"
								options={units}
								placeholder="Unite"
								name="rentalSectionUnit"
								onChange={(v) => handleChange({ target: { name: 'rentalSectionUnit', value: v?.value || '' } })}
							/>
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
					<Button title="Submit" type="submit">
						Submit
					</Button>
				</Form>
				{/* </Formik> */}
			</Card.Body>
		</Card>
	)
}
