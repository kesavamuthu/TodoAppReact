// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callApi() {
//     fetch("http://localhost:9000/testAPI")
//       .then((res) => res.text())
//       .then((res) => this.setState({ apiResponse: res }))
//       .catch((err) => err);
//   }

//   componentDidMount() {
//     setTimeout(this.callApi(), 10000);
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//           <p className="App-intro">hello {this.state.apiResponse}</p>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

/**                                                          */

import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";
import { Button, Alert } from "react-bootstrap";
import Greetings from "./Greetings";
import ToDo from "./ToDo";
function App() {
  return (
    <>
      {/* <Clock />
      <Clock />
      <Clock />
      <Button onClick={what}>WTF</Button>
      <Greetings current={false} />
      <Alerts></Alerts> */}
      <ToDo />
    </>
  );
}

function what() {
  alert("hai");
}

function Alerts() {
  return [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));
}
export default App;
