// Included
import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavItem, NavDropdown } from 'react-bootstrap';

function HeaderNav() {
  return (
    <div className="Header-nav">
      <Navbar style={{backgroundColor: '#444d58'}} variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">Home</Link>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-collapse">
            <Nav className="mr-auto">
              <NavItem href="/content2"><Nav.Link as={Link} to="/content2">Content 2</Nav.Link></NavItem>
              <Link className="nav-link" to="/content2">Content 2</Link>
              <Link className="nav-link" to="/content3">Content 3</Link>
              <Link className="nav-link" to="/content4">Content 4</Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <Link className="dropdown-item" to="/content2">Content 2</Link>
                <Link className="dropdown-item" to="/content3">Content 3</Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/content4">Content 4</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNav;
