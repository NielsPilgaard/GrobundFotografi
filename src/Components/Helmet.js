import React from "react";
import { Helmet as Helm } from "react-helmet";

export default class Helmet extends React.Component {
  render() {
    return (
      <Helm>
        <title>{this.props.title}</title>
        <meta name='description' content={this.props.description}></meta>
      </Helm>
    );
  }
}
