import React from 'react';
import loadable from '@loadable/component';

import './Products.scss';

const Helmet = loadable(() => import('./../../Components/Helmet'));

const Products = () => {
    return (
        <main className="products">
            <Helmet
                title="Grobund Fotografi - Produkter"
                description="Alle produkter designet af Grobund Fotografi, f.eks kalendre og fotobøger."
            />
        </main>
    );
};

export default Products;
