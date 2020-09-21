import React from 'react';
import Helmet from '../../../Components/Helmet';
import './WeddingGallery.scss';

export default class WeddingGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-wedding">
                <Helmet
                    title="Grobund Fotografi - Bryllups Galleri"
                    description="Galleri med et udvalg af billeder jeg har taget til bryllup."
                />
            </main>
        );
    }
}
