import React from 'react';
import { Image, Row } from 'react-bootstrap';
import Helmet from './../../Components/Helmet';
import './About.scss';
import photo1 from './../../Assets/Pictures/Kids/kids7.webp';
import photo2 from './../../Assets/Pictures/Kids/kids10.webp';
import photo3 from './../../Assets/Pictures/Kids/kids25.webp';
import photo4 from './../../Assets/Pictures/Wedding/wedding9.webp';

export default class About extends React.Component {
    render() {
        return (
            <main className="about">
                <Helmet
                    title="Grobund Fotografi - Om"
                    description="Hvad Grobund Fotografi står for, og hvordan det hele startede."
                />
                <div className="om-grobund fade-in-5 p-5">
                    <h2 className="sub-header">Om Grobund Fotografi</h2>
                    <p>Mit navn er Josefine;</p>
                    <p>Jeg er mor, kone, naturelsker og indehaveren af Grobund Fotografi.</p>
                    <p>
                        Siden jeg var lille, har fotografi fascineret mig, interessen fik i løbet af mit voksenliv mere
                        plads, og i 2019 blev Grobund Fotografi til. Udover kreative udtryksformer har jeg flere års
                        erfaring indenfor pædagogfaget.
                    </p>
                </div>
                <div className="image1 fade-in-5">
                    <Image src={photo1} fluid alt="photo1" />
                </div>
                <div className="livsrejser fade-in-10 p-5">
                    <h2 className="sub-header">Dokumenterede livsrejser</h2>
                    <p>Fotografi af mennesker handler for mig om at skabe noget ærligt.</p>
                    <p>
                        Jeg vil fange de oprigtige smil og det livsstadie som mine kunder er i, uanset alder og
                        begivenhed.
                    </p>
                    <p>
                        Derfor kalder jeg min stemningsfotograf. Mit mål er at fange stemningen og de livsrejser som i
                        hver især er på.
                    </p>
                </div>
                <div className="image2 fade-in-10">
                    <Image src={photo2} fluid alt="photo2" />
                </div>
                <div className="naturen fade-in-10 p-5">
                    <h2 className="sub-header">Naturen som inspiration</h2>
                    <p>
                        Ved en fotosession hos mig, vil I opleve at naturen også spiller en stor rolle. Den fungerer som
                        legeplads, som lyskilde, som rekvisitter og som inspiration. Vi bruger det naturen giver os på
                        dagen, vi arbejder med vejret og med den sæson vi er i.
                    </p>
                    <p>
                        Naturen blev min første muse, da jeg altid har kunne finde ro og fordybelse der. Makrofotografi
                        fik hurtigt et greb om mit hjerte, da jeg deri fandt en helt ny verden at udforske. I kan i
                        galleriet ”natur” se mere om dette.
                    </p>
                </div>
                <div className="image3 fade-in-10">
                    <Image src={photo3} fluid alt="photo3" />
                </div>

                <div className="hvorfor-grobund fade-in-15 p-5">
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
                        <a className="btn btn-outline-success about-buttons" href="/priser">
                            Priser
                        </a>
                        <a className="btn btn-outline-success about-buttons" href="/kontakt">
                            Kontakt
                        </a>
                    </Row>
                </div>
                <div className="image4 fade-in-15">
                    <Image src={photo4} fluid alt="photo4" />
                </div>
            </main>
        );
    }
}
