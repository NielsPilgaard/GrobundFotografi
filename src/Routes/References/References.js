import React from 'react';
import Helmet from './../../Components/Helmet';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import './References.scss';

export default class References extends React.Component {
    componentDidMount() {
        var aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        aScript.async = 'true';
        document.head.appendChild(aScript);
        // aScript.onload = function () {
        //     var trustbox = document.getE('trustbox');
        //     window.Trustpilot.loadFromElement(trustbox);
        // };
    }
    render() {
        return (
            <>
                <h1 className="header">Anmeldelser</h1>
                <hr className="bg-success"></hr>
                <h4 className="subheader">5 ud af 5 stjerner på Facebook!</h4>
                <div className="facebook-reviews">
                    <FacebookProvider appId="667013567353699">
                        <span role="img" aria-label="5 stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <EmbeddedPost href="https://www.facebook.com/vivian.skalshenckel/posts/10221220134585469" />
                        <span role="img" aria-label="5 stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <EmbeddedPost href="https://www.facebook.com/miiaw/posts/10221846105961774" />
                        <span role="img" aria-label="5 stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <EmbeddedPost href="https://www.facebook.com/permalink.php?story_fbid=10157740146472145&id=590002144" />
                        <span role="img" aria-label="5 stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <EmbeddedPost href="https://www.facebook.com/permalink.php?story_fbid=212663969758121&id=100030435576969" />
                        <span role="img" aria-label="5 stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <EmbeddedPost href="https://www.facebook.com/mette.birkemose.1/posts/10162534382650234" />
                        <span role="img" aria-label="5 stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <EmbeddedPost href="https://www.facebook.com/ostehaps2807/posts/10220939427779189" />
                        <span role="img" aria-label="5 stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <EmbeddedPost href="https://www.facebook.com/GerdJensen149/posts/10158481486043024" />
                        <span role="img" aria-label="5 stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <EmbeddedPost href="https://www.facebook.com/cecilie.ulfkjaer/posts/10222444915650966" />
                    </FacebookProvider>
                </div>
                {/* Use this one in the future - Currently disabled because of how average score is calculated and set low
                 <div
                    className="trustpilot-widget"
                    data-locale="da-DK"
                    data-template-id="5613c9cde69ddc09340c6beb"
                    data-businessunit-id="5f71ffcfbc819a00018e9397"
                    data-style-height="100%"
                    data-style-width="100%"
                    data-theme="light"
                >
                    <a href="https://dk.trustpilot.com/review/grobundfotografi.dk" target="_blank" rel="noopener">
                        Trustpilot
                    </a>
                </div> */}
                <div
                    className="trustpilot-widget"
                    data-locale="da-DK"
                    data-template-id="5419b6a8b0d04a076446a9ad"
                    data-businessunit-id="5f71ffcfbc819a00018e9397"
                    data-style-height="24px"
                    data-style-width="100%"
                    data-theme="light"
                >
                    <a
                        href="https://dk.trustpilot.com/review/grobundfotografi.dk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Trustpilot
                    </a>
                </div>
                <Helmet
                    title="Grobund Fotografi - Referencer"
                    description="Her kan du læse lidt om hvad folk synes om Grobund."
                />
            </>
        );
    }
}
