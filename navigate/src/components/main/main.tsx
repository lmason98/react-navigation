import React, { FunctionComponent, useState } from 'react';

import './main.css';

import Body from '../body/body';
import Footer from '../footer/footer';
import Header from '../header/header';
import Login from '../login/login';

/*
* Name: Main
* Description: App entrypoint
* */
const Main: FunctionComponent = () => {
  const [authed, setAuthed] = useState<Boolean>(false);

  const content = authed ?
    <>
      <Header />
      <Body />
      <Footer />
    </> : <Login />;

  return (
    <div className="main-div">
      {content}
    </div>
  );
}

export default Main;
