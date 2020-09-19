import React from 'react';
import Helmet from '../../../Components/Helmet';
import './NatureGallery.scss';

export default class NatureGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-nature">
                <Helmet
                    title="Grobund Fotografi - Naturfoto Galleri"
                    description="Galleri med et udvalg af billeder jeg har taget i naturen, af naturen."
                />
            </main>
        );
    }
}
