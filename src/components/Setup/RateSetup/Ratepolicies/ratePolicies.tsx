import React, { useState, useEffect } from 'react'
import { Accordion, Card, Col, Collapse, Row} from 'react-bootstrap'
import './ratePolicies.scss'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { getpolicies, deletePolicies } from './ratePolicySlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../Redux/Store'
const RatePolicies = () => {
	const dispatch = useDispatch<AppDispatch>()
	const [polices, setpolicies] = useState<any[]>([])
	const [showCancellation, setShow] = useState(false)
	const [showDeposit, setShowDeposit] = useState(false)
	const [showCheckin, setShowCheckin] = useState(false)
	const [showNoshow, setShowNoShow] = useState(false)

	const [ratetype, setRate] = useState()
	const [depositRatetype, setDepositRate] = useState()
	const [checkinRatetype, setCheckinRate] = useState()
	const [noshowRatetype, setNoshowRate] = useState()

	const [comments, setComments] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const showDepositModal = () => setShowDeposit(true)
	const handleDepositClose = () => setShowDeposit(false)
	const showcheckinModal = () => setShowCheckin(true)
	const handlecheckinClose = () => setShowCheckin(false)
	const handlenoshowClose = () => setShowNoShow(false)

	const handleselect = (e) => {
		setRate(e.target.value)
	}
	const depositRateselect = (e) => {
		setDepositRate(e.target.value)
	}
	const checkinRateselect = (e) => {
		setCheckinRate(e.target.value)
	}
	const noshowRateselect = (e) => {
		setNoshowRate(e.target.value)
	}
	const delPolicies = async (value: any) => {
		console.log(value)

		try {
			await dispatch(deletePolicies(value)).unwrap
			dispatch(getpolicies()).unwrap()
			// setDeleteId("");
		} catch (err: any) {}
	}

	const getAllPolicies = async () => {
		try {
			const response: any = await dispatch(getpolicies()).unwrap()
			console.log('data polices', response.data)
			setpolicies(response.data)
			console.log('final policies', polices)
		} catch (error: any) {
			console.log(error)
		}
	}

	const handlecancelationpolicy = () => {}
	useEffect(() => {
		getAllPolicies()
	}, [])
	return (
		<React.Fragment>
			<Row>
				<Col xl={12}>
					<Card className="card-bg">
						<Card.Header>
							<Card.Title>Manage Policy</Card.Title>
						</Card.Header>
						<Card.Body>
							<Accordion defaultActiveKey="0" className="demo-accordion accordionjs m-0">
								{polices.map((entry,index) => (
									<Accordion.Item key={index} eventKey="1" className="acc_section ">
										<Accordion.Header className="acc_head">
											<div style={{ display: 'flex' }}>{entry.type} Policy</div>
											{entry.type === 'Deposit' ? (
												<div
													style={{ display: 'flex', marginLeft: 'auto', marginRight: 20 }}
													onClick={showDepositModal}
												>
													Create New
												</div>
											) : (
												''
											)}
											{entry.type === 'Check-in' ? (
												<div
													style={{ display: 'flex', marginLeft: 'auto', marginRight: 20 }}
													onClick={showcheckinModal}
												>
													Create New
												</div>
											) : (
												''
											)}
											{entry.type === 'Cancellation' ? (
												<div style={{ display: 'flex', marginLeft: 'auto', marginRight: 20 }} onClick={handleShow}>
													Create New
												</div>
											) : (
												''
											)}
										</Accordion.Header>
										{entry.type === 'Deposit' ? (
											<Accordion.Body>
												<div className="policy-item">
													<div style={{ display: 'flex' }}>
														<div style={{ color: '#333', fontSize: 16, width: 'auto' }}>{entry.name}</div>
														<div className="" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
															<span className="icon-edit" style={{ cursor: 'pointer' }}>
																Edit
															</span>
															<span
																className="icon-edit"
																style={{ marginLeft: 15, cursor: 'pointer' }}
																onClick={() => delPolicies(entry._id)}
															>
																Del
															</span>
															<span className="icon-edit" style={{ marginLeft: 15, cursor: 'pointer' }}>
																4 Uses
															</span>
														</div>
													</div>
													<span
														style={{
															color: '#666',
															fontSize: 14,
															fontWeight: 300,
															marginLeft: 20,
															display: 'block',
															marginBottom: 5,
															marginTop: 5,
														}}
													>
														{entry.description}
													</span>
												</div>
											</Accordion.Body>
										) : (
											''
										)}
										{entry.type === 'Check-in' ? (
											<Accordion.Body>
												<div className="policy-item">
													<div style={{ display: 'flex' }}>
														<div style={{ color: '#333', fontSize: 16, width: 'auto' }}>{entry.name}</div>
														<div className="" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
															<span className="icon-edit" style={{ cursor: 'pointer' }}>
																Edit
															</span>
															<span
																className="icon-edit"
																style={{ marginLeft: 15, cursor: 'pointer' }}
																onClick={() => delPolicies(entry._id)}
															>
																Del
															</span>
															<span className="icon-edit" style={{ marginLeft: 15, cursor: 'pointer' }}>
																4 Uses
															</span>
														</div>
													</div>
													<span
														style={{
															color: '#666',
															fontSize: 14,
															fontWeight: 300,
															marginLeft: 20,
															display: 'block',
															marginBottom: 5,
															marginTop: 5,
														}}
													>
														{entry.description}
													</span>
												</div>
											</Accordion.Body>
										) : (
											''
										)}
										{entry.type === 'Cancellation' ? (
											<Accordion.Body>
												<div className="policy-item">
													<div style={{ display: 'flex' }}>
														<div style={{ color: '#333', fontSize: 16, width: 'auto' }}>{entry.name}</div>
														<div className="" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
															<span className="icon-edit" style={{ cursor: 'pointer' }}>
																Edit
															</span>
															<span
																className="icon-edit"
																style={{ marginLeft: 15, cursor: 'pointer' }}
																onClick={() => delPolicies(entry._id)}
															>
																Del
															</span>
															<span className="icon-edit" style={{ marginLeft: 15, cursor: 'pointer' }}>
																4 Uses
															</span>
														</div>
													</div>
													<span
														style={{
															color: '#666',
															fontSize: 14,
															fontWeight: 300,
															marginLeft: 20,
															display: 'block',
															marginBottom: 5,
															marginTop: 5,
														}}
													>
														{entry.description}
													</span>
												</div>
											</Accordion.Body>
										) : (
											''
										)}
										{entry.type === 'noshow' ? (
											<Accordion.Body>
												<div className="policy-item">
													<div style={{ display: 'flex' }}>
														<div style={{ color: '#333', fontSize: 16, width: 'auto' }}>{entry.name}</div>
														<div className="" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
															<span className="icon-edit" style={{ cursor: 'pointer' }}>
																Edit
															</span>
															<span className="icon-edit" style={{ marginLeft: 15, cursor: 'pointer' }}>
																Del
															</span>
															<span className="icon-edit" style={{ marginLeft: 15, cursor: 'pointer' }}>
																4 Uses
															</span>
														</div>
													</div>
													<span
														style={{
															color: '#666',
															fontSize: 14,
															fontWeight: 300,
															marginLeft: 20,
															display: 'block',
															marginBottom: 5,
															marginTop: 5,
														}}
													>
														{entry.description}
													</span>
												</div>
											</Accordion.Body>
										) : (
											''
										)}
									</Accordion.Item>
								))}

								{/* <Accordion.Item eventKey="3" className="acc_section ">
									<Accordion.Header className="acc_head">
										<div style={{ display: 'flex' }}>No Show Policy</div>
										<div style={{ display: 'flex', marginLeft: 'auto', marginRight: 20 }} onClick={shownoshowModal}>
											Create New
										</div>
									</Accordion.Header>
									<Accordion.Body>
										<div className="policy-item">
											<div style={{ display: 'flex' }}>
												<div style={{ color: '#333', fontSize: 16, width: 'auto' }}>No show Policy</div>
												<div className="" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
													<span className="icon-edit" style={{ cursor: 'pointer' }}>
														Edit
													</span>
													<span className="icon-edit" style={{ marginLeft: 15, cursor: 'pointer' }}>
														Del
													</span>
													<span className="icon-edit" style={{ marginLeft: 15, cursor: 'pointer' }}>
														4 Uses
													</span>
												</div>
											</div>
											<span
												style={{
													color: '#666',
													fontSize: 14,
													fontWeight: 300,
													marginLeft: 20,
													display: 'block',
													marginBottom: 5,
													marginTop: 5,
												}}
											>
												Cancellation Policy - Any cancellations made outside 48 hours of arrival are fully refundable.
												Cancellations made within 48 hours of arrival will be non-refundable
											</span>
										</div>
									</Accordion.Body>
								</Accordion.Item> */}
							</Accordion>
							<Collapse className="mt-2">
								<pre>
									<code>
										{`
 
`}
									</code>
								</pre>
							</Collapse>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* Cancellation Modal for creating new policies */}
			<Modal show={showCancellation} onHide={handleClose}>
				<Modal.Header closeButton style={{ background: '#1c7bc2' }}>
					<Modal.Title style={{ color: '#fff', fontSize: 24, fontWeight: 500, fontFamily: 'serif' }}>
						New Cancellation Policy
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{' '}
					<Form.Control type="text" placeholder="Policy Name" />
					<div style={{ marginTop: 10 }}>Select type of fees a guest must pay if they cancel:</div>
					<select
						name="cars"
						id="cars"
						onChange={handleselect}
						style={{ height: 40, borderRadius: 2 }}
						className="mt-3"
					>
						<option value="select">Select</option>
						<option value="pos">Percent of stay</option>
						<option value="ff">Flat Fee</option>
						<option value="non">Number of nights</option>
					</select>
					{ratetype === 'pos' ? (
						<div className="mt-3 mb-5">
							<div>
								<span style={{ fontSize: 'large' }}>Guests will incur a fee of</span>{' '}
								<input
									type="text"
									placeholder="%"
									style={{ fontSize: 'large', marginLeft: '3%', width: '15%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
								<span style={{ fontSize: 'large', marginLeft: '3%' }}>of</span>
								<span
									style={{
										fontSize: 'initial',
										marginLeft: '3%',
									}}
								>
									<select style={{ border: 'none', borderBottom: '1px solid #3ea8f4', color: '#3ea8f4' }}>
										<option>total charges</option>
										<option>room charges</option>
									</select>
								</span>
							</div>
							<div className="mt-3">
								<span style={{ fontSize: 'large' }}>if they cancel</span>{' '}
								<input
									type="text"
									style={{ fontSize: 'large', marginLeft: '2%', width: '10%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
								<span style={{ fontSize: 'large', marginLeft: '2%' }}>days</span>{' '}
								<span
									style={{
										fontSize: 'initial',
									}}
								>
									<select style={{ border: 'none', borderBottom: '1px solid #3ea8f4', color: '#3ea8f4' }}>
										<option>within checkin date</option>
										<option>after the reservation was made</option>
									</select>
								</span>
							</div>
						</div>
					) : ratetype === 'ff' ? (
						<div className="mt-3 mb-5">
							<div>
								<span style={{ fontSize: 'large' }}>Guests will incur a fee of</span>{' '}
								<input
									type="text"
									placeholder="%"
									style={{ fontSize: 'large', marginLeft: '3%', width: '15%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
							</div>
							<div className="mt-3">
								<span style={{ fontSize: 'large' }}>if they cancel</span>{' '}
								<input
									type="text"
									style={{ fontSize: 'large', marginLeft: '2%', width: '10%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
								<span style={{ fontSize: 'large', marginLeft: '2%' }}>days</span>{' '}
								<span
									style={{
										fontSize: 'initial',
									}}
								>
									<select style={{ border: 'none', borderBottom: '1px solid #3ea8f4', color: '#3ea8f4' }}>
										<option>within checkin date</option>
										<option>after the reservation was made</option>
									</select>
								</span>
							</div>
						</div>
					) : ratetype === 'non' ? (
						<div className="mt-3 mb-5">
							<div>
								<span style={{ fontSize: 'large' }}>Guests will incur a fee of</span>{' '}
								<input
									type="text"
									style={{ fontSize: 'large', marginLeft: '3%', width: '15%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
								<span style={{ fontSize: 'large', marginLeft: '3%' }}>nights</span>
							</div>
							<div className="mt-3">
								<span style={{ fontSize: 'large' }}>if they cancel</span>{' '}
								<input
									type="text"
									style={{ fontSize: 'large', marginLeft: '2%', width: '10%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
								<span style={{ fontSize: 'large', marginLeft: '2%' }}>days</span>{' '}
								<span
									style={{
										fontSize: 'initial',
									}}
								>
									<select style={{ border: 'none', borderBottom: '1px solid #3ea8f4', color: '#3ea8f4' }}>
										<option>within checkin date</option>
										<option>after the reservation was made</option>
									</select>
								</span>
							</div>
						</div>
					) : (
						''
					)}
					<div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
						<p className="mb-0" style={{ fontSize: 16 }}>
							Cancellation fine print
						</p>
						<div style={{ display: 'flex', marginLeft: 'auto' }}>
							<Form.Check
								style={{ fontSize: 16 }}
								type="switch"
								id="custom-switch"
								label="Check this switch"
								onChange={(e) => {
									setComments(e.target.checked)
								}}
							/>
						</div>
					</div>
					{comments === true ? (
						<div style={{ marginTop: 10 }}>
							<Form.Control as="textarea" rows={3} />
						</div>
					) : (
						''
					)}
				</Modal.Body>
				<Modal.Footer className="modal_footer_button_alignment">
					<Button variant="primary" onClick={handlecancelationpolicy} className="modal_footer_button">
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>

			{/* Show Deposit modal for creating new deposit policy */}
			<Modal show={showDeposit} onHide={handleDepositClose}>
				<Modal.Header closeButton style={{ background: '#1c7bc2' }}>
					<Modal.Title style={{ color: '#fff', fontSize: 24, fontWeight: 500, fontFamily: 'serif' }}>
						New Deposit Policy
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{' '}
					<Form.Control type="text" placeholder="Policy Name" />
					<div style={{ marginTop: 10 }}>Select type of fees a guest must pay if they cancel:</div>
					<select
						name="cars"
						id="cars"
						onChange={depositRateselect}
						style={{ height: 40, borderRadius: 2 }}
						className="mt-3"
					>
						<option value="select">Select</option>
						<option value="pos">Percent of stay</option>
						<option value="ff">Flat Fee</option>
						<option value="non">Number of nights</option>
					</select>
					{depositRatetype === 'pos' ? (
						<div className="mt-3 mb-5">
							<div>
								<span style={{ fontSize: 'large' }}>When guest books reservation, they must pay</span>{' '}
								<input
									type="text"
									placeholder="%"
									style={{ fontSize: 'large', marginLeft: '3%', width: '15%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
								<span style={{ fontSize: 'large' }}>of</span>
								<span
									style={{
										fontSize: 'initial',
										marginLeft: '3%',
									}}
								>
									<select style={{ border: 'none', borderBottom: '1px solid #3ea8f4', color: '#3ea8f4' }}>
										<option>total charges</option>
										<option>room charges</option>
									</select>
								</span>
							</div>
						</div>
					) : depositRatetype === 'ff' ? (
						<div className="mt-5">
							<span style={{ fontSize: 'large' }}>When guest books reservation, they must pay</span>{' '}
							<input
								type="text"
								placeholder="$"
								style={{ fontSize: 'large', marginLeft: '3%', width: '15%', color: '#3ea8f4' }}
							/>{' '}
						</div>
					) : depositRatetype === 'non' ? (
						<div>
							<div className="mt-5">
								<span style={{ fontSize: 'larger' }}>When guest books reservation, they must pay the first</span>{' '}
								<input type="text" style={{ fontSize: 'large', marginLeft: '3%', width: '7%', color: '#3ea8f4' }} />{' '}
							</div>
							<div className="mt-2">
								<span
									style={{
										fontSize: 'initial',
									}}
								>
									{' '}
									nights of Room Charges
								</span>
							</div>
						</div>
					) : (
						''
					)}
					<div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
						<p className="mb-0" style={{ fontSize: 16 }}>
							Deposit fine print
						</p>
						<div style={{ display: 'flex', marginLeft: 'auto' }}>
							<Form.Check
								style={{ fontSize: 16 }}
								type="switch"
								id="custom-switch"
								label="Check this switch"
								onChange={(e) => {
									setComments(e.target.checked)
								}}
							/>
						</div>
					</div>
					{comments === true ? (
						<div style={{ marginTop: 10 }}>
							<Form.Control as="textarea" rows={3} />
						</div>
					) : (
						''
					)}
				</Modal.Body>
				<Modal.Footer className="modal_footer_button_alignment">
					<Button variant="primary" onClick={handleClose} className="modal_footer_button">
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>

			{/* Check In Policy modal fro creating new policy */}

			<Modal show={showCheckin} onHide={handlecheckinClose}>
				<Modal.Header closeButton style={{ background: '#1c7bc2' }}>
					<Modal.Title style={{ color: '#fff', fontSize: 24, fontWeight: 500, fontFamily: 'serif' }}>
						New Check In Policy
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{' '}
					<Form.Control type="text" placeholder="Policy Name" />
					<div style={{ marginTop: 10 }}>Select type of fees a guest pay on check in</div>
					<select
						name="checkin"
						id="checkin"
						onChange={checkinRateselect}
						style={{ height: 40, borderRadius: 2 }}
						className="mt-3"
					>
						<option value="select">Select</option>
						<option value="pos">% of balance on check-in</option>
					</select>
					{checkinRatetype === 'pos' ? (
						<div className="mt-3 mb-5">
							<div>
								<span style={{ fontSize: 'larger' }}>Upon check in,</span>{' '}
								<input
									type="text"
									placeholder="%"
									style={{ fontSize: 'large', marginLeft: '1%', width: '14%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
								<span style={{ fontSize: 'larger', marginLeft: '1%' }}>of the balance will be</span>
								<span
									style={{
										fontSize: 'initial',
										marginLeft: '3%',
									}}
								>
									<select style={{ border: 'none', borderBottom: '1px solid #3ea8f4', color: '#3ea8f4' }}>
										<option>captured</option>
										<option>authorized</option>
									</select>
								</span>
							</div>
						</div>
					) : (
						''
					)}
					<div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
						<p className="mb-0" style={{ fontSize: 16 }}>
							Check-in fine print
						</p>
						<div style={{ display: 'flex', marginLeft: 'auto' }}>
							<Form.Check
								style={{ fontSize: 16 }}
								type="switch"
								id="custom-switch"
								label="Custom Text"
								onChange={(e) => {
									setComments(e.target.checked)
								}}
							/>
						</div>
					</div>
					{comments === true ? (
						<div style={{ marginTop: 10 }}>
							<Form.Control as="textarea" rows={3} />
						</div>
					) : (
						''
					)}
				</Modal.Body>
				<Modal.Footer className="modal_footer_button_alignment">
					<Button variant="primary" onClick={handleClose} className="modal_footer_button">
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>

			{/* No Show Policy modal fro creating new policy */}

			<Modal show={showNoshow} onHide={handlenoshowClose}>
				<Modal.Header closeButton style={{ background: '#1c7bc2' }}>
					<Modal.Title style={{ color: '#fff', fontSize: 24, fontWeight: 500, fontFamily: 'serif' }}>
						New no show Policy
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{' '}
					<Form.Control type="text" placeholder="Policy Name" />
					<div style={{ marginTop: 10 }}>Select type of fees a guest must pay in the case of a no show:</div>
					<select
						name="cars"
						id="cars"
						onChange={noshowRateselect}
						style={{ height: 40, borderRadius: 2 }}
						className="mt-3"
					>
						<option value="select">Select</option>
						<option value="pos">Percent of stay</option>
						<option value="ff">Flat Fee</option>
						<option value="non">Number of nights</option>
					</select>
					{noshowRatetype === 'pos' ? (
						<div className="mt-3 mb-5">
							<div>
								<span style={{ fontSize: 'large' }}>If a guest is a no show, they must pay</span>{' '}
								<input
									type="text"
									placeholder="%"
									style={{ fontSize: 'large', marginLeft: '1%', width: '15%', textAlign: 'center', color: '#3ea8f4' }}
								/>{' '}
								<span style={{ fontSize: 'large', marginLeft: '1%' }}>of</span>
								<span
									style={{
										fontSize: 'initial',
										marginLeft: '3%',
									}}
								>
									<select style={{ border: 'none', borderBottom: '1px solid #3ea8f4', color: '#3ea8f4' }}>
										<option>total charges</option>
										<option>room charges</option>
									</select>
								</span>
							</div>
						</div>
					) : noshowRatetype === 'ff' ? (
						<div className="mt-5">
							<span style={{ fontSize: 'large' }}>If a guest is a no show, they must pay</span>{' '}
							<input
								type="text"
								placeholder="$"
								style={{ fontSize: 'large', marginLeft: '3%', width: '15%', color: '#3ea8f4' }}
							/>{' '}
						</div>
					) : noshowRatetype === 'non' ? (
						<div>
							<div className="mt-5">
								<span style={{ fontSize: 'larger' }}>If a guest is a no show, they must pay the first</span>{' '}
								<input type="text" style={{ fontSize: 'large', marginLeft: '3%', width: '7%', color: '#3ea8f4' }} />{' '}
							</div>
							<div className="mt-2">
								<span
									style={{
										fontSize: 'initial',
									}}
								>
									{' '}
									nights of Room Charges
								</span>
							</div>
						</div>
					) : (
						''
					)}
					<div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
						<p className="mb-0" style={{ fontSize: 16 }}>
							No Show fine print
						</p>
						<div style={{ display: 'flex', marginLeft: 'auto' }}>
							<Form.Check
								style={{ fontSize: 16 }}
								type="switch"
								id="custom-switch"
								label="Check this switch"
								onChange={(e) => {
									setComments(e.target.checked)
								}}
							/>
						</div>
					</div>
					{comments === true ? (
						<div style={{ marginTop: 10 }}>
							<Form.Control as="textarea" rows={3} />
						</div>
					) : (
						''
					)}
				</Modal.Body>
				<Modal.Footer className="modal_footer_button_alignment">
					<Button variant="primary" onClick={handlenoshowClose} className="modal_footer_button">
						Add Policy
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	)
}

export default RatePolicies
