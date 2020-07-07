import React from "react";
// import ReactDOM from "react-dom";
import { Alert } from "react-bootstrap";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    // console.log("hai");
    return <FormattedTime date={this.state.date} />;
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
    console.log(this.state);
  }

  componentWillMount() {
    clearInterval(this.timerId);
    console.log("unmoutn");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
}

function FormattedTime(props) {
  let tmp = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  return (
    <>
      <Alert variant={tmp[Math.floor(Math.random() * tmp.length)]}>
        <h1>The time is {props.date.toLocaleTimeString()}</h1>
      </Alert>
    </>
  );
}

export default Clock;
