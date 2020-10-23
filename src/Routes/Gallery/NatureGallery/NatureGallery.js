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
import photo12 from './../../../Assets/Pictures/Nature/nature12.webp';
import photo13 from './../../../Assets/Pictures/Nature/nature13.webp';
import photo14 from './../../../Assets/Pictures/Nature/nature14.webp';
import photo15 from './../../../Assets/Pictures/Nature/nature15.webp';
import photo16 from './../../../Assets/Pictures/Nature/nature16.webp';
import photo17 from './../../../Assets/Pictures/Nature/nature17.webp';
import photo18 from './../../../Assets/Pictures/Nature/nature18.webp';
import photo19 from './../../../Assets/Pictures/Nature/nature19.webp';
import photo20 from './../../../Assets/Pictures/Nature/nature20.webp';
import photo21 from './../../../Assets/Pictures/Nature/nature21.webp';
import photo22 from './../../../Assets/Pictures/Nature/nature22.webp';
import photo23 from './../../../Assets/Pictures/Nature/nature23.webp';

import Helmet from '../../../Components/Helmet';

import './../Gallery.scss';
import { Image } from 'react-bootstrap';

const naturePhotos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo22,
    photo23
];

export default class NatureGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-nature">
                {naturePhotos.map((photo, index) => (
                    <Image className="card card-entrance" src={photo} alt={''} key={'nature-photo-' + index} fluid />
                ))}
                <Helmet
                    title="Grobund Fotografi - Naturfoto Galleri"
                    description="Galleri med et udvalg af naturbilleder jeg har taget."
                />
            </main>
        );
    }
}
