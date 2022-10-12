import React from 'react'
import { Card, Row, Col, Table } from 'react-bootstrap'
import FullCalendar, { EventApi } from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import customViewPlugin from './custom-view-file.js'
import { createEventId } from './event-utils'
import PageHeader from '../../../Layouts/PageHeader/PageHeader'
import CountUp from 'react-countup'
import './calender.scss'
import 'react-datepicker/dist/react-datepicker.css'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
interface DemoAppState {
	weekendsVisible: boolean
	currentEvents: EventApi[]
	value: Date
}
class DefaultCalender extends React.Component<any, DemoAppState> {
	state: DemoAppState = {
		weekendsVisible: true,
		currentEvents: [],
		value: new Date(),
	}
	handleDateSelect = (selectInfo: any) => {
		console.log('date clicked')

		let title = prompt('Please enter a new title for your event')
		let calendarApi = selectInfo.view.calendar

		calendarApi.unselect() // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			})
		}
	}
	handleEventClick = (clickInfo) => {
		if (window?.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
			clickInfo.event.remove()
		}
	}

	renderEventContent = (eventInfo: {
		timeText:
			| string
			| number
			| boolean
			| React.ReactElement<any, string | React.JSXElementConstructor<any>>
			| React.ReactFragment
			| React.ReactPortal
			| null
			| undefined
		event: {
			title:
				| string
				| number
				| boolean
				| React.ReactElement<any, string | React.JSXElementConstructor<any>>
				| React.ReactFragment
				| React.ReactPortal
				| null
				| undefined
		}
	}) => {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<p>
					<i>{eventInfo.event.title}</i>
				</p>
			</>
		)
	}
	render() {
		return (
			<div>
				<PageHeader titles="Default Calender" active="Default Calender" items={['Apps']} />
				<div className="">
					<Card>
						<Card.Body>
							<Row style={{ marginBottom: 10 }}>
								<Col lg={9} className="rateplan">
									<div>
										<span className="d-flex" style={{ gap: 5, alignItems: 'center' }}>
											<input
												className="form-control mb-4 mt-4"
												type="date"
												id="start"
												name="trip-start"
												value="2018-07-22"
												min="2018-01-01"
												max="2018-12-31"
											/>
											<input
												className="form-control mb-4 mt-4"
												type="date"
												id="start"
												name="trip-start"
												value="2018-07-22"
												min="2018-01-01"
												max="2018-12-31"
											/>
											<input className="form-control mb-4 mt-4" placeholder="Audits" />
											<input className="form-control mb-4 mt-4" placeholder="Childeren" />
											<input className="form-control mb-4 mt-4" placeholder="Rack Rate" />
											<input className="form-control mb-4 mt-4" placeholder="Promo Code" />

											<i
												className="fa fa-refresh"
												style={{
													color: 'white',
													border: '1px solid #e9edf4',
													padding: 10,
													borderRadius: 4,
													backgroundColor: '#78b722',
												}}
											></i>
										</span>
									</div>
								</Col>

								<Col lg={3}>
									<Row className="days-column">
										<div className="coldays">
											<CountUp className="h1-heading" end={1} />
											<p>Day</p>
										</div>
										<div className="coldays">
											<CountUp className="h1-heading" end={3} />
											<p>Days</p>
										</div>
										<div className="coldays">
											<CountUp className="h1-heading" end={7} />
											<p>Days</p>
										</div>
										<div className="coldays">
											<CountUp className="h1-heading" end={15} />
											<p>Days</p>
										</div>
										<div className="coldays">
											<CountUp className="h1-heading" end={30} />
											<p>Days</p>
										</div>
									</Row>
									<Row className="days-column mt-2">
										<div className="coldays">
											<i className="fa fa-refresh" style={{ color: 'black' }}></i>
										</div>
										<div className="coldays">
											<p className="mb-0">Options</p>
										</div>
										<div className="coldays">
											<p className="mb-0">UnAssigned(0)</p>
										</div>
									</Row>
								</Col>
							</Row>
							<Row className="mt-5">
								<Col sm={1}>
									<div
										style={{
											backgroundColor: 'lightgreen',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Reserved</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: 'green',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Confirmed</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: 'lightskyblue',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Guranteed</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: 'mediumpurple',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>In House</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: 'grey',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Departed</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: 'orange',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>

									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>On Hold</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: 'coral',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Reserved</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: '#e372b1',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Reserved</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: '#d95652',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Reserved</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: '#415b75',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Reserved</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: '#67779f',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Reserved</p>
								</Col>
								<Col sm={1}>
									<div
										style={{
											backgroundColor: '#d3ecf3',
											height: 20,
											width: 20,
											borderRadius: 50,
											marginLeft: 'auto',
											marginRight: 'auto',
											marginBottom: 10,
										}}
									></div>
									<p style={{ textAlign: 'center', fontSize: 'smaller' }}>Reserved</p>
								</Col>
							</Row>

							<Row className="mt-5">
								<Col sm={12} style={{ paddingLeft: 0 }}>
									<div style={{ height: '343px', overflowY: 'scroll' }}>
										<FullCalendar
											plugins={[resourceTimelinePlugin, interactionPlugin, customViewPlugin]}
											headerToolbar={{
												left: 'prev,title,next',
												center: 'title',
												right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth',
											}}
											initialView="resourceTimelineDay"
											timeZone="UTC"
											dayHeaderFormat={'weekday: short'}
											dayMinWidth={200}
											views={{
												resourceTimelineMonth: {
													dayHeaders: true,
													// allDayContent: { html: '<i>some html</i>' },
													slotLaneContent: {
														html: '<div style="display:flex,justify-content:center"><p style="color:green">$140 </p> </div>',
													},
													type: 'timeline',
													duration: { days: 30 },
													slotDuration: { days: 1 },
													buttonText: '30 Days',
													slotLabelFormat: { weekday: 'short', day: 'numeric', omitCommas: true },
												},
												resourceTimelineDay: {
													type: 'timeline',
													duration: { days: 15 },
													slotDuration: { days: 1 },
													buttonText: '15 Days',
													slotLabelFormat: { weekday: 'short', day: 'numeric', omitCommas: true },
												},
												resourceTimelineWeek: {
													type: 'timeline',
													duration: { days: 7 },
													slotDuration: { days: 1 },
													buttonText: '7 Days',
													slotLabelFormat: { weekday: 'short', day: 'numeric', omitCommas: true },
												},
											}}
											scrollTime="00:00"
											height="auto" // will activate stickyHeaderDates automatically!
											events="https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline"
											resourceAreaHeaderContent="Rooms (SDTQ)"
											resources="https://fullcalendar.io/api/demo-feeds/resources.json?with-nesting&with-colors"
											aspectRatio={1.5}
											editable={true}
											selectable={true}
											selectMirror={true}
											dayMaxEvents={true}
											resourceAreaWidth="165px"
											select={this.handleDateSelect}
											eventContent={this.renderEventContent} // custom render function
											eventClick={this.handleEventClick}
											/* you can update a remote database when these fire:
            
            */
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col className="pr-4" style={{ paddingLeft: 0 }}>
									<div className="availablerooms">
										<Table bordered size="sm" style={{ backgroundColor: 'grey' }}>
											<thead></thead>
											<tbody>
												<tr>
													<td># Room</td>
													<td>4</td>
													<td>5</td>
													<td>3</td>
													<td>7</td>
													<td>9</td>
													<td>3</td>
													<td>1</td>
												</tr>
												<tr>
													<td>% Occupancy</td>
													<td>23%</td>
													<td>48%</td>
													<td>60%</td>
													<td>20%</td>
													<td>50%</td>
													<td>10%</td>
													<td>80%</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Col>
							</Row>

							{/* Another Table for dummyh data */}
						</Card.Body>
					</Card>
				</div>
			</div>
		)
	}
}
export default DefaultCalender
