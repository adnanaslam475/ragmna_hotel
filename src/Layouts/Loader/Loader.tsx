import { FC } from 'react';

interface LoaderProps { }

const Loader: FC<LoaderProps> = () => (
  <div >
    <div id="global-loader">
      <img src={require("../../assets/images/loader.svg").default} className="loader-img" alt="Loading...." />
    </div>
  </div>
);

export default Loader;
