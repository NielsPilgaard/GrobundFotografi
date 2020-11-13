import React from 'react';
import loadable from '@loadable/component';
const Footer = loadable(() => import('./Footer'));
const NavMenu = loadable(() => import('./NavMenu'));

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <NavMenu />
                {this.props.children}
                <Footer />
            </>
        );
    }
}
