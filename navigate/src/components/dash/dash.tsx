import React, { FunctionComponent } from "react";
import { Card } from 'react-bootstrap';

import './dash.css';

/*
* Name: Dash
* Description: App dash
* */
const Dash: FunctionComponent = () => {
  return (
    <Card className="dash-div">
      <Card.Header><h1>Dash content</h1></Card.Header>
      <Card.Body>
        <p>Hello world!</p>
      </Card.Body>
    </Card>
  );
}

export default Dash;
