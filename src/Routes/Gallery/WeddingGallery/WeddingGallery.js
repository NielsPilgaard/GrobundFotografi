import React from 'react';
import photo1 from './../../../Assets/Pictures/Wedding/wedding1.webp';
import photo2 from './../../../Assets/Pictures/Wedding/wedding2.webp';
import photo3 from './../../../Assets/Pictures/Wedding/wedding3.webp';

import photo7 from './../../../Assets/Pictures/Wedding/wedding7.webp';
import photo9 from './../../../Assets/Pictures/Wedding/wedding9.webp';
import photo10 from './../../../Assets/Pictures/Wedding/wedding10.webp';
import photo11 from './../../../Assets/Pictures/Wedding/wedding11.webp';

import photo6 from './../../../Assets/Pictures/Wedding/wedding6.webp';
import photo8 from './../../../Assets/Pictures/Wedding/wedding8.webp';
import photo12 from './../../../Assets/Pictures/Wedding/wedding12.webp';
import photo13 from './../../../Assets/Pictures/Wedding/wedding13.webp';

import photo14 from './../../../Assets/Pictures/Wedding/wedding14.webp';

import Helmet from '../../../Components/Helmet';
import './../Gallery.scss';
import { Image } from 'react-bootstrap';

const weddingPhotos = [
    photo11,

    photo1,
    photo9,
    photo7,
    photo3,

    photo10,
    photo2,

    photo14,

    photo12,
    photo13,
    photo6,
    photo8
];

export default class WeddingGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-wedding">
                {weddingPhotos.map((photo, index) => (
                    <Image className="card card-entrance" fluid src={photo} alt="Photo" key={index} />
                ))}
                <Helmet
                    title="Grobund Fotografi - Bryllups Galleri"
                    description="Galleri med et udvalg af billeder jeg har taget til bryllup."
                />
            </main>
        );
    }
}
