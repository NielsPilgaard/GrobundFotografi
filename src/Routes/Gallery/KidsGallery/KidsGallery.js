import React from 'react';
import photo1 from './../../../Assets/Pictures/Kids/kids1.webp';
import photo2 from './../../../Assets/Pictures/Kids/kids2.webp';
import photo3 from './../../../Assets/Pictures/Kids/kids3.webp';
import photo4 from './../../../Assets/Pictures/Kids/kids4.webp';
import photo5 from './../../../Assets/Pictures/Kids/kids5.webp';
import photo6 from './../../../Assets/Pictures/Kids/kids6.webp';
import photo7 from './../../../Assets/Pictures/Kids/kids7.webp';
import photo8 from './../../../Assets/Pictures/Kids/kids8.webp';
import photo9 from './../../../Assets/Pictures/Kids/kids9.webp';
import photo10 from './../../../Assets/Pictures/Kids/kids10.webp';
import photo11 from './../../../Assets/Pictures/Kids/kids11.webp';
import photo12 from './../../../Assets/Pictures/Kids/kids12.webp';

import photo13 from './../../../Assets/Pictures/Kids/kids13.webp';
import photo15 from './../../../Assets/Pictures/Kids/kids15.webp';
import photo18 from './../../../Assets/Pictures/Kids/kids18.webp';
import photo19 from './../../../Assets/Pictures/Kids/kids19.webp';
import photo20 from './../../../Assets/Pictures/Kids/kids20.webp';
import photo21 from './../../../Assets/Pictures/Kids/kids21.webp';
import photo22 from './../../../Assets/Pictures/Kids/kids22.webp';
import photo23 from './../../../Assets/Pictures/Kids/kids23.webp';
import photo24 from './../../../Assets/Pictures/Kids/kids24.webp';
import photo25 from './../../../Assets/Pictures/Kids/kids25.webp';
import photo26 from './../../../Assets/Pictures/Kids/kids26.webp';
import photo27 from './../../../Assets/Pictures/Kids/kids27.webp';

import photo28 from './../../../Assets/Pictures/Kids/kids28.webp';
import photo29 from './../../../Assets/Pictures/Kids/kids29.webp';
import photo30 from './../../../Assets/Pictures/Kids/kids30.webp';

import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet';

import './../Gallery.scss';

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
                    <Image className="card card-entrance" fluid src={photo} alt="Photo" key={index} />
                ))}
                <Helmet
                    title="Grobund Fotografi - Børnefoto Galleri"
                    description="Galleri med et udvalg af billeder jeg har taget af børn."
                />
            </main>
        );
    }
}
