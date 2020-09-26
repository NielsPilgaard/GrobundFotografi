import React from 'react';
import photo1 from './../../../Assets/Pictures/Kids/kids1.jpg';
import photo2 from './../../../Assets/Pictures/Kids/kids2.jpg';
import photo3 from './../../../Assets/Pictures/Kids/kids3.jpg';
import photo4 from './../../../Assets/Pictures/Kids/kids4.jpg';
import photo5 from './../../../Assets/Pictures/Kids/kids5.jpg';
import photo6 from './../../../Assets/Pictures/Kids/kids6.jpg';
import photo7 from './../../../Assets/Pictures/Kids/kids7.jpg';
import photo8 from './../../../Assets/Pictures/Kids/kids8.jpg';
import photo9 from './../../../Assets/Pictures/Kids/kids9.jpg';
import photo10 from './../../../Assets/Pictures/Kids/kids10.jpg';
import photo11 from './../../../Assets/Pictures/Kids/kids11.jpg';
import photo12 from './../../../Assets/Pictures/Kids/kids12.jpg';

import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet';

import './KidsGallery.scss';
const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12];
export default class KidsGallery extends React.Component {
    render() {
        return (
            <main className="gallery gallery-kids mb-5">
                {photos.map((photo, index) => (
                    <Image className="card" fluid src={photo} alt="Photo" key={index} />
                ))}
                <Helmet
                    title="Grobund Fotografi - Børnefoto Galleri"
                    description="Galleri med et udvalg af billeder jeg har taget af børn."
                />
            </main>
        );
    }
}
