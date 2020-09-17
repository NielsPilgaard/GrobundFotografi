import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="App">
                <Header />
                {this.props.children}
                {<Footer />}
            </div>
        );
    }
}
