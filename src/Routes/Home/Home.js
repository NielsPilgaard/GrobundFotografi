import React from 'react';
import loadable from '@loadable/component';
import Logo from './../../Assets/Logo/Logo02-cropped.png';

import './Home.scss';

const Helmet = loadable(() => import('./../../Components/Helmet'));
const PhotoCarousel = loadable(() => import('./../../Components/PhotoCarousel'));

const Home = () => {
    return (
        <main className="home">
            <div className="carousel-container">
                <PhotoCarousel />
            </div>
            <div className="logo">
                <img className="img-fluid" src={Logo} alt="Grobund Fotografi Logo" />
            </div>
            <Helmet
                title="Grobund Fotografi"
                description="Fotograf bosat på Djursland, med en passion for natur-, stemnings-, og børnefotografi."
            />
        </main>
    );
};

export default Home;
