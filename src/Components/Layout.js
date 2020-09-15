import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className='App'>
        <Header />
        <Container>{this.props.children}</Container>
        <Footer />
      </div>
    );
  }
}
