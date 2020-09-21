import React from 'react';
import Helmet from '../../../Components/Helmet';
import './KidsGallery.scss';

export default class KidsGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-kids">
                <Helmet
                    title="Grobund Fotografi - Børnefoto Galleri"
                    description="Galleri med et udvalg af billeder jeg har taget af børn."
                />
            </main>
        );
    }
}
