import React from 'react';
import { Image } from 'react-bootstrap';
import loadable from '@loadable/component';
import Logo from './../../Assets/Logo/Logo02-cropped.png';

import './Home.scss';

const PhotoCarousel = loadable(() => import('../../Components/PhotoCarousel'));
const Helmet = loadable(() => import('./../../Components/Helmet'));

const Home = () => {
    return (
        <main className="home">
            <div className="carousel-container fade-in-5">
                <PhotoCarousel />
            </div>
            <div className="logo fade-in-5">
                <Image fluid src={Logo} alt="Logo" />
            </div>
            <Helmet
                title="Grobund Fotografi"
                description="Fotograf bosat på Djursland, med en passion for natur-, stemnings-, og børnefotografi."
            />
        </main>
    );
};

export default Home;
