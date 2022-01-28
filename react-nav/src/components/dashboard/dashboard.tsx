import React, { FunctionComponent } from 'react';

import { Typography } from '@mui/material/';

const marginTop: string = '64px';  // from min height of MUI app bar

/**
 * Body comp
 * @constructor
 */
const Dashboard: FunctionComponent = () => {
  return (
    <div style={{marginTop: marginTop}}>
      <Typography variant='h3'>Dashboard</Typography>
    </div>
  );
}

export default Body;
