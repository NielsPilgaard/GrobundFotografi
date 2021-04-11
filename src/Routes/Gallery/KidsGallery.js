import React from 'react';
import photo1 from './../../Assets/Pictures/Kids/kids1.jpg';
import photo2 from './../../Assets/Pictures/Kids/kids2.jpg';
import photo3 from './../../Assets/Pictures/Kids/kids3.jpg';
import photo4 from './../../Assets/Pictures/Kids/kids4.jpg';
import photo5 from './../../Assets/Pictures/Kids/kids5.jpg';
import photo6 from './../../Assets/Pictures/Kids/kids6.jpg';
import photo7 from './../../Assets/Pictures/Kids/kids7.jpg';
import photo8 from './../../Assets/Pictures/Kids/kids8.jpg';
import photo9 from './../../Assets/Pictures/Kids/kids9.jpg';
import photo10 from './../../Assets/Pictures/Kids/kids10.jpg';
import photo11 from './../../Assets/Pictures/Kids/kids11.jpg';
import photo12 from './../../Assets/Pictures/Kids/kids12.jpg';

import photo13 from './../../Assets/Pictures/Kids/kids13.jpg';
import photo15 from './../../Assets/Pictures/Kids/kids15.jpg';
import photo18 from './../../Assets/Pictures/Kids/kids18.jpg';
import photo19 from './../../Assets/Pictures/Kids/kids19.jpg';
import photo20 from './../../Assets/Pictures/Kids/kids20.jpg';
import photo21 from './../../Assets/Pictures/Kids/kids21.jpg';
import photo22 from './../../Assets/Pictures/Kids/kids22.jpg';
import photo23 from './../../Assets/Pictures/Kids/kids23.jpg';
import photo24 from './../../Assets/Pictures/Kids/kids24.jpg';
import photo25 from './../../Assets/Pictures/Kids/kids25.jpg';
import photo26 from './../../Assets/Pictures/Kids/kids26.jpg';
import photo27 from './../../Assets/Pictures/Kids/kids27.jpg';

import photo28 from './../../Assets/Pictures/Kids/kids28.jpg';
import photo29 from './../../Assets/Pictures/Kids/kids29.jpg';
import photo30 from './../../Assets/Pictures/Kids/kids30.jpg';

import './Gallery.scss';

import loadable from '@loadable/component';
const Helmet = loadable(() => import('../../Components/Helmet'));

const photos = [
    photo7,
    photo1,
    photo15,
    photo26,
    photo6,
    photo5,
    photo28,

    photo13,
    photo20,
    photo25,

    photo8,
    photo11,

    photo18,
    photo27,
    photo12,
    photo29,
    photo2,
    photo21,

    photo3,
    photo4,
    photo24,
    photo9,

    photo22,
    photo10,
    photo19,

    photo23,
    photo30
];
export default class KidsGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-kids">
                {photos.map((photo, index) => (
                    <img
                        loading="lazy"
                        className="img-fluid card card-entrance"
                        fluid
                        src={photo}
                        alt={''}
                        key={'børnefoto-' + index}
                    />
                ))}
                <Helmet
                    title="Grobund Fotografi - Fotograf i Ryomgård - Børnefoto Galleri"
                    description="Galleri med et udvalg af børnebilleder jeg har taget."
                />
            </main>
        );
    }
}
