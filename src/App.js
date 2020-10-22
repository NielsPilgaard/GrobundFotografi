import React from 'react';
import loadable from '@loadable/component';
import { Layout } from './Components/Layout';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import FamilyGallery from './Routes/Gallery/FamilyGallery/FamilyGallery';

const References = loadable(() => import('./Routes/References/References'));
const Home = loadable(() => import('./Routes/Home/Home'));
const KidsGallery = loadable(() => import('./Routes/Gallery/KidsGallery/KidsGallery'));
const WeddingGallery = loadable(() => import('./Routes/Gallery/WeddingGallery/WeddingGallery'));
const NatureGallery = loadable(() => import('./Routes/Gallery/NatureGallery/NatureGallery'));
const About = loadable(() => import('./Routes/About/About'));
const Products = loadable(() => import('./Routes/Products/Products'));
const Prices = loadable(() => import('./Routes/Prices/Prices'));
const Contact = loadable(() => import('./Routes/Contact/Contact'));

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

export default class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter basename={baseUrl}>
                    <Layout>
                        <Switch>
                            <Route component={About} exact path="/om-grobund" />
                            <Route component={Products} exact path="/produkter" />
                            <Route component={Prices} exact path="/priser" />
                            <Route component={References} exact path="/referencer" />
                            <Route component={Contact} exact path="/kontakt" />
                            <Route component={KidsGallery} exact path="/galleri-børn" />
                            <Route component={WeddingGallery} exact path="/galleri-bryllup" />
                            <Route component={FamilyGallery} exact path="/galleri-familie" />
                            <Route component={NatureGallery} exact path="/galleri-natur" />
                            <Route component={Home} exact path="/" />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}
