import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import JsonData from './data.json'
const SPNAddOn = () => {
	return (
		<div>
			{/* <div>{DisplayData}</div> */}
			<div>
				<Card className="mt-5">
					<Card.Header>Affiliate Marketing</Card.Header>
					<Card.Body>
						{JsonData.map((infodata) => (
							<div>
								{infodata.fee > 0 ? (
									<Row className="g-2 mt-3">
										<Col md>
											<FloatingLabel controlId="floatingInputGrid" label="Marketing Fee">
												<Form.Control
													disabled
													readOnly
													type="email"
													placeholder="name@example.com"
													value={infodata.fee}
												/>
											</FloatingLabel>
										</Col>
										<Col
											md
											style={{
												display: 'flex',
												alignItems: 'center',
												border: '1px solid #e9edf4',
												borderRadius: '7px',
											}}
										>
											<Form.Check
												style={{ fontSize: 16, paddingLeft: '2.25rem' }}
												type="switch"
												id="custom-switch"
												label={infodata.name}
												onChange={(e) => {
													// setSavePolicy(e.target.checked)
												}}
											/>
										</Col>
									</Row>
								) : (
									''
								)}
							</div>
						))}
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
					</Card.Body>
				</Card>
			</div>
		</div>
	)
}

export default SPNAddOn
