import React, { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
// import Switcher from '../Layouts/Switcher/Switcher';

interface AuthenticationPageProps {}

const AuthenticationPage: FC<AuthenticationPageProps> = () => {
  console.log("autheitcationpage");
  return (
    <Fragment>
      <div style={{ border: "2px solid red" }} className="login-img">
        <div className="page">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};
export default AuthenticationPage;
