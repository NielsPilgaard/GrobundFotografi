import React from 'react';
import Helmet from './../../Components/Helmet';

const Home = () => {
    return (
        <div>
            <Helmet
                title="Grobund Fotografi"
                description="Fotograf bosat på Djursland, med en passion for natur-, stemnings-, og børnefotografi."
            />
            <div className="text-white mt-5">
                <h4 className="mb-5 ">Hjemmesiden er under opbygning</h4>

                <h1 className="mt-5">Grobund Fotografi</h1>
                <h4>
                    <i>Natur & Stemningsfotograf</i>
                </h4>
            </div>
        </div>
    );
};

export default Home;
