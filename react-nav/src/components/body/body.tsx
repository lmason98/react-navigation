// React imports
import React, { FunctionComponent } from 'react';
// MUI imports
import {Box, Typography} from '@mui/material/';
// Custom imports
import Dashboard from '../dashboard/dashboard';
import Copyright from '../copyright/copyright';

const marginTop: string = '64px';  // from min height of MUI app bar

/**
 * Body comp
 * @constructor
 */
const Body: FunctionComponent = () => {


  return (
    <Box>
      <Typography variant='h3'>Body</Typography>
      <Copyright />
    </Box>
  );
}

export default Body;
