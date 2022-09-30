import React, { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';



interface CustomPageProps { }

const CustomPage: FC<CustomPageProps> = () => (
  <Fragment>
    <div className="">
      <Outlet />
    </div>
  </Fragment>
);

export default CustomPage;
