// Included
import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function HeaderNav() {
  return (
    <div className="Header-nav">
      <Navbar bg="dark" variant="dark">
        <BrowserRouter>
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-collapse">
              <Nav className="mr-auto">
                <Nav.Link href="/content2"></Nav.Link>
                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/content3">Content 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/content4">Content 4</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </BrowserRouter>
      </Navbar>
    </div>
  );
}

export default HeaderNav;
