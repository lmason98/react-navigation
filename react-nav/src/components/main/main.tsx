// React imports
import React, { FunctionComponent, useState } from 'react';
// MUI imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Custom imports
import Login from '../login/login';
import Header from '../header/header';

const theme = createTheme();
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//   }
// });

/**
 * Main comp
 * @constructor
 */
const Main: FunctionComponent = () => {
  const [authed, setAuthed] = useState<boolean>(false);

  if (authed)  // if user is authed, return normal content
    return (
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  else  // otherwise return Login page
    return <Login onLoginSuccess={() => setAuthed(true)} />;
}

export default Main;
