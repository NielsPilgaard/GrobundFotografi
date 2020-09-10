import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className='mx-auto col-4'>
        <form
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <input
            type='text'
            id='name'
            name='name'
            onChange={this.handleInputChange.bind(this)}
            placeholder='Dit navn'
            required
            className='form-control'
            value={this.state.subject}
          />
          <input
            type='email'
            id='email'
            name='email'
            onChange={this.handleInputChange.bind(this)}
            placeholder='Din email'
            required
            className='form-control'
            value={this.state.email}
          />
          <textarea
            type='text'
            id='message'
            name='message'
            onChange={this.handleInputChange.bind(this)}
            placeholder='Skriv en besked :)'
            required
            className='form-control'
            value={this.state.message}
          />
          <button
            className='btn btn-success'
            type='submit'
            onClick={this.sendMessage.bind(this)}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
  sendMessage(event) {
    event.preventDefault();

    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "mail@grobundfotografi.dk",
      message: this.state.message,
    };
    emailjs
      .send(
        "outlook",
        "Grobund Kontakt fra " + this.state.name + "(" + this.state.email + ")",
        templateParams,
        "%REACT_APP_EMAILJS_USERID%"
      )
      .then(
        function (response) {
          toast.success("Din besked blev sendt!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        },
        function (err) {
          toast.error("Din besked var ikke i stand til at blive afsendt.");
        }
      );
    this.setState({
      name: "",
      email: "",
      feedback: "",
    });
  }

  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }
}

export default Email;
