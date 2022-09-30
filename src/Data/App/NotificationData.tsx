import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

// Alerts Notifications


export function Success(){
  const Toastslidewarn = () =>
    toast.success(
      <p className="text-white tx-16 mb-0">Success: Well done Details Submitted Successfully</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored'
      }
    );
  return (
    <div>
      <Button className='me-2' variant='success' onClick={Toastslidewarn}>Default</Button>
      <ToastContainer />
    </div>
  );
}

export function Secondary(){
  const Toastslidewarn = () =>
    toast.error(
      <p className="text-white tx-16 mb-0">Oops! An Error Occurred</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
        
      }
    );

  return (
    <div>
      <Button className='me-2' variant='secondary' onClick={Toastslidewarn}>Center</Button>
      
    </div>
  );
}

export function LeftNotifier(){
  const Toastslidewarn = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Warning: Something Went Wrong</p>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
    );

  return (
    <div>
      <Button className='me-2' variant='warning' onClick={Toastslidewarn}>Left</Button>
     
    </div>
  );
}

export function CenterInfo(){
  const Toastslidewarn = () =>
    toast.info(
      <p className="text-white tx-16 mb-0">Info: Some info here.</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
    );

  return (
    <div>
      <Button className='me-2' variant='info' onClick={Toastslidewarn}>info</Button>
     
    </div>
  );
}

export function CenterDanger(){
  const Toastslidewarn = () =>
    toast.error(
      <p className="text-white tx-16 mb-0">Error: This error will stay here until you click it.</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
    );

  return (
    <div>
      <Button className='me-2' variant='danger' onClick={Toastslidewarn}>Danger</Button>
    
    </div>
  );
}

export function Centerwarning(){
  const Toastslidewarn = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Opacity is cool!</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
    );

  return (
    <div>
      <Button className='me-2' variant='warning' onClick={Toastslidewarn}>Warning</Button>
     
    </div>
  );
}

// Side Alerts Notifications

export function SuccessLeft(){
  const Toastslidewarn = () =>
    toast.success(
     
      <p className="text-white tx-16 mb-0"><h3>Notice!</h3>You have 4 notification</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
      
    );

  return (
    <div>
      <Button className='me-2' variant='success' onClick={Toastslidewarn}>Success</Button>
    </div>
  );
}

export function WarningLeft(){
  const Toastslidewarn = () =>
  toast.warn(
    <p className="text-white tx-16 mb-0"><h3>Warning!</h3>read all details carefully</p>,
    {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 2000,
      theme:'colored',
    }
  );

  return (
    <div>
      <Button className='me-2' variant='warning' onClick={Toastslidewarn}>warning</Button>
     
    </div>
  );
}

export function DangerLeft(){
  const Toastslidewarn = () =>
    toast.error(
      <p className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
    );

  return (
    <div>
      <Button className='me-2' variant='danger' onClick={Toastslidewarn}>Danger</Button>
     
    </div>
  );
}

// Gradient Side Alerts Notifications

export function GradientSuccess(){
  const Toastslidewarn = () =>
    toast.success(
      <p className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
    );

  return (
    <div>
      <Button className='me-2' variant="success-gradient" onClick={Toastslidewarn}>Success</Button>
    </div>
  );
}

export function GradientWarning(){
  const Toastslidewarn = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
    );

  return (
    <div>
      <Button className='me-2' variant="warning-gradient" onClick={Toastslidewarn}>Warning</Button>
    </div>
  );
}

export function GradientDanger(){
  const Toastslidewarn = () =>
    toast.error(
      
      <p className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</p>,
      
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme:'colored',
      }
    );
  return (
    <div>
      <Button className='me-2' variant="danger-gradient" onClick={Toastslidewarn}>Danger</Button>
    </div>
  );
}