import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/firebase"
import { Alert, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { useAppSelector } from "../../../Redux/hooks";
import { selectFirebaseAuthList, useSignupResponse } from "./firebaseAuthSlice";
import { useSignUpMutation } from "./firebaseAuthApi";
import { SignupRequestBody } from "./types";
import './firebaseAuth.scss'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
const SignUp = () => {
  const [err, setError] = useState("");
  const [Loader, setLoader] = useState(false);
  const [signUpParams, setSignUpParams] = React.useState<SignupRequestBody>({
    "email": "",
    "password": "",
    "name": "",
    "phoneNumber":"" ,
    "countryCode": "",
  })
  const { name, email, password,phoneNumber ,countryCode} = signUpParams;
  const changeHandler = (e) => {
    setSignUpParams({ ...signUpParams, [e.target.name]: e.target.value })
  }
  const phoneChange = (e, phone) => {
    setSignUpParams({...signUpParams,countryCode:phone.dialCode,phoneNumber:e})
  }
  const [signUp,Result] = useSignUpMutation()
  const { signUpResponse } = useSignupResponse();

  const OnSignup = async (e) => {
    try {
      setLoader(true)
      let payload: any = Object.assign({},signUpParams);
      payload['phoneNumber'] = parseInt(payload['phoneNumber'].slice(2));
      payload['countryCode'] = parseInt(payload['countryCode']);
      await signUp(payload)
      if (signUpResponse.email) {
        Result.reset();
        setLoader(false)
        RouteChange()
      }
    }
    catch (err: any) {
      setLoader(false)
      console.log(err, 'err');
    }
    e.preventDefault();
  }
  //   auth.createUserWithEmailAndPassword(email, password).then(
  //     user =>{console.log(user); RouteChange(); setLoader(false)}).catch(err => { console.log(err);  setError(err.message); setLoader(false) })
  // }
  let navigate = useNavigate(); 
  const RouteChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }



  return (
    <div>
      <div className='login-img'>
        <div className="page">
          {/* <!-- CONTAINER OPEN --> */}
          <div className="col-login mx-auto mt-7">
            <div className="text-center">
              <img src={require("../../../assets/images/brand/logo-white.png")} className="header-brand-img m-0" alt="" />
            </div>
          </div>
          <div className="container-login100">
            <div className="wrap-login100 p-6">
              <Form className="login100-form validate-form">
                <span className="login100-form-title">
                  Registration
                </span>
                <div className="wrap-input100 validate-input input-group">
                  {err && <Alert variant="danger">{err}</Alert>}
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="mdi mdi-account" aria-hidden="true"></i>
                  </Link>
                  <Form.Control required className="input100 border-start-0 ms-0 form-control" type="text" name="name" placeholder="Name" value={name}
                    onChange={changeHandler} />
                </div>
                <div className="wrap-input100 validate-input input-group">
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="zmdi zmdi-email" aria-hidden="true"></i>
                  </Link>
                  <Form.Control required className="input100 border-start-0 ms-0 form-control" type="email" name="email" placeholder="Email" value={email}
                    onChange={changeHandler} />
                </div>
                <InputGroup className="wrap-input100 validate-input" id="Password-toggle">
                  <InputGroup.Text id="basic-addon2" className="bg-white text-muted">
                    <Link to='#'><i className="zmdi zmdi-eye text-default" aria-hidden="true" ></i></Link>
                  </InputGroup.Text>
                  <Form.Control className="input100 border-start-0 ms-0" type='password' name="password" placeholder="Password" value={password}
                    onChange={changeHandler}
                    required />
                </InputGroup>
                <div className="wrap-input100 validate-input input-group">
                  <div className='CountrySelector registration'>
                    <div>
                      <PhoneInput
                        country={countryCode}
                        value={phoneNumber}
                        onChange={(e,phone) => phoneChange(e,phone)}
                      />
                    </div>
                  </div>
                </div>
                <label className="custom-control custom-checkbox mt-4">
                  <input type="checkbox" required className="custom-control-input" />
                  <span className="custom-control-label">Agree the <Link to={`/pages/extension/term`}>terms and policy</Link></span>
                </label>
                <div className="container-login100-form-btn">
              {/* <Button className='mt-3 login100-form-btn btn-primary' onClick={OnSignup} type="submit">Register{Loader ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}</Button> */}

                  <Link to='#' onClick={OnSignup} type="submit" className="login100-form-btn btn-primary"> Register{Loader ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}</Link>
                </div>
                <div className="text-center pt-3">

                </div>
                <label className="login-social-icon"><span>Register with Social</span></label>
                <div className="d-flex justify-content-center">
                  <Link to="#">
                    <div className="social-login me-4 text-center">
                      <i className="fa fa-google"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="social-login me-4 text-center">
                      <i className="fa fa-facebook"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="social-login text-center">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </Link>
                </div>
                <Link to={`/login`} className='d-flex justify-content-center mt-4'>
                  Alerady have an account ?
                </Link>
              </Form>
            </div>
          </div>
          {/* <!-- CONTAINER CLOSED --> */}
        </div>
      </div>
    </div>
  );
}
SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
