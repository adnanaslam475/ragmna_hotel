import React, { Component } from "react";
import Swal from "sweetalert2";
import { Button } from 'react-bootstrap';
import Media from '../../assets/images/brand/logo-2.png'

// Sample Sweet Alerts 

export class CongratulationAlert extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({
      title: 'Congratulations!',
      text: 'Your message has been succesfully sent',
      allowOutsideClick: false,
      icon: 'success',
    })
  };
  render() {
    return (

      <Button className="mt-2 me-2" variant="success" onClick={this.HandleClick}>Success Alert</Button>

    );
  }
}


export class WarningAlert extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({
      title: 'Alert',
      text: "Waring alert",
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    })
  }

  render() {
    return (

      <Button className="mt-2 me-2" variant="warning" onClick={this.HandleClick}>Warning Alert</Button>
    );
  }
}

export class DangerAlert extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({
      title: 'Alert',
      text: "Danger alert",
      icon: 'error',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    })
  }

  render() {
    return (

      <Button className="mt-2 me-2" variant="danger" onClick={this.HandleClick}>Danger Alert</Button>



    );
  }
}

export class InfoAlert extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({
      title: 'Alert',
      text: "Info alert",
      icon: 'info',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    })
  }

  render() {
    return (

      <Button className="mt-2 me-2 mb-2 mb-md-0" variant="info" onClick={this.HandleClick}>Info Alert</Button>



    );
  }
}

// Forms Sweet-alert

export class SimpleAlert extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({ title: 'Your message', allowOutsideClick: false, })
  }


  render() {
    return (

      <Button className="mt-2 me-2" variant="primary" onClick={this.HandleClick}>Simple Alert</Button>

    );
  }
}

export class TitlewithAlert extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({ title: 'Your message', text: "Your message", allowOutsideClick: false, })
  }


  render() {
    return (

      <Button className="mt-2 me-2" variant="secondary" onClick={this.HandleClick}>Alert with title</Button>

    );
  }
}


export class ImagewithAlert extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({
      title: 'Your message',
      text: 'Your message',
      imageUrl: Media,
      imageAlt: 'logo',
      allowOutsideClick: false,
    })
  }

  render() {
    return (

      <Button className="mt-2 me-2" variant="info" onClick={this.HandleClick}>Alert with image</Button>

    );
  }
}


export class TimmerwithAlert extends Component {

  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({
      title: 'Your message',
      text: 'Your message(close after 2 seconds)',
      allowOutsideClick: false,
      timer: 2000,
      timerProgressBar: true,
    })
  }

  render() {
    return (

      <Button className="mt-2 me-2" variant="warning" onClick={this.HandleClick}>with timer</Button>

    );
  }
}