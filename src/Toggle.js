import React from "react";
import { Button } from "react-bootstrap";
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { isToggleOn: props.current };

//     // This binding is necessary to make `this` work in the callback
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((state) => ({
//       isToggleOn: !state.isToggleOn,
//     }));
//   }

function Toggle(props) {
  let status = props.current;
  return (
    <Button variant={status ? "primary" : "warning"} onClick={props.onClick}>
      {status ? "Logged in successfully " : "Logged out"}
    </Button>
  );
}
// }

export default Toggle;
