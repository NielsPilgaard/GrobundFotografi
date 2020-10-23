import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homepage: { href: '/', name: 'Grobund Fotografi', active: true },
            navlinks: [
                { href: '/om-grobund', name: 'Om Grobund', active: false },
                // { href: '/produkter', name: 'Produkter', active: false },
                { href: '/priser', name: 'Priser', active: false },
                { href: '/referencer', name: 'Referencer', active: false }
            ]
        };
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}
