import React, { Component } from 'react';
import Countdown from 'react-countdown';
import { Row, Col } from 'react-bootstrap';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

// Time Counting From 0


export class DataCount extends Component {

  
 render() {
  return (
    <Timer className="h3" active duration={180000}>
      <Timecode className='text-break' />
    </Timer>
  );
}
}



// TimeMinutesCounter

export class TimeMinutesCounter extends React.Component {
  render() {
    return (

      <h2><Countdown className='text-break' date={Date.now() + 1440000} /></h2>

    )
  }
};
// Time Counting From 60 to 20

export class TimeCounting extends React.Component {
  render() {
    return (

      <h2><Countdown className='text-break' date={Date.now() + 60000} /></h2>

    )
  }
};


// Time Counting days Limit **********************

// Random component
const AfterCompletion = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterCompletion />;
  } else {
    // Render a countdown
    return (
      <span>
        {days} Days {hours} Hours:{minutes} Minutes:{seconds} Seconds
      </span>
    );
  }
};
export class CountDaysLimit extends React.Component {
  render() {

    return (

      <Countdown date={Date.now() + 259200000} renderer={renderer} />


    )
  }
};

// Time Counting days Limit **********************

//  Day Counter  *******************

// Time Counting days Limit **********************

// Random component
const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />

  } else {
    // Render a countdown
    return (
      <span>
        <Row className="count-down">
          <Col lg={3} className="countdown">
            <div className="countdown bg-primary-gradient p-3 mb-1">
              <span className="days text-white">{days}</span>
              <span className="text-white">Days</span>
            </div>
          </Col>
          <Col lg={3} className="countdown">
            <div className="countdown bg-success-gradient p-3 mb-1">
              <span className="hours text-white">{hours}</span>
              <span className="text-white">Hours</span>
            </div>
          </Col>

          <Col lg={3} className="countdown">
            <div className="countdown bg-warning-gradient p-3 mb-1">
              <span className="minutes text-white">{minutes}</span>
              <span className="text-white">Minutes</span>
            </div>
          </Col>
          <Col lg={3} className="countdown">
            <div className="countdown bg-info-gradient p-3 mb-1">
              <span className="seconds text-white">{seconds}</span>
              <span className="text-white">Seconds</span>
            </div>
          </Col>
        </Row>
      </span>
    );
  }
};
export class DayCounter extends React.Component {
  render() {
    return (
      <Countdown date={Date.now() + 3088800000} renderer={rendering} />

    );
  }
};




