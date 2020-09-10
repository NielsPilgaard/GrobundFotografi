// class Email extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//       const [validated, setValidated] = useState(false);
//     }

// handleInputChange(event) {
//     event.preventDefault();
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;
//     this.setState({ [name]: value });
//   }
// sendMessage(event) {
//     event.preventDefault();

//     const templateParams = {
//       from_name: this.state.name + " (" + this.state.email + ")",
//       to_name: "mail@grobundfotografi.dk",
//       message: this.state.message,
//     };
//     emailjs
//       .send(
//         "outlook",
//         "Grobund Kontakt fra " + this.state.name + "(" + this.state.email + ")",
//         templateParams,
//         "%REACT_APP_EMAILJS_USERID%"
//       )
//       .then(
//         function (response) {
//           toast.success("Din besked blev sendt!", {
//             position: toast.POSITION.BOTTOM_CENTER,
//           });
//         },
//         function (err) {
//           toast.error("Din besked var ikke i stand til at blive afsendt.");
//         }
//       );
//     this.setState({
//       name: "",
//       email: "",
//       feedback: "",
//     });
//   }
