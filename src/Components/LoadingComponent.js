import React from 'react';
import { Image } from 'react-bootstrap';

import LoadingGif from './../Assets/Gifs/loading.gif';

export default class LoadingComponent extends React.Component {
    render() {
        return (
            <>
                <Image width="100px" src={LoadingGif} alt="Loading" />
            </>
        );
    }
}
