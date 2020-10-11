import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import './Header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homepage: { href: '/', name: 'Grobund Fotografi' },
            navlinks: [
                { href: '/om-grobund', name: 'Om Grobund' },
                // { href: '/produkter', name: 'Produkter' },
                { href: '/priser', name: 'Priser' },
                { href: '/referencer', name: 'Referencer' }
            ],
            navExpanded: false
        };
    }

    render() {
        return (
            <div>
                <Navbar expand="md" className="navbar-top justify-content-left">
                    <Navbar.Brand className={this.state.homepage.classNames} href={this.state.homepage.href}>
                        {this.state.homepage.name}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            {this.state.navlinks.map((navlink, index) => (
                                <Nav.Link key={navlink.name} href={navlink.href}>
                                    {navlink.name}
                                </Nav.Link>
                            ))}
                            <NavDropdown title="Gallerier" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/galleri-børn">Børn</NavDropdown.Item>
                                <NavDropdown.Item href="/galleri-bryllup">Bryllup</NavDropdown.Item>
                                <NavDropdown.Item href="/galleri-natur">Natur</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button href="/kontakt" variant="outline-success ml-auto">
                            Kontakt!
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
