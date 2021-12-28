import React, { FunctionComponent } from 'react';

import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';

/**
 * Main comp
 * @constructor
 */
const Main: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default Main;
