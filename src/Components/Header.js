import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar variant='dark' expand='lg'>
        <Navbar.Brand href='/'>Grobund Fotografi</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/om-grobund'>Om Grobund</Nav.Link>
            <Nav.Link href='/produkter'>Produkter</Nav.Link>
            <Nav.Link href='/priser'>Priser</Nav.Link>
            <Nav.Link href='/referencer'>Referencer</Nav.Link>
          </Nav>
          <Button href='/kontakt' variant='outline-warning '>
            Kontakt!
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
