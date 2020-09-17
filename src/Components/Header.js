import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homepage: { href: '/', name: 'Grobund Fotografi', isActive: true },
            navlinks: [
                { href: '/om-grobund', name: 'Om Grobund', classNames: 'mr-5 text-white' },
                { href: '/produkter', name: 'Produkter', classNames: 'mr-5 text-white' },
                { href: '/priser', name: 'Priser', classNames: 'mr-5 text-white' },
                { href: '/referencer', name: 'Referencer', classNames: 'mr-5 text-white' }
            ]
        };
    }
    render() {
        return (
            <div>
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand href={this.state.homepage.href}>{this.state.homepage.name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto navbar-top">
                            {this.state.navlinks.map((navlink, index) => (
                                <Nav.Link key={navlink.name} className={navlink.classNames} href={navlink.href}>
                                    {navlink.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Button href="/kontakt" variant="outline-warning ">
                            Kontakt!
                        </Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
