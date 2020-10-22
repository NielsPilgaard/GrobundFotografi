import React from 'react';

import photo2 from './../../../Assets/Pictures/Family/family2.webp';
import photo3 from './../../../Assets/Pictures/Family/family3.webp';
import photo4 from './../../../Assets/Pictures/Family/family4.webp';
import photo6 from './../../../Assets/Pictures/Family/family6.webp';
import photo7 from './../../../Assets/Pictures/Family/family7.webp';
import photo8 from './../../../Assets/Pictures/Family/family8.webp';
import photo9 from './../../../Assets/Pictures/Family/family9.webp';
import photo10 from './../../../Assets/Pictures/Family/family10.webp';
import photo11 from './../../../Assets/Pictures/Family/family11.webp';

import photo12 from './../../../Assets/Pictures/Family/family12.webp';
import photo13 from './../../../Assets/Pictures/Family/family13.webp';
import photo14 from './../../../Assets/Pictures/Family/family14.webp';
import photo15 from './../../../Assets/Pictures/Family/family15.webp';
import photo16 from './../../../Assets/Pictures/Family/family16.webp';

// import photo18 from './../../../Assets/Pictures/Family/family18.webp';
// import photo19 from './../../../Assets/Pictures/Family/family19.webp';
// import photo20 from './../../../Assets/Pictures/Family/family20.webp';
// import photo21 from './../../../Assets/Pictures/Family/family21.webp';
// import photo22 from './../../../Assets/Pictures/Family/family22.webp';
// import photo23 from './../../../Assets/Pictures/Family/family23.webp';
// import photo24 from './../../../Assets/Pictures/Family/family24.webp';
// import photo25 from './../../../Assets/Pictures/Family/family25.webp';
// import photo26 from './../../../Assets/Pictures/Family/family26.webp';
// import photo27 from './../../../Assets/Pictures/Family/family27.webp';

import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet';

import './../Gallery.scss';

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
                    <Image className="card card-entrance" fluid src={photo} alt="Photo" key={index} />
                ))}
                <Helmet
                    title="Grobund Fotografi - Familie Galleri"
                    description="Galleri med et udvalg af billeder jeg har taget af familer."
                />
            </main>
        );
    }
}
