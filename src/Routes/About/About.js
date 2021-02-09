import React from 'react';
import Row from 'react-bootstrap/Row';

import photo1 from './../../Assets/Pictures/Kids/kids7.webp';
import photo2 from './../../Assets/Pictures/Kids/kids10.webp';
import photo3 from './../../Assets/Pictures/Kids/kids25.webp';
import photo4 from './../../Assets/Pictures/Wedding/wedding9.webp';

import './About.scss';

import loadable from '@loadable/component';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Helmet = loadable(() => import('./../../Components/Helmet'));

export default class About extends React.Component {
    render() {
        return (
            <main className="about">
                <Helmet
                    title="Grobund Fotografi - Fotograf i Ryomgård - Om"
                    description="Hvad Grobund Fotografi står for, og hvordan det hele startede."
                />
                <div loading="lazy" className="om-grobund fade-in-5 p-5">
                    <h2 className="sub-header">Om Grobund Fotografi</h2>
                    <p>Mit navn er Josefine;</p>
                    <p>Jeg er mor, kone, naturelsker og indehaveren af Grobund Fotografi.</p>
                    <p>
                        Siden jeg var lille, har fotografi fascineret mig, interessen fik i løbet af mit voksenliv mere
                        plads, og i 2019 blev Grobund Fotografi til. Udover kreative udtryksformer har jeg flere års
                        erfaring indenfor pædagogfaget.
                    </p>
                </div>
                <img loading="lazy" className="img-fluid image1 fade-in-5" src={photo1} alt={''} />
                <div loading="lazy" className="livsrejser fade-in-10 p-5">
                    <h2 className="sub-header">Dokumenterede livsrejser</h2>
                    <p>Fotografi af mennesker handler for mig om at skabe noget ærligt.</p>
                    <p>
                        Jeg vil fange de oprigtige smil og det livsstadie som mine kunder er i, uanset alder og
                        begivenhed.
                    </p>
                    <p>
                        Derfor kalder jeg mig stemningsfotograf. Mit mål er at fange stemningen og de livsrejser som I
                        hver især er på.
                    </p>
                </div>

                <img loading="lazy" className="img-fluid fade-in-10 image2" src={photo2} alt={''} />

                <div loading="lazy" className="naturen fade-in-10 p-5">
                    <h2 className="sub-header">Naturen som inspiration</h2>
                    <p>
                        Ved en fotosession hos mig, vil I opleve at naturen også spiller en stor rolle. Den fungerer som
                        legeplads, som lyskilde, som rekvisitter og som inspiration. Vi bruger det naturen giver os på
                        dagen, vi arbejder med vejret og med den sæson vi er i.
                    </p>
                    <p>
                        Naturen blev min første muse, da jeg altid har kunne finde ro og fordybelse der. Makrofotografi
                        fik hurtigt et greb om mit hjerte, da jeg deri fandt en helt ny verden at udforske. I kan i
                        galleriet "natur" se mere om dette.
                    </p>
                </div>

                <img loading="lazy" className="img-fluid fade-in-10 image3" src={photo3} alt={''} />

                <div loading="lazy" className="hvorfor-grobund fade-in-15 p-5">
                    <h2 className="sub-header">Hvorfor vælge Grobund Fotografi</h2> <hr></hr>
                    <p>
                        Hos Grobund Fotografi får du ærlige, naturlige - ikke opstillede billeder i høj kvalitet til en
                        god pris.
                    </p>
                    <p>
                        Der er mulighed for korrespondance gennem hele forløbet, og kontakten mellem kunde og mig selv,
                        er noget jeg vægter ekstremt højt. Vi skal kunne stole på hinanden, for at alle får en god
                        oplevelse.
                    </p>
                    <p>
                        Børnefotografering foregår altid på børnenes præmisser og jeg sørger altid for at få skabt en
                        relation til barnet, inden selve fotograferingen går i gang. Denne tid er ekstrem vigtig for
                        mig.
                    </p>
                    <br></br>
                    <br></br>
                    <Row className="justify-content-center">
                        <Button as={Link} variant="outline-success" className="about-buttons" to="/priser">
                            Priser
                        </Button>
                        <Button as={Link} variant="outline-success" className="about-buttons" to="/kontakt">
                            Kontakt
                        </Button>
                    </Row>
                </div>
                <img loading="lazy" className="img-fluid fade-in-15 image4" src={photo4} alt={''} />
            </main>
        );
    }
}
