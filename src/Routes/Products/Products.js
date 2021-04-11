import React from 'react';
import loadable from '@loadable/component';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// import tempCalendar from '../../Assets/kalender-temp.jpg';
// import bogCalendar from '../../Assets/bog-temp.jpg';

import './Products.scss';

const Helmet = loadable(() => import('../../Components/Helmet'));

const data = {
    products: [
        {
            name: 'Fordybelsens Sti',
            short_description: 'En viljestærk sti med naturen som vejviser.',
            description: '',
            // coverPhoto: tempCalendar,
            photos: ''
        },
        {
            name: 'Lysets Sti',
            short_description: 'En kærlig og lys sti med naturen som vejviser.',
            description: '',
            // coverPhoto: tempCalendar,
            photos: ''
        },
        {
            name: 'Ved dine fødder',
            short_description: 'Naturopdagelse for alle aldre',
            description: '',
            // coverPhoto: bogCalendar,
            photos: ''
        }
    ]
};

export default class Products extends React.Component {
    render() {
        return (
            <main className="products product-grid">
                {data.products.map((product) => (
                    <Card key={product.name} loading="lazy" className="product">
                        <Card.Link
                            as={Link}
                            to={{
                                pathname: '/produkt',
                                state: {
                                    name: product.name,
                                    short_description: product.short_description,
                                    description: product.description,
                                    coverPhoto: product.coverPhoto,
                                    photos: product.photos
                                }
                            }}
                        >
                            <Card.Img variant="top" src={product.coverPhoto} alt={''} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.short_description}</Card.Text>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                ))}
                <Helmet
                    title="Grobund Fotografi - Fotograf i Ryomgård - Produkter"
                    description="Alle produkter designet af Grobund Fotografi, f.eks kalendere og fotobøger."
                />
            </main>
        );
    }
}
