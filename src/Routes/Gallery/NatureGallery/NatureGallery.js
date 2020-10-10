import React from 'react';
import photo1 from './../../../Assets/Pictures/Nature/nature1.webp';
import photo2 from './../../../Assets/Pictures/Nature/nature2.webp';
import photo3 from './../../../Assets/Pictures/Nature/nature3.webp';
import photo4 from './../../../Assets/Pictures/Nature/nature4.webp';
import photo5 from './../../../Assets/Pictures/Nature/nature5.webp';
import photo7 from './../../../Assets/Pictures/Nature/nature7.webp';
import photo8 from './../../../Assets/Pictures/Nature/nature8.webp';
import photo9 from './../../../Assets/Pictures/Nature/nature9.webp';
import photo10 from './../../../Assets/Pictures/Nature/nature10.webp';
import photo11 from './../../../Assets/Pictures/Nature/nature11.webp';
import Helmet from '../../../Components/Helmet';

import { Image } from 'react-bootstrap';

import './../Gallery.scss';

const naturePhotos = [photo1, photo2, photo3, photo4, photo5, photo7, photo8, photo9, photo10, photo11];

export default class NatureGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-nature">
                {naturePhotos.map((photo, index) => (
                    <Image className="card card-entrance" fluid src={photo} alt="Photo" key={index} />
                ))}
                <Helmet
                    title="Grobund Fotografi - Naturfoto Galleri"
                    description="Galleri med et udvalg af billeder jeg har taget i naturen, af naturen."
                />
            </main>
        );
    }
}
