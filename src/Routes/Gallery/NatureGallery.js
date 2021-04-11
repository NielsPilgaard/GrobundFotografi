import React from 'react';

import photo1 from './../../Assets/Pictures/Nature/nature1.jpg';
import photo2 from './../../Assets/Pictures/Nature/nature2.jpg';
import photo3 from './../../Assets/Pictures/Nature/nature3.jpg';
import photo4 from './../../Assets/Pictures/Nature/nature4.jpg';
import photo5 from './../../Assets/Pictures/Nature/nature5.jpg';
import photo7 from './../../Assets/Pictures/Nature/nature7.jpg';
import photo8 from './../../Assets/Pictures/Nature/nature8.jpg';
import photo9 from './../../Assets/Pictures/Nature/nature9.jpg';
import photo10 from './../../Assets/Pictures/Nature/nature10.jpg';
import photo11 from './../../Assets/Pictures/Nature/nature11.jpg';
import photo12 from './../../Assets/Pictures/Nature/nature12.jpg';
import photo13 from './../../Assets/Pictures/Nature/nature13.jpg';
import photo14 from './../../Assets/Pictures/Nature/nature14.jpg';
import photo15 from './../../Assets/Pictures/Nature/nature15.jpg';
import photo16 from './../../Assets/Pictures/Nature/nature16.jpg';
import photo17 from './../../Assets/Pictures/Nature/nature17.jpg';
import photo18 from './../../Assets/Pictures/Nature/nature18.jpg';
import photo19 from './../../Assets/Pictures/Nature/nature19.jpg';
import photo20 from './../../Assets/Pictures/Nature/nature20.jpg';
import photo21 from './../../Assets/Pictures/Nature/nature21.jpg';
import photo22 from './../../Assets/Pictures/Nature/nature22.jpg';
import photo23 from './../../Assets/Pictures/Nature/nature23.jpg';

import './Gallery.scss';

import loadable from '@loadable/component';
const Helmet = loadable(() => import('../../Components/Helmet'));

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
                    <img
                        loading="lazy"
                        className="img-fluid card card-entrance"
                        fluid
                        src={photo}
                        alt={''}
                        key={'naturfoto-' + index}
                    />
                ))}
                <Helmet
                    title="Grobund Fotografi - Fotograf i Ryomgård - Naturfoto Galleri"
                    description="Galleri med et udvalg af naturbilleder jeg har taget."
                />
            </main>
        );
    }
}
