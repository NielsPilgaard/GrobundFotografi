import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Layout } from './Components/Layout';
import LoadableCustom from './Components/LoadableCustom';

const References = LoadableCustom({
    loader: () => import('./Routes/References/References')
});
const Home = LoadableCustom({
    loader: () => import('./Routes/Home/Home')
});
const KidsGallery = LoadableCustom({
    loader: () => import('./Routes/Gallery/KidsGallery/KidsGallery')
});
const WeddingGallery = LoadableCustom({
    loader: () => import('./Routes/Gallery/WeddingGallery/WeddingGallery')
});
const NatureGallery = LoadableCustom({
    loader: () => import('./Routes/Gallery/NatureGallery/NatureGallery')
});
const About = LoadableCustom({
    loader: () => import('./Routes/About/About')
});
const Products = LoadableCustom({
    loader: () => import('./Routes/Products/Products')
});
const Prices = LoadableCustom({
    loader: () => import('./Routes/Prices/Prices')
});
const Contact = LoadableCustom({
    loader: () => import('./Routes/Contact/Contact')
});

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
                            <Route component={NatureGallery} exact path="/galleri-natur" />{' '}
                            <Route component={Home} exact path="/" />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}
