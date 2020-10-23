import React from 'react';
import { Helmet as Helm } from 'react-helmet';

export default class Helmet extends React.Component {
    render() {
        return (
            <Helm>
                <title>{this.props.title}</title>
                <meta charSet="utf-8" />
                <meta name="description" content={this.props.description}></meta>
                <link rel="canonical" href="https://grobundfotografi.dk" />
            </Helm>
        );
    }
}
