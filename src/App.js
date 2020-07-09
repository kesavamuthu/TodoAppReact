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
import "./App.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ToDo from "./ToDo";
function App() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={2} />
          <Col sm={8}>
            <h1 style={{ textAlign: "center", font: "oblique normal 1.6em" }}>
              todos
            </h1>
            <ToDo />
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
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
