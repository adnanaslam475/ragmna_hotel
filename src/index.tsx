import React, { Fragment, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Layouts/Loader/Loader';
import "./index.scss"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { Store } from './Redux/Store';
import RoutesMain from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import "react-day-picker/lib/style.css";

const container: HTMLElement | any = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RoutesMain />
      <ToastContainer />
    </Provider>
  </React.StrictMode >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
