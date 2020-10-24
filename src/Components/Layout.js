import React from 'react';
import loadable from '@loadable/component';
const Footer = loadable(() => import('./Footer'));
const Header = loadable(() => import('./Header'));

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                {this.props.children}
                <Footer />
            </>
        );
    }
}
