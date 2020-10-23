import React from 'react';

import './FacebookReview.scss';

export default class FacebookReview extends React.Component {
    render() {
        return (
            <>
                <div className="review-container">
                    <a rel="noopener noreferrer" target="_blank" href={this.props.href}>
                        <img
                            loading="lazy"
                            src={this.props.src}
                            alt={'Review ' + this.props.href}
                            className="img-fluid px-3 img-facebook-review"
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
