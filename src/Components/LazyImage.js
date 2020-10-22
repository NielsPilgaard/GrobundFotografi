import React from 'react';
import { Image } from 'react-bootstrap';
// import Loader from './Loader';

export default class ImageLoader extends React.Component {
    render() {
        return (
            <>
                <Image fluid={this.props.fluid} className={this.props.className} src={this.props.src} />
            </>
        );
    }
}
