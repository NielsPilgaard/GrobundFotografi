import React from 'react';
import { Image } from 'react-bootstrap';

import LoadingGif from './../Assets/Gifs/loading.gif';

export default class Loader extends React.Component {
    render() {
        return (
            <>
                <Image
                    width={100}
                    height={100}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center'
                    }}
                    src={LoadingGif}
                    alt="Loading"
                />
            </>
        );
    }
}
