import React from 'react';
import { Carousel } from 'react-bootstrap';
import Carousel1 from './../Assets/Pictures/carousel1.jpg';
import Carousel2 from './../Assets/Pictures/carousel2.jpg';
import Carousel3 from './../Assets/Pictures/carousel3.jpg';
import Carousel4 from './../Assets/Pictures/carousel4.jpg';

import './PhotoCarousel.scss';

export default class PhotoCarousel extends React.Component {
    render() {
        return (
            <Carousel indicators={false} className="carousel">
                <Carousel.Item>
                    <img className="w-100" src={Carousel1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100" src={Carousel2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100" src={Carousel3} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100" src={Carousel4} alt="Fourth slide" />
                </Carousel.Item>
            </Carousel>
        );
    }
}
