import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import loadable from '@loadable/component';

import './Prices.scss';

import kids1 from './../../Assets/Pictures/Kids/kids24.webp';
import kids2 from './../../Assets/Pictures/Pregnancy/pregnancy1.webp';

import wedding1 from './../../Assets/Pictures/Wedding/wedding14.webp';
import wedding2 from './../../Assets/Pictures/Wedding/wedding17.webp';
import wedding3 from './../../Assets/Pictures/Wedding/wedding11.webp';

import family1 from './../../Assets/Pictures/Family/family6.webp';
import family2 from './../../Assets/Pictures/Family/family18.jpg';
import family3 from './../../Assets/Pictures/Family/family16.webp';

const Helmet = loadable(() => import('./../../Components/Helmet'));

export default class Prices extends React.Component {
    render() {
        return (
            <>
                <h1 className="header">Priser</h1>
                <hr className="bg-success"></hr>
                <div className="service-group mx-auto">
                    <Row className="justify-content-center">
                        <Card loading="lazy" className="card-w-33">
                            <Card.Img variant="top" src={kids1} alt="top-image" />
                            <Card.Body>
                                <Card.Title>Børn</Card.Title>
                                <Card.Text>
                                    <li className="price-tag">1 time til 700kr.</li>
                                    <li>20 billeder i eget personlige online galleri.</li>
                                    <li>200kr. i tillæg for hvert barn udover det første.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card loading="lazy" className="card-w-33">
                            <Card.Img variant="top" src={kids2} alt="top-image" />
                            <Card.Body>
                                <Card.Title>Gravide</Card.Title>
                                <Card.Text>
                                    <li className="price-tag">1 time til 700kr.</li>
                                    <li>20 billeder i eget personlige online galleri.</li>
                                    <li>200kr. i tillæg hvis partner eller barn skal med på billederne.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card loading="lazy" className="card-w-33">
                            <Card.Img variant="top" src={wedding1} alt="top-image" />
                            <Card.Body>
                                <Card.Title>Bryllupspakke 1</Card.Title>
                                <Card.Text>
                                    <li className="price-tag">2 timer til 2000kr.</li>
                                    <li>40 billeder, i eget personlige online galleri.</li>
                                    <li>Denne pakke er beregnet til selve ceremonien i kirken eller ved en vielse.</li>
                                    <small className="text-muted">
                                        Denne pakke kan også bestilles til dåb/konfirmation.
                                    </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card loading="lazy" className="card-w-33">
                            <Card.Img variant="top" src={wedding2} alt="top-image" />
                            <Card.Body>
                                <Card.Title>Bryllupspakke 2</Card.Title>
                                <Card.Text>
                                    <li className="price-tag">3 timer til 3500kr.</li>
                                    <li>60 billeder, i eget personlige online galleri.</li>
                                    <li>
                                        Denne pakke er god til at få billeder af vielsen og eventuelt parbilleder
                                        bagefter.
                                    </li>
                                    <small className="text-muted">
                                        Denne pakke kan også bestilles til dåb/konfirmation.
                                    </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card loading="lazy" className="card-w-33">
                            <Card.Img variant="top" src={wedding3} alt="top-image" />
                            <Card.Body>
                                <Card.Title>Bryllupspakke 3</Card.Title>
                                <Card.Text>
                                    <li className="price-tag">5 timer til 5000kr.</li>
                                    <li>100 billeder, i eget personlige online galleri.</li>
                                    <li>
                                        Denne pakke er god til at ”følge dagen” og få billeder af både vielse og fest.
                                    </li>
                                    <small className="text-muted">
                                        Denne pakke kan også bestilles til dåb/konfirmation.
                                    </small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card loading="lazy" className="card-w-33">
                            <Card.Img variant="top" src={family1} alt="top-image" />
                            <Card.Body>
                                <Card.Title>Familiepakke 1</Card.Title>
                                <Card.Text>
                                    <li className="price-tag">30 minutter til 900kr.</li>
                                    <li>10 billeder i eget personlige online galleri.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card loading="lazy" className="card-w-33">
                            <Card.Img variant="top" src={family2} alt="top-image" />
                            <Card.Body>
                                <Card.Title>Familiepakke 2</Card.Title>
                                <Card.Text>
                                    <li className="price-tag">1 timer til 1300kr.</li>
                                    <li>20 billeder i eget personlige online galleri.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card loading="lazy" className="card-w-33">
                            <Card.Img variant="top" src={family3} alt="top-image" />
                            <Card.Body>
                                <Card.Title>Familiepakke 3</Card.Title>
                                <Card.Text>
                                    <li className="price-tag">2 timer til 1800kr.</li>
                                    <li>30 billeder i eget personlige online galleri.</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <br></br>
                    <Helmet
                        title="Grobund Fotografi - Fotograf i Ryomgård - Priser"
                        description="Priser på alle slags fotografi som Grobund Fotografi tilbyder, f.eks bryllupsfotografi, børnefotografi og babyfotografi."
                    />
                </div>
            </>
        );
    }
}
