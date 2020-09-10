import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { init } from "emailjs-com";
init("user_85PaRF6pVpFdXE5A2cX6w");
const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='card card-default col-lg-4 col-md-5 col-sm-6 mx-auto mt-5 p-3 '>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Label className='text-success'>
            Brug denne kontakt formular, og så vender jeg tilbage hurtigst
            muligt :)
          </Form.Label>
        </Form.Row>
        <Form.Row>
          <Form.Control required type='text' placeholder='Navn' />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Row>
        <Form.Row className='mt-3'>
          <Form.Control required type='text' placeholder='Email' />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Row>
        <Form.Row className='mt-3'>
          <Form.Control
            as='textarea'
            rows='5'
            type='text'
            placeholder='Skriv en besked'
            required
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Row>
        <Button className='mt-3' type='submit'>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
