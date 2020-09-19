import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Layout } from './Components/Layout';
import About from './Routes/About/About';
import Products from './Routes/Products/Products';
import Prices from './Routes/Prices/Prices';
import Contact from './Routes/Contact/Contact';
import References from './Routes/References/References';
import Home from './Routes/Home/Home';
import KidsGallery from './Routes/Gallery/Kids/KidsGallery';
import WeddingGallery from './Routes/Gallery/Wedding/WeddingGallery';
import NatureGallery from './Routes/Gallery/Nature/NatureGallery';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

export default class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter basename={baseUrl}>
                    <Layout>
                        <Route component={Home} exact path="/" />
                        <Route component={About} path="/om-grobund" />
                        <Route component={Products} path="/produkter" />
                        <Route component={Prices} path="/priser" />
                        <Route component={References} path="/referencer" />
                        <Route component={Contact} path="/kontakt" />
                        <Route component={KidsGallery} path="/galleri-børn" />
                        <Route component={WeddingGallery} path="/galleri-bryllup" />
                        <Route component={NatureGallery} path="/galleri-natur" />
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}
