import React, { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
// import Switcher from '../Layouts/Switcher/Switcher';


interface AuthenticationPageProps { }

const AuthenticationPage: FC<AuthenticationPageProps> = () => (
<Fragment>
<div className='login-img'>
  <div className="page">
    <Outlet />
  </div>
  </div>
  

</Fragment>
);
export default AuthenticationPage;