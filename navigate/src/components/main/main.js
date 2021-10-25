import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import './main.css';
import '../header-nav/headerNav.js';
import '../side-nav/sideNav.js';

function Body() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="main-div">
      <h1>Hello World!</h1>
      {showHeader ? <headerNav /> : <sideNav />}
      <ButtonGroup>
        <Button variant="secondary" onClick={() => setShowHeader(!showHeader)}>Switch navigation</Button>
      </ButtonGroup>
    </div>
  );
}

export default Body;
