import React from 'react';
import PhotoCarousel from '../../Components/PhotoCarousel';
import Helmet from './../../Components/Helmet';
import './Home.scss';

const Home = () => {
    return (
        <main className="home">
            <PhotoCarousel />
            <div className="welcome">
                <h1>Grobund Fotografi</h1>
                <span></span>
                <h4>
                    <i>Natur & Stemningsfotograf</i>
                </h4>
            </div>
            <Helmet
                title="Grobund Fotografi"
                description="Fotograf bosat på Djursland, med en passion for natur-, stemnings-, og børnefotografi."
            />
        </main>
    );
};

export default Home;
