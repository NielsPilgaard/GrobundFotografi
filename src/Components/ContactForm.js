import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs, { init } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

init("user_85PaRF6pVpFdXE5A2cX6w");

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.baseState = this.state;
  }
  onChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (form.checkValidity() === false || !this.state.email.match(emailRegex)) {
      event.stopPropagation();
    }

    this.sendMessage(event);
  };
  sendMessage(event) {
    event.preventDefault();

    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "mail@grobundfotografi.dk",
      reply_to: this.state.email,
      message: this.state.message,
    };

    this.resetForm();

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
  resetForm = () => {
    this.setState(this.baseState);
  };
  render() {
    return (
      <div className='card card-default col-lg-3 col-md-5 col-sm-6 mt-5 p-3 float-right contact-form'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Label className='text-success'>
              Brug denne kontakt formular, og så vender jeg tilbage hurtigst
              muligt :)
            </Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Control
              tabIndex='1'
              name='name'
              id='name'
              required
              type='text'
              placeholder='Navn'
              onChange={this.onChange.bind(this)}
              value={this.state.name}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Row>
          <Form.Row className='mt-3'>
            <Form.Control
              tabIndex='2'
              name='email'
              id='email'
              required
              type='text'
              placeholder='Email'
              onChange={this.onChange.bind(this)}
              value={this.state.email}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Row>
          <Form.Row className='mt-3'>
            <Form.Control
              tabIndex='3'
              name='message'
              id='message'
              as='textarea'
              rows='8'
              type='text'
              placeholder='Skriv en besked'
              onChange={this.onChange.bind(this)}
              required
              value={this.state.message}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Row>
          <Button
            tabIndex='4'
            variant='outline-success'
            className='mt-3'
            type='submit'
            value='submit'
          >
            Send
          </Button>
        </Form>
        <ToastContainer />
      </div>
    );
  }
}
