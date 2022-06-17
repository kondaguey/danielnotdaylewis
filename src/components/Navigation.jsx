import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Navigation() {

  return (
  <div className="header">

    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/developer">/developer</Nav.Link>
            <Nav.Link href="/copywriter">/copywriter</Nav.Link>
            <NavDropdown title="Drop Anchor ⚓️" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">This link will go somewhere Special Soon</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default Navigation;