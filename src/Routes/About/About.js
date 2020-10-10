import React from 'react';
import { Image } from 'react-bootstrap';
import Helmet from './../../Components/Helmet';
import './About.scss';
import photo1 from './../../Assets/Pictures/Kids/kids7.webp';
import photo2 from './../../Assets/Pictures/Kids/kids10.webp';
import photo3 from './../../Assets/Pictures/Wedding/wedding9.webp';
import photo4 from './../../Assets/Pictures/Wedding/wedding14.webp';

export default class About extends React.Component {
    render() {
        return (
            <main className="about">
                <Helmet
                    title="Grobund Fotografi - Om"
                    description="Hvad Grobund Fotografi står for, og hvordan det hele startede."
                />
                <div className="om-grobund fade-in-5 p-5">
                    <h2>Om Grobund</h2>
                    <hr></hr>
                    <h5 className="mb-4">
                        Jeg hedder Josefine, jeg er mor, kone, naturelsker og indehaver af Grobund Fotografi.
                    </h5>
                    <p>Jeg har elsket at tage billeder og dokumentere alt via denne form, siden jeg var lille.</p>
                    Siden 2018 har jeg givet denne elskede hobby mere plads i mit liv, og meget hurtigt optog den meget
                    tid, da faget er noget der kaldte på mig.
                    <p>I 2019 blev Grobund Fotografi til.</p>
                    <p>
                        Den kreative udtryksform er noget der har skabt genklang igennem hele mit liv, men jeg har
                        derudover erfaring indenfor pædagogfaget og jeg ser mit moderskab som et af mine største
                        livsrejser og en kæmpe del af mit liv.
                    </p>
                </div>
                <div className="image1 fade-in-5">
                    <Image src={photo1} fluid alt="photo1" />
                </div>
                <div className="livsrejser fade-in-10 p-5">
                    <h3>Livsrejser</h3> <hr></hr>
                    <p>
                        Når jeg tager billeder, handler det for mig om at skabe ærlige minder. Jeg vil fange de
                        oprigtige smil og det livsstadie jeg fotografere. Uanset om det er en baby der ikke kan gå eller
                        et brudepar, så vil jeg gøre mit ypperste for at fange den stemning og det ærlige øjeblik jeg
                        ser.
                    </p>
                    <p>
                        Det handler om at vi hver især er på en livsrejse, og går man til en fotograf, så er det for at
                        dokumentere en del af den rejse. Det skal gøres ærligt.
                    </p>
                </div>
                <div className="image2 fade-in-10">
                    <Image src={photo2} fluid alt="photo2" />
                </div>
                <div className="naturen fade-in-10 p-5">
                    <h3>Naturen</h3> <hr></hr>
                    <p>
                        Jeg føler mig forbundet og tiltrukket af naturen, derfor blev dette også min første muse. Især
                        makro fotografi har fået et greb om mit hjerte.
                    </p>
                    <p>
                        Ved en fotosession hos mig, bruger vi også naturen. Både som legeplads og inspiration. Alt
                        foregår udendørs, med naturligt lys og det vejr vi nu bliver skænket på dagen.
                    </p>
                    <p>
                        Dette er også med til at fange det specifikke øjeblik vi befinder os i, og gør billederne
                        autentiske.
                    </p>
                </div>
                <div className="image3 fade-in-10">
                    <Image src={photo3} fluid alt="photo3" />
                </div>

                <div className="hvorfor-grobund fade-in-15 p-5">
                    <h3>Hvorfor vælge Grobund Fotografi</h3> <hr></hr>
                    <p>
                        Hos Grobund Fotografi får du ærlighed, naturlige - ikke opstillede billeder i høj kvalitet til
                        en god pris.
                    </p>
                    <p>
                        Der er mulighed for korrespondance gennem hele forløbet, og kontakten mellem kunde og mig selv,
                        er noget jeg vægter ekstremt højt. Vi skal kunne stole på hinanden, for at alle får en god
                        oplevelse.
                    </p>
                    <p>
                        Børnefotografering foregår altid på børnenes præmisser og jeg sørger altid for at skabe en
                        relation til barnet, inden selve fotograferingen går i gang. Denne tid er ekstrem vigtig for
                        mig.
                    </p>
                </div>
                <div className="image4 fade-in-15">
                    <Image src={photo4} fluid alt="photo4" />
                </div>
            </main>
        );
    }
}
