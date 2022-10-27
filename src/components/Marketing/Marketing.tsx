import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
const Marketing = () => {
	const [savePolicy, setSavePolicy] = React.useState(false)
	return (
		<Card className="mt-5">
			<Card.Header>Featured</Card.Header>
			<Card.Body>
				<Row className="g-2">
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
				</Row>

				<Row className="mt-5">
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
				</Row>
			</Card.Body>
		</Card>
	)
}

export default Marketing
