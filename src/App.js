import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout";
import About from "./Routes/om-grobund/About";
import Products from "./Routes/produkter/Products";
import Prices from "./Routes/priser/Prices";
import Contact from "./Routes/kontakt/Contact";
import References from "./Routes/referencer/References";
import Home from "./Routes/forside/Home";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={baseUrl}>
          <Layout>
            <Route component={Home} exact path='/' />
            <Route component={About} path='/om-grobund' />
            <Route component={Products} path='/produkter' />
            <Route component={Prices} path='/priser' />
            <Route component={References} path='/referencer' />
            <Route component={Contact} path='/kontakt' />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
