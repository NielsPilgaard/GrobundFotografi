import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './Footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="navbar-bottom navbar navbar-expand navbar-light">
                    <div className="logo-container">
                        <IconContext.Provider value={{ size: '2em' }}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/Grobund.Fotografi"
                                title="Facebook"
                            >
                                <AiOutlineFacebook />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/grobund.fotografi/"
                                title="Instagram"
                            >
                                <AiOutlineInstagram />
                            </a>
                        </IconContext.Provider>
                    </div>
                </footer>
            </>
        );
    }
}
