import styles from './PropertySpace.module.scss'

import { Row, Col, Card } from 'react-bootstrap'
import { VerticalOrientationWizard } from '../../../Data/Pages/Forms/DataFormWizard'
import PageHeader from '../../../Layouts/PageHeader/PageHeader'
import { CutomValidation } from './layout'
const PropertySpace = () => {
	return (
		<div className={styles.FormWizard}>
			<PageHeader titles="Room Types" active="Form-Wizard" items={['Forms']} />

			<Row>
				<Col md={12}>
					<CutomValidation
						name={''}
						updateName={function (arg: string): void {
							throw new Error('Function not implemented.')
						}}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<Card>
						<Card.Header className="border-bottom-0">
							<Card.Title>Vertical Orientation Wizard</Card.Title>
						</Card.Header>
						<Card.Body>
							<VerticalOrientationWizard />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /Row --> */}
		</div>
	)
}

export default PropertySpace
