import React from 'react';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { name, short_description, description, coverPhoto, photos } = this.props.location.state;
        return (
            <main>
                {name}
                {short_description}
                {description}
                {coverPhoto}
            </main>
        );
    }
}
