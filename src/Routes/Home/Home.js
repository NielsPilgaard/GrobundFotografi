import React from 'react';
import { Image } from 'react-bootstrap';
import PhotoCarousel from '../../Components/PhotoCarousel';
import Helmet from './../../Components/Helmet';

import './Home.scss';

import Logo from './../../Assets/Logo/Logo02-cropped.png';

const Home = () => {
    return (
        <main className="home">
            <div className="carousel-container fade-in-10">
                <PhotoCarousel />
            </div>
            <div className="logo fade-in-5">
                <Image fluid src={Logo} alt="Logo" />
            </div>{' '}
            <Helmet
                title="Grobund Fotografi"
                description="Fotograf bosat på Djursland, med en passion for natur-, stemnings-, og børnefotografi."
            />
        </main>
    );
};

export default Home;
