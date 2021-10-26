// Included
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Created
import './Main.css';
import HeaderNav from '../header-nav/HeaderNav.js';
import SideNav from '../side-nav/SideNav.js';
import {Footer, SideFooter} from '../footer/Footer.js';
import {HomeWR, Content2WR, Content3WR, Content4WR} from '../content/Content.js';

function Body() {
  const [showHeader, setShowHeader] = useState(true);

  const switchNav = <Button variant="primary" className="ml-5" onClick={() => setShowHeader(!showHeader)}>Switch navigation</Button>;

  console.log('switch nav :', switchNav)

  return (
    <div className="main-div">
      {showHeader ? <HeaderNav /> : <SideNav />}
      <div className="content-div">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <HomeWR toggleNav={switchNav} />} />
            <Route path="/content2" render={() => <Content2WR />} />
            <Route path="/content3" render={() => <Content3WR />} />
            <Route path="/content4" render={() => <Content4WR />} />
          </Switch>
        </Router>
      </div>
      {showHeader ? <Footer /> : <SideFooter />}
    </div>
  );
}

export default Body;
