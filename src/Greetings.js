import React from "react";
// import { Alert } from "react-bootstrap";
import Toggle from "./Toggle";
class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.current,
    };
    this.handleClick.bind(this);
  }

  //   status() {
  //     const tmp = this.state;
  //     return tmp.isLoggedIn ? <Alert>Welcome</Alert> : <Alert>Login again</Alert>;
  //   }
  handleClick = () => {
    // console.log("call is ");

    this.setState((state) => ({
      isLoggedIn: !state.isLoggedIn,
    }));
    // console.log(this.state);
  };
  render() {
    const tmp = this.state;
    console.log("in render", this.state);
    return <Toggle onClick={this.handleClick} current={!tmp.isLoggedIn} />;
  }
}

export default Greetings;
