import React, { FunctionComponent } from 'react';

import { Typography as Text, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

/**
 * Header comp
 * @constructor
 */
const Header: FunctionComponent = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='medium' edge='start' color='inherit' aria-label='menu' title='Display menu'>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
