import React from 'react';
import Footer from './Footer';
import Header from './Header';

export class Layout extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
