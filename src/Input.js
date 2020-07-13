import React from "react";
import { Form } from "react-bootstrap";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.tmp = this.props.value;
  }

  render() {
    return (
      <>
        <Form.Control
          size="lg"
          type="text"
          placeholder="What needs to be done ?"
          ref={this.inputRef}
          value={this.tmp}
          onKeyDown={(event) => {
            console.log(this.props, this.inputRef.current.value.trim());
            if (
              this.inputRef.current.value &&
              event.keyCode === 13 &&
              this.props.index === undefined
            ) {
              this.props.onSave(this.inputRef.current.value.trim());
              this.inputRef.current.value = "";
            } else if (event.keyCode === 13 && this.props.index) {
              this.props.replace(
                this.inputRef.current.value.trim(),
                this.props.index
              );
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
