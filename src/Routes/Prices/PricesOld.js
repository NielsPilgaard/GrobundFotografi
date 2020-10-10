import React from 'react';
import { Image } from 'react-bootstrap';
import Helmet from '../../Components/Helmet';
import './Prices.scss';

import photo1 from './../../Assets/Pictures/Kids/kids21.webp';
import photo2 from './../../Assets/Pictures/Pregnancy/pregnancy4.webp';

import photo3 from './../../Assets/Pictures/Wedding/wedding11.webp';
import photo4 from './../../Assets/Pictures/Wedding/wedding14.webp';

import photo5 from './../../Assets/Pictures/Family/family6.webp';
import photo6 from './../../Assets/Pictures/Family/family1.webp';

export default class Prices extends React.Component {
    render() {
        return (
            <>
                <h1 className="header">Priser</h1>
                <hr className="bg-success"></hr>
                <div className="product-box-section">
                    <div className="row justify-content-center">
                        <Image
                            className="product-box-image"
                            fluid
                            src={photo1}
                            alt="Photo"
                            key="børn_gravidfotografering_image"
                        />
                        <Image
                            className="product-box-image product-box-image-2"
                            fluid
                            src={photo2}
                            alt="Photo"
                            key="børn_gravidfotografering_image2"
                        />
                    </div>

                    <h2 className="product-box-header">Børn/gravidfotografering</h2>
                    <div className="product-box-container product-box-container-2">
                        <div className="product-box">
                            <h4>Børnefotografering</h4>
                            <li>60 minutters fotosession</li>
                            <li>20+ billeder i eget personlige online galleri</li>
                            <li>700kr.</li>
                            <li>+ 200kr. for hvert barn derudover</li>
                        </div>
                        <div className="product-box">
                            <h4>Gravidfotografering</h4>
                            <li>60 minutters fotosession</li>
                            <li>20+ billeder i eget personlige online galleri</li>
                            <li>700kr.</li>
                            <li>+ 200kr. hvis partner eller barn skal være med</li>
                        </div>
                    </div>
                </div>

                <div className="product-box-section">
                    <div className="row">
                        <Image
                            className="product-box-image"
                            fluid
                            src={photo3}
                            alt="Photo"
                            key="bryllupsfotografering_image"
                        />
                        <Image
                            className="product-box-image product-box-image-2"
                            fluid
                            src={photo4}
                            alt="Photo"
                            key="bryllupsfotografering_image2"
                        />
                    </div>

                    <h2 className="product-box-header">Bryllupsfotografering</h2>
                    <div className="wedding product-box-container product-box-container-3">
                        <div className="product-box">
                            <h4>Pakke 1</h4>
                            <li>5 timer</li>
                            <li>
                                Her får i de billeder der er blevet gode, det ligger som reelt på mellem 100-200
                                billeder i jeres eget online galleri.
                            </li>
                            <li>Denne er god til at ”følge dagen” og få billeder af både vielse og fest.</li>
                            <li>5000kr.</li>
                        </div>
                        <div className="product-box">
                            <h4>Pakke 2</h4>
                            <li>3 timer</li>
                            <li>
                                Her får i de billeder der er blevet gode, det ligger som reelt på omkring 100 -150 stk.
                                I får dem i jeres eget online galleri.
                            </li>
                            <li>Denne er god til at få billeder fra vielsen og eventuelt lidt parbilleder bagefter.</li>
                            <li>3500kr.</li>
                        </div>
                        <div className="product-box">
                            <h4>Pakke 3</h4>
                            <li>2 timer</li>
                            <li>
                                Her får i de billeder er blevet gode, ca. 100 stk. I modtager dem i jeres eget online
                                galleri.
                            </li>
                            <li>Denne er beregnet til selve ceremonien i f.eks. kirken eller ved en vielse.</li>
                            <li>2000kr.</li>
                        </div>
                        {/* <p>Disse pakker kan også benyttes til konfirmation og dåb.</p> */}
                    </div>
                </div>
                <div className="product-box-section">
                    <div className="row">
                        <Image
                            className="product-box-image product-box-image-2"
                            fluid
                            src={photo5}
                            alt="Photo"
                            key="familiefotografering_image"
                        />
                        <Image
                            className="product-box-image"
                            fluid
                            src={photo6}
                            alt="Photo"
                            key="familiefotografering_image2"
                        />
                    </div>

                    <h2 className="product-box-header">Familiefotografering</h2>
                    <div className="family product-box-container product-box-container-3">
                        <div className="product-box">
                            <h4>Familiepakke 1</h4> <li>1500kr. for 2 timers fotosession.</li>
                        </div>
                        <div className="product-box">
                            <h4>Familiepakke 2</h4>
                            <li>900kr. for 60 minutters fotosession.</li>
                        </div>
                        <div className="product-box">
                            <h4>Familiepakke 3</h4> <li>700kr. for 30 minutters fotosession.</li>
                        </div>
                    </div>
                </div>
                <div className="product-box-section">
                    <h2 className="product-box-header">Portrætfotografering</h2>
                    <div className="product-box-container product-box-container-2">
                        <div className="product-box">
                            <h4>CV-Portræt</h4>
                            <li>30 minutters fotosession</li>
                            <li>20+ billeder i eget personlige online galleri</li>
                            <li>500kr.</li>
                        </div>
                        <div className="product-box">
                            <h4>Portræt af Voksne</h4>
                            <li>60 minutters fotosession</li>
                            <li>20+ billeder i eget personlige online galleri</li>
                            <li>700kr.</li>
                        </div>
                    </div>
                </div>
                <Helmet
                    title="Grobund Fotografi - Priser"
                    description="Priser på alle slags fotografi som Grobund Fotografi tilbyder, heriblandt bryllups-, børne-, og babyfotografi."
                />
            </>
        );
    }
}
