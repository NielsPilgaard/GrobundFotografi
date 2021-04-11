import React from 'react';
import photo1 from './../../Assets/Pictures/Wedding/wedding1.jpg';
import photo2 from './../../Assets/Pictures/Wedding/wedding2.jpg';
import photo3 from './../../Assets/Pictures/Wedding/wedding3.jpg';

import photo7 from './../../Assets/Pictures/Wedding/wedding7.jpg';
import photo9 from './../../Assets/Pictures/Wedding/wedding9.jpg';
import photo10 from './../../Assets/Pictures/Wedding/wedding10.jpg';
import photo11 from './../../Assets/Pictures/Wedding/wedding11.jpg';

import photo6 from './../../Assets/Pictures/Wedding/wedding6.jpg';
import photo8 from './../../Assets/Pictures/Wedding/wedding8.jpg';
import photo12 from './../../Assets/Pictures/Wedding/wedding12.jpg';
import photo13 from './../../Assets/Pictures/Wedding/wedding13.jpg';

import photo14 from './../../Assets/Pictures/Wedding/wedding14.jpg';

import loadable from '@loadable/component';
import './Gallery.scss';

const Helmet = loadable(() => import('../../Components/Helmet'));

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
                    <img
                        loading="lazy"
                        className="img-fluid card card-entrance"
                        fluid
                        src={photo}
                        alt={''}
                        key={'bryllupsfoto-' + index}
                    />
                ))}
                <Helmet
                    title="Grobund Fotografi - Fotograf i Ryomgård - Bryllups Galleri"
                    description="Galleri med et udvalg af bryllupsbilleder jeg har taget."
                />
            </main>
        );
    }
}
