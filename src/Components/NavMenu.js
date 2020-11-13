import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';
import './NavMenu.scss';

export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homepage: { href: '/', name: 'Grobund Fotografi', active: true },
            navlinks: [
                { href: '/om-grobund', name: 'Om Grobund' },
                // { href: '/produkter', name: 'Produkter'},
                { href: '/priser', name: 'Priser' },
                { href: '/referencer', name: 'Referencer' }
            ]
        };
    }

    render() {
        return (
            <>
                <Navbar expand="md" className="navbar-top justify-content-left">
                    <Navbar.Brand as={Link} to={this.state.homepage.href}>
                        {this.state.homepage.name}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            {this.state.navlinks.map((navlink) => (
                                <Nav.Link as={Link} to={navlink.href} key={navlink.name}>
                                    {navlink.name}
                                </Nav.Link>
                            ))}
                            <NavDropdown title="Gallerier" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/galleri-børn">
                                    Børn
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/galleri-bryllup">
                                    Bryllup
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/galleri-familie">
                                    Familie
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/galleri-natur">
                                    Natur
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button as={Link} to="/kontakt" variant="outline-success ml-auto">
                            Kontakt!
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
