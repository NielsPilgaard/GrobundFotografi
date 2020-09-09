import React from "react";
import "./Navigation.scss";
import { Route, Switch } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import About from "../Routes/om-grobund/About.js";
import Products from "../Routes/produkter/Products.js";
import Prices from "../Routes/priser/Prices.js";
import Contact from "../Routes/kontakt/Contact.js";
import References from "../Routes/referencer/References.js";
import Home from "../Routes/forside/Home.js";

const Navigation = () => {
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
            <Nav.Link href='/kontakt'>Kontakt</Nav.Link>
          </Nav>
          <Button variant='outline-success'>Kontakt!</Button>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/om-grobund' exact />
        <Route component={Products} path='/produkter' exact />
        <Route component={Prices} path='/priser' exact />
        <Route component={References} path='/referencer' exact />
        <Route component={Contact} path='/kontakt' exact />
      </Switch>
    </div>
  );
};

export default Navigation;
