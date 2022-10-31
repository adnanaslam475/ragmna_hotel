import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

const Marketing = () => {
	const [savePolicy, setSavePolicy] = React.useState(false)
	return (
		<Card className="mt-5">
			<Card.Header>Marketing</Card.Header>
			<Card.Body>
				<Row>
					<Col sm={6} md={6} lg={6} xl={3}>
						<Card>
							<Card.Header className="border-bottom">
								<Card.Title style={{ fontSize: '14px', fontWeight: '500' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between' }}>
										<div className="pt-1">Activate Marketing</div>
										<div>
											<Form.Check
												style={{ fontSize: 16, paddingLeft: '5.8rem' }}
												type="switch"
												id="custom-switch"
												onChange={(e) => {
													setSavePolicy(e.target.checked)
												}}
											/>
										</div>
									</div>
								</Card.Title>
							</Card.Header>
							<Card.Body className="text-center">
								<i className="fa fa-dollar text-secondary fa-3x"></i>
								<h6 className="mt-4 mb-2">Marketing Fee</h6>
								<h2 className="mb-2  number-font">$34,516</h2>
								<Form.Group className="mb-3 mt-6">
									<Form.Check type="checkbox" id="disabledFieldsetCheck" label="I agree terms & condition and policy" />
								</Form.Group>
							</Card.Body>
							<Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
								{savePolicy ? (
									<Button type="submit">Submit</Button>
								) : (
									<Button disabled={true} type="submit">
										Submit
									</Button>
								)}
							</Card.Footer>
						</Card>
					</Col>
					<Col sm={6} md={6} lg={6} xl={3}>
						<Card>
							<Card.Header className="border-bottom">
								<Card.Title style={{ fontSize: '14px', fontWeight: '500' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between' }}>
										<div className="pt-1">Activate Marketing</div>
										<div>
											<Form.Check
												style={{ fontSize: 16, paddingLeft: '5.8rem' }}
												type="switch"
												id="custom-switch"
												onChange={(e) => {
													setSavePolicy(e.target.checked)
												}}
											/>
										</div>
									</div>
								</Card.Title>
							</Card.Header>
							<Card.Body className="text-center">
								<i className="fa fa-dollar text-secondary fa-3x"></i>
								<h6 className="mt-4 mb-2">Marketing Fee</h6>
								<h2 className="mb-2  number-font">$500</h2>
								<Form.Group className="mb-3 mt-6">
									<Form.Check type="checkbox" id="disabledFieldsetCheck" label="I agree terms & condition and policy" />
								</Form.Group>
							</Card.Body>
							<Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
								{savePolicy ? (
									<Button type="submit">Submit</Button>
								) : (
									<Button disabled={true} type="submit">
										Submit
									</Button>
								)}
							</Card.Footer>
						</Card>
					</Col>
					<Col sm={6} md={6} lg={6} xl={3}>
						<Card>
							<Card.Header className="border-bottom">
								<Card.Title style={{ fontSize: '14px', fontWeight: '500' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between' }}>
										<div className="pt-1">Activate Marketing</div>
										<div>
											<Form.Check
												style={{ fontSize: 16, paddingLeft: '5.8rem' }}
												type="switch"
												id="custom-switch"
												onChange={(e) => {
													setSavePolicy(e.target.checked)
												}}
											/>
										</div>
									</div>
								</Card.Title>
							</Card.Header>
							<Card.Body className="text-center">
								<i className="fa fa-dollar text-secondary fa-3x"></i>
								<h6 className="mt-4 mb-2">Marketing Fee</h6>
								<h2 className="mb-2  number-font">$36</h2>
								<Form.Group className="mb-3 mt-6">
									<Form.Check type="checkbox" id="disabledFieldsetCheck" label="I agree terms & condition and policy" />
								</Form.Group>
							</Card.Body>
							<Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
								{savePolicy ? (
									<Button type="submit">Submit</Button>
								) : (
									<Button disabled={true} type="submit">
										Submit
									</Button>
								)}
							</Card.Footer>
						</Card>
					</Col>
					<Col sm={6} md={6} lg={6} xl={3}>
						<Card>
							<Card.Header className="border-bottom">
								<Card.Title style={{ fontSize: '14px', fontWeight: '500' }}>
									<div style={{ display: 'flex', justifyContent: 'space-between' }}>
										<div className="pt-1">Activate Marketing</div>
										<div>
											<Form.Check
												style={{ fontSize: 16, paddingLeft: '5.8rem' }}
												type="switch"
												id="custom-switch"
												onChange={(e) => {
													setSavePolicy(e.target.checked)
												}}
											/>
										</div>
									</div>
								</Card.Title>
							</Card.Header>
							<Card.Body className="text-center">
								<i className="fa fa-dollar text-secondary fa-3x"></i>
								<h6 className="mt-4 mb-2">Marketing Fee</h6>
								<h2 className="mb-2  number-font">$4,16</h2>
								<Form.Group className="mb-3 mt-6">
									<Form.Check type="checkbox" id="disabledFieldsetCheck" label="I agree terms & condition and policy" />
								</Form.Group>
							</Card.Body>
							<Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
								{savePolicy ? (
									<Button type="submit">Submit</Button>
								) : (
									<Button disabled={true} type="submit">
										Submit
									</Button>
								)}
							</Card.Footer>
						</Card>
					</Col>
				</Row>
				{/* <Row className="g-2">
					<Col md>
						<FloatingLabel controlId="floatingInputGrid" label="Marketing Fee">
							<Form.Control type="email" placeholder="name@example.com" />
						</FloatingLabel>
					</Col>
					<Col md style={{ display: 'flex', alignItems: 'center', border: '1px solid #e9edf4', borderRadius: '7px' }}>
						<Form.Check
							style={{ fontSize: 16, paddingLeft: '2.25rem' }}
							type="switch"
							id="custom-switch"
							label="Activate Marketing"
							onChange={(e) => {
								setSavePolicy(e.target.checked)
							}}
						/>
					</Col>
				</Row> */}

				{/* <Row className="mt-5">
					<Form.Group className="mb-3">
						<Form.Check type="checkbox" id="disabledFieldsetCheck" label="I agree terms & condition and policy" />
					</Form.Group>
					{savePolicy ? (
						<Button type="submit">Submit</Button>
					) : (
						<Button disabled={true} type="submit">
							Submit
						</Button>
					)}
				</Row> */}
			</Card.Body>
		</Card>
	)
}

export default Marketing
