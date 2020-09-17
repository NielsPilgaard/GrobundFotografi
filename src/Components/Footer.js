import React from 'react';
import { Navbar } from 'react-bootstrap';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <div>
            <Navbar className="navbar-bottom">
                <div className="mx-auto mt-1 text-white">
                    {/* <p className="mr-5">
                        <span role="img" aria-label="Copyright" className="mr-1">
                            ©
                        </span>
                        Grobund Fotografi 2020
                    </p>
                    <a href="mailto:mail@grobundfotografi.dk" className="mr-5">
                        mail@grobundfotografi.dk
                    </a>
                    <p className="mr-5">8550 Ryomgård</p> */}
                    <IconContext.Provider value={{ color: 'white', size: '2em' }}>
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
};

export default Footer;
