// Included
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function HeaderNav() {
  return (
    <div className="Header-nav">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link tag={Link} to="/content2">Content 2</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <Nav.Link tag={Link} to="/content3">Content 3</Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link tag={Link} to="/content4">Content 4</Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNav;
