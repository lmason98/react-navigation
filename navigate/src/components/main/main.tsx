import React, { FunctionComponent } from 'react';
import './main.css';

import Body from '../body/body';
import Footer from '../footer/footer';
import Header from '../header/header';

/*
* Name: Main
* Description: App entrypoint
* */
const Main: FunctionComponent = () => {
  return (
    <div className="main-div">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Main;
