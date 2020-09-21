import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Scrollbars } from 'react-custom-scrollbars';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="App">
                <Header />
                <Scrollbars style={{ height: '92vh' }} autoHide autoHideTimeout={1000} autoHideDuration={200}>
                    {this.props.children}
                    <Footer />
                </Scrollbars>
            </div>
        );
    }
}
