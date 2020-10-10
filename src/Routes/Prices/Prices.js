import React from 'react';
import Card from 'react-bootstrap/Card';
import Helmet from '../../Components/Helmet';
import './Prices.scss';

import kids1 from './../../Assets/Pictures/Kids/kids23.webp';
import kids2 from './../../Assets/Pictures/Pregnancy/pregnancy4.webp';

import wedding1 from './../../Assets/Pictures/Wedding/wedding11.webp';
import wedding2 from './../../Assets/Pictures/Wedding/wedding14.webp';
import wedding3 from './../../Assets/Pictures/Wedding/wedding4.webp';

import family1 from './../../Assets/Pictures/Family/family6.webp';
import family2 from './../../Assets/Pictures/Family/family1.webp';
import family3 from './../../Assets/Pictures/Family/family11.webp';

export default class Prices extends React.Component {
    render() {
        return (
            <>
                <h1 className="header">Priser</h1>
                <hr className="bg-success"></hr>
                <div className="service-group mx-auto">
                    <Card>
                        <Card.Img variant="top" src={kids1} alt="top-image" />
                        <Card.Body>
                            <Card.Title>Børn</Card.Title>
                            <Card.Text>
                                <li className="price-tag">1 time til 700kr.</li>
                                <li>20+ billeder i eget personlige online galleri.</li>
                                <li>200kr. i tillæg for hvert barn udover det første.</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={kids2} alt="top-image" />
                        <Card.Body>
                            <Card.Title>Gravide</Card.Title>
                            <Card.Text>
                                <li className="price-tag">1 time til 700kr.</li>
                                <li>20+ billeder i eget personlige online galleri.</li>
                                <li>200kr. i tillæg hvis partner eller barn skal med på billederne.</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={wedding1} alt="top-image" />
                        <Card.Body>
                            <Card.Title>Bryllupspakke 1</Card.Title>
                            <Card.Text>
                                <li className="price-tag">5 timer til 5000kr.</li>
                                <li>
                                    Her får I de billeder som er blevet gode, som regel 100-200 billeder, i jeres eget
                                    online galleri.
                                </li>
                                <li>Denne pakke er god til at ”følge dagen” og få billeder af både vielse og fest.</li>
                                <small className="text-muted">
                                    Denne pakke kan også bestilles til dåb/konfirmation.
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={wedding2} alt="top-image" />
                        <Card.Body>
                            <Card.Title>Bryllupspakke 2</Card.Title>
                            <Card.Text>
                                <li className="price-tag">3 timer til 3500kr.</li>
                                <li>
                                    Her får I de billeder som er blevet gode, som regel 100-150 billeder, i jeres eget
                                    online galleri.
                                </li>
                                <li>
                                    Denne pakke er god til at få billeder af vielsen og eventuelt parbilleder bagefter.
                                </li>
                                <small className="text-muted">
                                    Denne pakke kan også bestilles til dåb/konfirmation.
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={wedding3} alt="top-image" />
                        <Card.Body>
                            <Card.Title>Bryllupspakke 3</Card.Title>
                            <Card.Text>
                                <li className="price-tag">2 timer til 2000kr.</li>
                                <li>
                                    Her får I de billeder som er blevet gode, som regel 100-150 billeder, i jeres eget
                                    online galleri.
                                </li>
                                <li>Denne pakke er beregnet til selve ceremonien i kirken eller ved en vielse.</li>
                                <small className="text-muted">
                                    Denne pakke kan også bestilles til dåb/konfirmation.
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={family1} alt="top-image" />
                        <Card.Body>
                            <Card.Title>Familiepakke 1</Card.Title>
                            <Card.Text>
                                <li className="price-tag">2 timer til 1500kr.</li>
                                <li>60+ billeder i eget personlige online galleri.</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={family2} alt="top-image" />
                        <Card.Body>
                            <Card.Title>Familiepakke 2</Card.Title>
                            <Card.Text>
                                <li className="price-tag">1 timer til 900kr.</li>
                                <li>40+ billeder i eget personlige online galleri.</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={family3} alt="top-image" />
                        <Card.Body>
                            <Card.Title>Familiepakke 3</Card.Title>
                            <Card.Text>
                                <li className="price-tag">30 minutter til 700kr.</li>
                                <li>20+ billeder i eget personlige online galleri.</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Helmet
                        title="Grobund Fotografi - Priser"
                        description="Priser på alle slags fotografi som Grobund Fotografi tilbyder, heriblandt bryllups-, børne-, og babyfotografi."
                    />
                </div>
            </>
        );
    }
}
