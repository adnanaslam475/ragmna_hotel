import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/firebase"
import { Alert, Form, InputGroup } from 'react-bootstrap';
const SignUp = () => {
  const [err, setError] = useState("");
  const [Loader, setLoader] = useState(false);
  const [data, setData] = React.useState({
    fullname: "",
    email: "",
    password: "",
  })
  const { email, password, fullname } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const Signup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      user =>{console.log(user); RouteChange(); setLoader(false)}).catch(err => { console.log(err);  setError(err.message); setLoader(false) })
  }
  let navigate = useNavigate(); 
  const RouteChange = () =>{ 
    let path = `/dashboard`; 
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
              <form className="login100-form validate-form">
                <span className="login100-form-title">
                  Registration
                </span>
                <div className="wrap-input100 validate-input input-group">
                {err && <Alert variant="danger">{err}</Alert>}
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="mdi mdi-account" aria-hidden="true"></i>
                  </Link>
                  <Form.Control className="input100 border-start-0 ms-0 form-control" type="text" name="fullname" placeholder="User name" value={fullname}
                    onChange={changeHandler} />{" "}
                </div>
                <div className="wrap-input100 validate-input input-group">
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="zmdi zmdi-email" aria-hidden="true"></i>
                  </Link>
                  <Form.Control className="input100 border-start-0 ms-0 form-control" type="email" name="email" placeholder="Email" value={email}
                    onChange={changeHandler} />{" "}
                </div>

                <InputGroup className="wrap-input100 validate-input" id="Password-toggle">
                  <InputGroup.Text id="basic-addon2" className="bg-white text-muted">
                    <Link to='#'><i className="zmdi zmdi-eye text-default" aria-hidden="true" ></i></Link>
                  </InputGroup.Text>
                  <Form.Control className="input100 border-start-0 ms-0" type='text' name="password" placeholder="Password" value={password}
                    onChange={changeHandler}
                    required />{" "}
                </InputGroup>
                <label className="custom-control custom-checkbox mt-4">
                  <input type="checkbox" className="custom-control-input" />
                  <span className="custom-control-label">Agree the <Link to={`/pages/extension/term`}>terms and policy</Link></span>
                </label>
                <div className="container-login100-form-btn">
                  <Link to='#' onClick={Signup} className="login100-form-btn btn-primary"> Register{Loader ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> :""}</Link>
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
                <Link to={`/Authentication/firebaseAuth/login`} className='d-flex justify-content-center mt-4'>
                  Alerady have an account ?
                </Link>
              </form>
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
