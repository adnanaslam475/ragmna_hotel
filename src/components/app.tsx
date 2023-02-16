import React, { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layouts/Header/Header';
import Rightside from '../Layouts/Rightside/Rightside';
import Switcher from './../Layouts/Switcher/Switcher';
import * as  SwitcherData from "../Data/Pages/SwitcherData/SwitcherData"
import BacktoTop from '../Layouts/Backtotop/Backtotop';
import { Sidebar } from '../Layouts/Sidebar/Sidebar';
import "react-phone-input-2/lib/style.css";

interface AppProps { }

const App: FC<AppProps> = () => {
  document.querySelector("body")?.classList.remove('login-img', 'landing-page', 'horizontal');
  document.querySelector("body")?.classList.add('app', 'sidebar-mini', 'ltr', 'light-mode');

  return (

    <Fragment>
      <div className='horizonstalMenucontainer' style={{ border: '1px solid red' }} >
        <Switcher />
        <div style={{ border: '1px solid red' }} className="page">
          <div className="page-main">
            <Header />
            <div className="sticky" >
              <Sidebar />
            </div>
            <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
            <div className="main-content app-content mt-0" onClick={() => SwitcherData.responsiveSidebarclose()}>
              <div className="side-app">
                <div className="main-container container-fluid">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Rightside />
        <BacktoTop />
      </div>
    </Fragment>
  );
}

export default App;
