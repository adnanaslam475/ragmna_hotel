import React, { useEffect, useState } from "react";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CenterDanger } from "../../../Redux/Services/toaster-service";
import { useLogInMutation } from "./firebaseAuthApi";
import { authLogin, useUser } from "./firebaseAuthSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/Store";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const SignIn = () => {
  const [values, setValues] = useState<any>({
    password: "",
    showPassword: false,
  });
  const dispatch = useDispatch<AppDispatch>();
  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  // const [logIn, Result] = useLogInMutation();
  const { user } = useUser();
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };

  const OnLogin: any = async (e) => {
    setLoader(true);
    try {
      await dispatch(authLogin(data)).unwrap();
      setLoader(false);
      RouteChange();
      // await logIn(data);
    } catch (err: any) {
      setLoader(false);
      console.log(err, "errrr");
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="login-img">
        <div className="page">
          {/* <!-- CONTAINER OPEN --> */}
          <div className="col-login mx-auto mt-7">
            <div className="text-center">
              <img
                src={require("../../../assets/images/brand/logo-white.png")}
                className="header-brand-img"
                alt=""
              />
            </div>
          </div>
          <div className="container-login100">
            <div className="wrap-login100 p-6">
              <form className="login100-form validate-form">
                <span className="login100-form-title pb-5"> Login</span>
                <div>
                  {err && <Alert variant="danger">{err}</Alert>}
                  <div className="wrap-input100 validate-input input-group">
                    <Link
                      to="#"
                      className="input-group-text bg-white text-muted"
                    >
                      <i
                        className="zmdi zmdi-email text-muted"
                        aria-hidden="true"
                      ></i>
                    </Link>
                    <Form.Control
                      className="input100 border-start-0 form-control ms-0"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={changeHandler}
                      required
                    />
                  </div>

                  <InputGroup
                    className="wrap-input100 validate-input"
                    id="Password-toggle"
                  >
                    <InputGroup.Text
                      id="basic-addon2"
                      className="bg-white text-muted"
                    >
                      <Link to="#">
                      {values.showPassword ?  <i
                          className="zmdi zmdi-eye text-default"
                          aria-hidden="true"
                          onClick={handleClickShowPassword}
                        ></i> :  <i
                          className="zmdi zmdi-eye-off text-default"
                          aria-hidden="true"
                          onClick={handleClickShowPassword}
                        ></i>}
                       
                      </Link>
                    </InputGroup.Text>
                    <Form.Control
                     type={values.showPassword ? "text" : "password"}
                      className="input100 border-start-0 ms-0"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={changeHandler}
                      required
                    />
                  </InputGroup>
                  <div className="container-login100-form-btn">

                    <Link
                      to="#"
                      onClick={OnLogin}
                      type="submit"
                      className="login100-form-btn btn-primary"
                    >
                      Login
                      {loading ? (
                        <span
                          role="status"
                          aria-hidden="true"
                          className="spinner-border spinner-border-sm ms-2"
                        ></span>
                      ) : (
                        ""
                      )}
                    </Link>
                  </div>
                  <div className="text-center pt-3"></div>
                  <label className="login-social-icon">
                    <span>Login with Social</span>
                  </label>
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
                  <Link
                    to={`/SignUp`}
                    className="d-flex justify-content-center mt-4"
                  >
                    Create a new account ?
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* // <!-- CONTAINER CLOSED --> */}
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
