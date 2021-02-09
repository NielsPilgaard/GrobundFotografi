import React from 'react';

import photo2 from './../../Assets/Pictures/Family/family2.webp';
import photo3 from './../../Assets/Pictures/Family/family3.webp';
import photo4 from './../../Assets/Pictures/Family/family4.webp';
import photo6 from './../../Assets/Pictures/Family/family6.webp';
import photo7 from './../../Assets/Pictures/Family/family7.webp';
import photo8 from './../../Assets/Pictures/Family/family8.webp';
import photo9 from './../../Assets/Pictures/Family/family9.webp';
import photo10 from './../../Assets/Pictures/Family/family10.webp';
import photo11 from './../../Assets/Pictures/Family/family11.webp';

import photo12 from './../../Assets/Pictures/Family/family12.webp';
import photo13 from './../../Assets/Pictures/Family/family13.webp';
import photo14 from './../../Assets/Pictures/Family/family14.webp';
import photo15 from './../../Assets/Pictures/Family/family15.webp';
import photo16 from './../../Assets/Pictures/Family/family16.webp';

import './Gallery.scss';

import loadable from '@loadable/component';
const Helmet = loadable(() => import('../../Components/Helmet'));

const photos = [
    photo2,
    photo12,
    photo3,
    photo4,
    photo13,
    photo6,
    photo7,
    photo8,
    photo14,
    photo9,
    photo15,
    photo10,
    photo11,
    photo16
];

export default class FamilyGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-family">
                {photos.map((photo, index) => (
                    <img
                        loading="lazy"
                        className="img-fluid card card-entrance"
                        fluid
                        src={photo}
                        alt={''}
                        key={'familiefoto-' + index}
                    />
                ))}
                <Helmet
                    title="Grobund Fotografi - Fotograf i Ryomgård - Familie Galleri"
                    description="Galleri med et udvalg af familebilleder jeg har taget."
                />
            </main>
        );
    }
}
