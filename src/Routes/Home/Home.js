import React from 'react';
import loadable from '@loadable/component';
import Logo from './../../Assets/Logo/Logo02-cropped.png';
import Button from 'react-bootstrap/Button';

import './Home.scss';

import { Link } from 'react-router-dom';

const Helmet = loadable(() => import('./../../Components/Helmet'));
const PhotoCarousel = loadable(() => import('./../../Components/PhotoCarousel'));

const Home = () => {
    return (
        <main className="home">
            <PhotoCarousel />
            <div className="logo">
                <img className="logo-image" src={Logo} alt="Grobund Fotografi Logo" />
                <Button as={Link} variant="outline-success" className="home-buttons" to="/priser">
                    Priser
                </Button>
                <Button as={Link} variant="outline-success" className="home-buttons" to="/kontakt">
                    Kontakt
                </Button>
            </div>
            <Helmet
                title="Grobund Fotografi - Fotograf i Ryomgård"
                description="Stemningsfotograf bosat på Djursland. Mit mål er at fange de oprigtige smil og det øjeblik som mine kunder er i, uanset alder og begivenhed."
            />
        </main>
    );
};

export default Home;
