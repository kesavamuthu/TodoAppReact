import React from "react";
import { Form } from "react-bootstrap";

function Input(props) {
  return (
    <Form.Control
      size="lg"
      type="text"
      placeholder="Large text"
      onKeyDown={props.onKeyDown}
    />
  );
}

export default Input;
