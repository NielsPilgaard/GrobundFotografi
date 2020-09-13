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
    this.state = {
      name: "",
      email: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: "",
      },
      validated: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.baseState = this.state;
  }

  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(value)
          ? ""
          : "Indtast en gyldig email.";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (this.state.errors) {
      event.stopPropagation();
    }

    this.setState({ validated: true });
    //let valid = true;

    // if (valid) {
    //   console.info("Valid Form");
    //   this.sendMessage(event);
    // } else {
    //   console.error("Invalid Form");
    // }
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
    const { errors, validated } = this.state;
    return (
      <div className='card card-default col-lg-3 col-md-5 col-sm-6 mt-5 p-3 float-right contact-form'>
        <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
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
              placeholder='Indtast Navn'
              onChange={this.onChange.bind(this)}
              value={this.state.name}
            />
          </Form.Row>
          <Form.Control.Feedback type='invalid'>
            Indtast navn.
          </Form.Control.Feedback>
          <Form.Row className='mt-3'>
            <Form.Control
              tabIndex='2'
              name='email'
              id='email'
              required
              type='text'
              placeholder='Indtast Email'
              onChange={this.onChange.bind(this)}
              value={this.state.email}
            />
            {errors.email.length > 0 && (
              <span className='error'>{errors.email}</span>
            )}
          </Form.Row>
          <Form.Control.Feedback type='invalid'>
            Ugyldig email.
          </Form.Control.Feedback>
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
