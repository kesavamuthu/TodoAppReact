import React from "react";
import { Form } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
/* 
function Input(props) {
  return (
    <Form.Control
      size="lg"
      type="text"
      placeholder="Large text"
      onKeyDown={props.onKeyDown}
    />
  );
} */

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Large text"
          ref={this.inputRef}
          onKeyDown={(event) => {
            console.log(event.keyCode);
            if (this.inputRef.current.value && event.keyCode === 13) {
              this.props.onSave(this.inputRef.current.value.trim());
              this.inputRef.current.value = "";
            }
          }}
          style={{ display: "inline", width: "94%" }}
        />
      </>
    );
  }
}

export default Input;
