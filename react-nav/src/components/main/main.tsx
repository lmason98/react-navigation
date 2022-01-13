import React, { FunctionComponent, useState } from 'react';

import Login from '../login/login';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';

/**
 * Main comp
 * @constructor
 */
const Main: FunctionComponent = () => {
  const [authed, setAuthed] = useState<boolean>(false);

  if (authed)  // if user is authed, return normal content
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  else  // otherwise return Login page
    return <Login onLoginSuccess={() => setAuthed(true)} />;
}

export default Main;
