import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import './header.css';
import logo from '../../logo.png';

/*
* Name: Header
* Description: App header
* */
const Header: FunctionComponent = () => {

  // Same as min height of the header in ./header.css
  const imageSize: number = 50;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-div" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <img
              src={logo}
              width={imageSize+5}
              height={imageSize}
              className="d-line-block align-top"
              alt="RotoEdgePro logo"
            />
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Molding" className="link">
            <NavDropdown.Item href="/blah">stuff</NavDropdown.Item>
            <NavDropdown.Item href="/blah">stuff</NavDropdown.Item>
            <NavDropdown.Item href="/blah">stuff</NavDropdown.Item>
            <NavDropdown.Item href="/blah">stuff</NavDropdown.Item>
            <NavDropdown.Item href="/blah">stuff</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/blah">stuff2</NavDropdown.Item>
          </NavDropdown>
          <Link className="nav-link link" to="/molding">Molding</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
