// Included
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Created
import './main.css';
import HeaderNav from '../header-nav/HeaderNav.js';
import SideNav from '../side-nav/SideNav.js';
import {Footer, SideFooter} from '../footer/footer.js';
import {Home, Content2, Content3, Content4} from '../content/Content.js';

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
            <Route exact path="/">
              <Home toggleNav={switchNav} />
            </Route>
            <Route path="/home">
              <Home toggleNav={switchNav} />
            </Route>
            <Route path="/content2">
              <Content2 />
            </Route>
            <Route path="/content3">
              <Content3 />
            </Route>
            <Route path="/content4">
              <Content4 />
            </Route>
          </Switch>
        </Router>
      </div>
      {showHeader ? <Footer /> : <SideFooter />}
    </div>
  );
}

export default Body;
