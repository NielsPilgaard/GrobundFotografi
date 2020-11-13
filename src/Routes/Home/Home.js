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
                title="Grobund Fotografi"
                description="Fotograf bosat i Ryomgård på Djursland, med en passion for natur-, stemnings-, og børnefotografi."
            />
        </main>
    );
};

export default Home;
