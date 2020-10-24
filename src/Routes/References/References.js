import React from 'react';
import loadable from '@loadable/component';

import ReviewCecilie from './../../Assets/Pictures/Reviews/cecilie.webp';
import ReviewGerd from './../../Assets/Pictures/Reviews/gerd.webp';
import ReviewMette from './../../Assets/Pictures/Reviews/mette.webp';
import ReviewMia from './../../Assets/Pictures/Reviews/mia.webp';
import ReviewStephanie from './../../Assets/Pictures/Reviews/stephanie.webp';
import ReviewTrine from './../../Assets/Pictures/Reviews/trine.webp';
import ReviewVivian from './../../Assets/Pictures/Reviews/vivian.webp';
import ReviewMaria from './../../Assets/Pictures/Reviews/maria.webp';

import './References.scss';

const Helmet = loadable(() => import('../../Components/Helmet'));
const FacebookReview = loadable(() => import('./../../Components/FacebookReview'));

const data = {
    reviews: [
        {
            src: ReviewCecilie,
            href: 'https://www.facebook.com/cecilie.ulfkjaer/posts/10222444915650966'
        },
        {
            src: ReviewGerd,
            href: 'https://www.facebook.com/GerdJensen149/posts/10158481486043024'
        },
        {
            src: ReviewMette,
            href: 'https://www.facebook.com/mette.birkemose.1/posts/10162534382650234'
        },
        {
            src: ReviewMia,
            href: 'https://www.facebook.com/miiaw/posts/10221846105961774'
        },
        {
            src: ReviewStephanie,
            href: 'https://www.facebook.com/ostehaps2807/posts/10220939427779189'
        },
        {
            src: ReviewTrine,
            href: 'https://www.facebook.com/permalink.php?story_fbid=10157740146472145&id=590002144'
        },
        {
            src: ReviewVivian,
            href: 'https://www.facebook.com/vivian.skalshenckel/posts/10221220134585469'
        },
        {
            src: ReviewMaria,
            href: 'https://www.facebook.com/permalink.php?story_fbid=212663969758121&id=100030435576969'
        }
    ]
};

export default class References extends React.Component {
    render() {
        return (
            <>
                <h1 className="header">Anmeldelser</h1>
                <hr className="bg-success"></hr>
                <h4 className="subheader">5 ud af 5 stjerner på Facebook!</h4>
                <div className="facebook-reviews">
                    {data.reviews.map((review) => (
                        <FacebookReview href={review.href} src={review.src} />
                    ))}
                </div>
                <Helmet
                    title="Grobund Fotografi - Referencer"
                    description="Her kan du læse lidt om hvad folk synes om Grobund."
                />
            </>
        );
    }
}
