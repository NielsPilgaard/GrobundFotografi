import React from "react";
import ContactForm from "../../Components/ContactForm";
import Helmet from "./../../Components/Helmet";
// Styling
import "../../index.scss";

const Contact = () => {
  return (
    <div>
      <Helmet
        title='Grobund Fotografi - Kontakt'
        description='På denne side finder du en kontaktformular og kontaktoplysninger for Grobund Fotografi'
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
