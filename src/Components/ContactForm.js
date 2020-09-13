import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

// Styles
import "react-toastify/dist/ReactToastify.css";
import { Card } from "react-bootstrap";

export default function ContactForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    document.getElementById("contact-form").reset();
    sendMessage(data);
  };

  return (
    <div>
      <Card
        variant='dark'
        className='mt-5 mx-1 col-10 col-sm-10 col-md-10 col-lg-6 col-xl-4 p-3 float-left'
      >
        Hvis du har spørgsmål eller vil tage en snak om en eventuel fotosession
        hos Grobund Fotografi, så skriv her. Jeg vender tilbage til dig hurtigst
        muligt!{" "}
        <span role='img' aria-label='Smile Emoji'>
          😊
        </span>
      </Card>

      <div className='card card-default col-10 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5 p-3 mx-1 contact-form float-right'>
        <Form onSubmit={handleSubmit(onSubmit)} id='contact-form'>
          <Form.Row>
            <Form.Label className='text-success'>
              Hvad kan jeg gøre for dig?
            </Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Control
              tabIndex='1'
              name='name'
              required
              placeholder='Indtast Navn'
              ref={register({ required: true })}
            />
          </Form.Row>
          <Form.Row className='mt-3'>
            <Form.Control
              tabIndex='2'
              name='email'
              id='email'
              placeholder='Indtast Email'
              required
              style={{
                border: errors.email && "2px solid red",
              }}
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </Form.Row>
          <Form.Row className='mt-3'>
            <Form.Control
              tabIndex='3'
              name='message'
              as='textarea'
              required
              rows='8'
              placeholder='Skriv en besked'
              ref={register({ required: true })}
            />
          </Form.Row>

          <Button
            tabIndex='4'
            variant='outline-success'
            className='mt-3'
            type='submit'
          >
            Send
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
}

function sendMessage(data) {
  let templateParams = {
    from_name: data.name + " (" + data.email + ")",
    to_name: "mail@grobundfotografi.dk",
    reply_to: data.email,
    message: data.message,
  };

  emailjs.send("GrobundFotografi", "template_0mhvozk", templateParams).then(
    function (response) {
      toast.success("Din besked blev sendt!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
    function (err) {
      toast.error(
        "Din besked var ikke i stand til at blive afsendt, prøv igen senere.",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    }
  );
}
