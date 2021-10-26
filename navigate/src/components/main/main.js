// Included
import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Created
import './main.css';
import HeaderNav from '../header-nav/HeaderNav.js';
import SideNav from '../side-nav/SideNav.js';
import {Home, Content2, Content3, Content4} from '../content/Content.js';

function Body() {
  const [showHeader, setShowHeader] = useState(true);

  const switchNav = <ButtonGroup className="ml-5 pr-5 pt-5 pb-5">
      <Button variant="secondary" className="ml-5" onClick={() => setShowHeader(!showHeader)}>Switch navigation</Button>
    </ButtonGroup>;

  return (
    <div className="main-div">
      {showHeader ? <HeaderNav /> : <SideNav />}
      <Router>
        <div className="content-div">
          <Switch>
            <Route path="/"><Home btn={switchNav} /></Route>
            <Route path="/content2"><Content2 /></Route>
            <Route path="/content3"><Content3 /></Route>
            <Route path="/content4"><Content4 /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Body;
