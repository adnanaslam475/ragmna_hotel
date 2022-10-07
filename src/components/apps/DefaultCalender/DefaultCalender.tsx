import React, { useState } from 'react'
import { Card, Row, Col, Button, Table } from 'react-bootstrap'
import FullCalendar, { EventApi } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import { INITIAL_EVENTS } from './event-utils'
import PageHeader from '../../../Layouts/PageHeader/PageHeader'
// import { DefaultDatePicker } from '../../../Data/Pages/Forms/FormAdvanceData/DataFormAdvanced'
import CountUp from 'react-countup'
import './ReservationList.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
	// const [state.value, onChange] == useState(new Date);
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
										<span className="d-flex" style={{ gap: 5 }}>
											{/* <input
                          className="form-control mb-4"
                          placeholder="Guest Name"
                          
                        /> */}
											{/* <DefaultDatePicker /> */}
											{/* <input className="form-control mb-4 mt-4" placeholder="Check in" /> */}
											<input
												className="form-control mb-4 mt-4"
												type="date"
												id="start"
												name="trip-start"
												value="2018-07-22"
												min="2018-01-01"
												max="2018-12-31"
											/>
											{/* <DatePicker className="form-control mb-4 mt-4" /> */}
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
										</span>
									</div>
								</Col>
								<Col lg={3}>
									<Row className="days-column">
										{/* <Col lg={2}>
                        <DefaultDatePicker />
                      </Col> */}
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
									<Row className="days-column" style={{ marginTop: 5 }}>
										<div className="coldays">
											<i className="fa fa-refresh" style={{ color: 'black' }}></i>
										</div>
										<div className="coldays">
											<p style={{ marginBottom: 0 }}>Options</p>
										</div>
										<div className="coldays">
											<p style={{ marginBottom: 0 }}>UnAssigned(0)</p>
										</div>
									</Row>
								</Col>
							</Row>
							<Row style={{ marginTop: 30 }}>
								<Col sm={2}>
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
									<p style={{ textAlign: 'center' }}>Reserved</p>
								</Col>
								<Col sm={2}>
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
									<p style={{ textAlign: 'center' }}>Confirmed</p>
								</Col>
								<Col sm={2}>
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
									<p style={{ textAlign: 'center' }}>Guranteed</p>
								</Col>
								<Col sm={2}>
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
									<p style={{ textAlign: 'center' }}>In House</p>
								</Col>
								<Col sm={2}>
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
									<p style={{ textAlign: 'center' }}>Departed</p>
								</Col>
								<Col sm={2}>
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
									<p style={{ textAlign: 'center' }}>On Hold</p>
								</Col>
							</Row>

							<Row style={{ marginTop: 20 }}>
								<Col sm={2} style={{ backgroundColor: 'lightgrey' }}>
									<Row>
										<div style={{ backgroundColor: 'blueviolet', height: 35 }}>
											{/* <p>{new Date()}</p> */}
											<input
												type="date"
												id="start"
												name="trip-start"
												value="2018-07-22"
												min="2018-01-01"
												max="2018-12-31"
											></input>
										</div>
									</Row>

									<Row>
										<div style={{ marginTop: 20, paddingLeft: 5, borderBottom: '1px solid grey' }}>
											<p style={{ fontSize: '1.2rem', marginBottom: 5, fontWeight: 'bold' }}>Rooms</p>
										</div>
									</Row>
									<Row className="roomname">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5, color: 'white' }}>STDQ</p>
										</div>
									</Row>
									<Row className="roomnumber">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5 }}>R-098</p>
										</div>
									</Row>
									<Row className="roomnumber">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5 }}>R-999</p>
										</div>
									</Row>
									<Row className="roomnumber">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5 }}>R-342</p>
										</div>
									</Row>
									<Row className="roomnumber">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5 }}>R-444</p>
										</div>
									</Row>
								</Col>

								<Col sm={10}>
									<div style={{ height: '343px', overflowY: 'scroll' }}>
										<FullCalendar
											plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
											headerToolbar={{
												left: 'prev,next today',
												center: 'title',
												right: 'dayGridMonth,timeGridWeek,timeGridDay',
											}}
											initialView="dayGridMonth"
											editable={true}
											selectable={true}
											selectMirror={true}
											dayMaxEvents={true}
											weekends={this.state.weekendsVisible}
											initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
											// select={this.handleDateSelect}
											// eventContent={renderEventContent} // custom render function
											// eventClick={this.handleEventClick}
											// eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
											/* you can update a remote database when these fire:
            
            */
											eventAdd={function () {}}
											eventChange={function () {}}
											eventRemove={function () {}}
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

							<Row style={{ marginTop: 20 }}>
								<Col sm={2} style={{ backgroundColor: 'lightgrey' }}>
									<Row>
										<div style={{ backgroundColor: 'blueviolet', height: 35 }}>
											<input
												type="date"
												id="start"
												name="trip-start"
												value="2018-07-22"
												min="2018-01-01"
												max="2018-12-31"
											/>
										</div>
									</Row>

									<Row>
										<div style={{ marginTop: 20, paddingLeft: 5, borderBottom: '1px solid grey' }}>
											<p style={{ fontSize: '1.2rem', marginBottom: 5, fontWeight: 'bold' }}>Rooms</p>
										</div>
									</Row>
									<Row className="roomname">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5, color: 'white' }}>Ocean</p>
										</div>
									</Row>
									<Row className="roomnumber">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5 }}>R-123</p>
										</div>
									</Row>
									<Row className="roomnumber">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5 }}>R-456</p>
										</div>
									</Row>
									<Row className="roomnumber">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5 }}>R-334</p>
										</div>
									</Row>
									<Row className="roomnumber">
										<div style={{ marginTop: 10, paddingLeft: 5 }}>
											<p style={{ fontSize: '1rem', marginBottom: 5 }}>R-666</p>
										</div>
									</Row>
								</Col>

								<Col sm={10}>
									<div style={{ height: '343px', overflowY: 'scroll' }}>
										<FullCalendar
											plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
											headerToolbar={{
												left: 'prev,next today',
												center: 'title',
												right: 'dayGridMonth,timeGridWeek,timeGridDay',
											}}
											initialView="dayGridMonth"
											editable={true}
											selectable={true}
											selectMirror={true}
											dayMaxEvents={true}
											weekends={this.state.weekendsVisible}
											initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
											// select={this.handleDateSelect}
											// eventContent={renderEventContent} // custom render function
											// eventClick={this.handleEventClick}
											// eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
											/* you can update a remote database when these fire:
            
            */
											eventAdd={function () {}}
											eventChange={function () {}}
											eventRemove={function () {}}
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
													<td>1</td>
													<td>2</td>
													<td>3</td>
													<td>4</td>
													<td>6</td>
													<td>5</td>
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
						</Card.Body>
					</Card>
				</div>
			</div>
		)
	}
}
export default DefaultCalender
