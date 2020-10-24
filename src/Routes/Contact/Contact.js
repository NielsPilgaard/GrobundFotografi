import React from 'react';
import loadable from '@loadable/component';

// Styling
import '../../index.scss';
import './Contact.scss';

const ContactForm = loadable(() => import('../../Components/ContactForm'));
const Helmet = loadable(() => import('./../../Components/Helmet'));

const Contact = () => {
    return (
        <main className="contact">
            <div className="contact-message-box text-center fade-in-5">
                Hvis du har spørgsmål eller vil have en snak så skriv her - Jeg vender tilbage til dig hurtigst muligt!
                <span role="img" aria-label="Smile Emoji">
                    😊
                </span>
            </div>
            <ContactForm />
            <Helmet
                title="Grobund Fotografi - Kontakt"
                description="På denne side finder du en kontaktformular og kontaktoplysninger for Grobund Fotografi"
            />
        </main>
    );
};

export default Contact;
