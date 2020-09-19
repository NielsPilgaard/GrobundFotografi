import React from 'react';
import { Navbar } from 'react-bootstrap';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './Footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <Navbar variant="light" className="navbar-bottom">
                    <div className="logo-container">
                        <IconContext.Provider value={{ color: 'black', size: '2em' }}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/Grobund.Fotografi"
                                className="mx-3"
                            >
                                <AiOutlineFacebook />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/grobund.fotografi/"
                                className="mx-3"
                            >
                                <AiOutlineInstagram />
                            </a>
                        </IconContext.Provider>
                    </div>
                </Navbar>
            </div>
        );
    }
}
