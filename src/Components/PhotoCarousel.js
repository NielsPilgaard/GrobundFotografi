import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from './../Assets/Pictures/Kids/kids2.webp';
import Carousel2 from './../Assets/Pictures/Wedding/wedding1.webp';
import Carousel3 from './../Assets/Pictures/Kids/kids3.webp';
import Carousel4 from './../Assets/Pictures/Kids/kids4.webp';

export default class PhotoCarousel extends React.Component {
    render() {
        return (
            <Carousel indicators={false} controls={false} className="carousel">
                <Carousel.Item>
                    <img className="w-100 active" src={Carousel1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img loading="lazy" className="w-100" src={Carousel2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img loading="lazy" className="w-100" src={Carousel3} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img loading="lazy" className="w-100" src={Carousel4} alt="Fourth slide" />
                </Carousel.Item>
            </Carousel>
        );
    }
}
