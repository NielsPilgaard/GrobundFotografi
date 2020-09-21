import React from 'react';
import Loadable from 'react-loadable';
import LoadingComponent from './LoadingComponent';

function Loading() {
    return <LoadingComponent />;
}

export default function LoadableCustom(loader) {
    return Loadable(
        Object.assign(
            {
                loading: Loading,
                delay: 3000,
                timeout: 10000
            },
            loader
        )
    );
}
