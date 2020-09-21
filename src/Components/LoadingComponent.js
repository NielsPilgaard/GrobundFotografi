import React from 'react';
import { Col, Row } from 'react-bootstrap';

import LoadingGif from './../Assets/Gifs/loading.gif';

import PropTypes from 'prop-types';

export default class LoadingComponent extends React.Component {
    StylingData = {
        margin: 'auto',
        width: '50%',
        padding: '20px'
    };

    FullSize = {
        margin: 'auto',
        width: '50%',
        paddingTop: window.innerHeight / 2 - 125 + 'px'
    };

    render() {
        const { fullpage } = this.props;
        return (
            <div className="animated" style={this.outer}>
                <Row style={fullpage ? this.FullSize : this.StylingData} className="flex-row align-items-center">
                    <Col xs="12" className="text-center d-flex justify-content-center">
                        {this.window}
                        <div className="d-flex align-items-center">
                            <img src={LoadingGif} height="100px" alt="Loading" />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

LoadingComponent.propTypes = {
    preText: PropTypes.element,
    subText: PropTypes.element,
    fullpage: PropTypes.bool
};
