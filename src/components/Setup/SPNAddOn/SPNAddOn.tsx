import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import JsonData from './data.json'
const SPNAddOn = () => {
	return (
		<div>
			{/* <div>{DisplayData}</div> */}
			<div>
				<Row className="mt-4">
					<Card id="Tooltip">
						<span className="ribbone-success-left">
							<span>
								<i className="fe fe-zap"></i>
							</span>
						</span>
						<Card.Header>
							<Card.Title>Select All Services</Card.Title>
							<Form className="ms-auto">
								<Form.Check type="switch" id="custom-switch" className="showcode d-flex ms-auto mx-2" />
							</Form>
						</Card.Header>
					</Card>
				</Row>

				<Row className="mt-2.">
					{JsonData.map((infodata) => (
						<>
							{infodata.fee > 0 ? (
								<>
									<Col xs={4}>
										<Card>
											<div className="arrow-ribbone-left bg-warning">Service</div>

											<Card.Header style={{ padding: '2.2rem 1.5rem' }}>
												<Card.Title>{infodata.name}</Card.Title>
												<div className="card-options">
													<Form.Check className="mb-2 mt-0" type="switch" id="custom-switch" defaultChecked />
												</div>
											</Card.Header>

											<Card.Body style={{ padding: 10 }}>
												<FloatingLabel controlId="floatingInputGrid" label="Marketing Fee">
													<Form.Control
														disabled
														readOnly
														type="email"
														placeholder="name@example.com"
														value={infodata.fee}
													/>
												</FloatingLabel>
											</Card.Body>
										</Card>
									</Col>
								</>
							) : (
								''
							)}
						</>
					))}
				</Row>

				<Row className="mt-5">
					<Form.Group className="mb-3">
						<Form.Check type="checkbox" id="disabledFieldsetCheck" label="I agree terms & condition and policy" />
					</Form.Group>
					{/* {savePolicy ? (
								<Button type="submit">Submit</Button>
							) : (
								<Button disabled={true} type="submit">
									Submit
								</Button>
							)} */}
				</Row>
			</div>
		</div>
	)
}

export default SPNAddOn
