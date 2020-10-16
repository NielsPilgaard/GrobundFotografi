import React from 'react';
import Image from 'react-bootstrap/Image';

import './FacebookReview.scss';

export default class FacebookReview extends React.Component {
    render() {
        return (
            <>
                <div className="review-container">
                    <a rel="noopener noreferrer" target="_blank" href={this.props.href}>
                        <Image
                            fluid
                            src={this.props.src}
                            alt={'Review ' + this.props.href}
                            className="px-3 facebook-review-img"
                        />
                        {/* <span role="img" aria-label="5 stjerner" className="star-overlay">
                            ⭐⭐⭐⭐⭐
                        </span> */}
                    </a>
                </div>
            </>
        );
    }
}
