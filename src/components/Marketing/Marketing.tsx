import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
const Marketing = () => {
	return (
		<Card className="mt-5">
			<Card.Header>Featured</Card.Header>
			<Card.Body>
				<Row className="g-2">
					<Col md>
						<FloatingLabel controlId="floatingInputGrid" label="Email address">
							<Form.Control type="email" placeholder="name@example.com" />
						</FloatingLabel>
					</Col>
					<Col md>
						<FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
							<Form.Select aria-label="Floating label select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</FloatingLabel>
					</Col>
				</Row>
				{/* <Row>
					<Col>
						{' '}
						<Form>
							<fieldset disabled>
								<Form.Group className="mb-3">
									<Form.Label htmlFor="disabledTextInput">Marketing Fee</Form.Label>
									<Form.Control />
								</Form.Group>
							</fieldset>
						</Form>
					</Col>
					<Col>This is some text within a card body.</Col>
				</Row>
				<Row>
					<Form.Group className="mb-3">
						<Form.Check type="checkbox" id="disabledFieldsetCheck" label="Can't check this" />
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Row> */}
			</Card.Body>
		</Card>
	)
}

export default Marketing
