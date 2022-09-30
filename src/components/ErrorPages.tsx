import React, { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import DataSwitcher from '../Data/Authenticatepage/DataSwitcher';

interface ErrorPagesProps { }

const ErrorPages: FC<ErrorPagesProps> = () => {

document.querySelector("body")?.classList.add( 'login-img' ,'ltr' ,'sidebar-mini');
    return(

    <Fragment>
        <div>
            <DataSwitcher/>
            
            <Outlet />
        </div>
    </Fragment>
);}

export default ErrorPages;