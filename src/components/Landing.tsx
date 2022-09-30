import React, { FC, Fragment } from 'react';
import BacktoTop from '../Layouts/Backtotop/Backtotop';
import LandingPage from './LandingPage/LandingPage';
import LandingSwitcher from './../Layouts/Switcher/LandingSwitcher';


interface LandingProps { }

const Landing: FC<LandingProps> = () => {
  
  document.querySelector("body")?.classList.add('landing-page' ,'horizontal');
  document.querySelector("body")?.classList.remove( 'sidebar-mini', 'transparent-mode', 'layout-boxed');
  
  return(
    <Fragment>
    <LandingSwitcher />
   <LandingPage/>
   <BacktoTop />
  </Fragment>
  )
  };

export default Landing;
