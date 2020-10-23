import React from 'react';
import Helmet from './../../Components/Helmet';

import './Products.scss';
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
