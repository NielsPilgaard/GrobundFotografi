import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homepage: { href: '/', name: 'Grobund Fotografi', isActive: true, classNames: 'mr-5' },
            navlinks: [
                { href: '/om-grobund', name: 'Om Grobund', classNames: 'mr-5' },
                { href: '/produkter', name: 'Produkter', classNames: 'mr-5' },
                { href: '/priser', name: 'Priser', classNames: 'mr-5' },
                { href: '/referencer', name: 'Referencer', classNames: 'mr-5' }
            ]
        };
    }
    render() {
        return (
            <div>
                <Navbar variant="dark" expand="lg" className="navbar-top justify-content-left">
                    <Navbar.Brand className={this.state.homepage.classNames} href={this.state.homepage.href}>
                        {this.state.homepage.name}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            {this.state.navlinks.map((navlink, index) => (
                                <Nav.Link key={navlink.name} className={navlink.classNames} href={navlink.href}>
                                    {navlink.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Button href="/kontakt" variant="outline-warning ml-auto">
                            Kontakt!
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
