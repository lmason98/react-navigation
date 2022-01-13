import React, { FunctionComponent, PropsWithChildren } from 'react';
import Typography from '@mui/material/Typography';

/**
 * Copyright comp
 * @constructor
 */
const Copyright: FunctionComponent = () => {

  const year = new Date().getFullYear();
  const text = `Copyright © ${year} RotoEdgePro™, All Rights Reserved.`;

  return <Typography variant='body2' color='text.secondary' align='center'>{text}</Typography>;
}

export default Copyright;
