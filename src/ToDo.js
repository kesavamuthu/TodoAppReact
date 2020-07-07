import React from "react";
import Input from "./Input";
import List from "./List";
import { Container, Row, Col, Badge, Alert } from "react-bootstrap";
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    // this.refs = [React.createRef(), React.createRef(), React.createRef()];
  }

  onKeyDown(e) {
    let passedVal = e.target.value.trim();
    // console.log(this);
    // console.log(e.keyCode);
    if (e.keyCode == 13 && passedVal) {
      const value = e.target.value;
      e.target.value = "";
      const tmp = this.state.lists;
      tmp.push({ task: value, status: "", date: new Date().getTime() });
      this.setState({
        lists: [...tmp],
      });
    }
  }
  changeTab = (event) => {
    // console.log(event.target.id);
    console.log("in change tab");
    if (!event)
      return <List task={this.state.lists} onClick={this.changeStatus} />;
    console.log("in change tab", event.target.id);
    const tmp = this.state.lists;
    this.setState({
      lists: [...tmp],
    });
    if (event.target.id == 1) {
      const listDetails = Object.create(this.state.lists).filter(
        (e) => e.status && e
      );
      console.log(<List task={listDetails} />);
      return <List task={listDetails} />;
    }
    return <List task={this.state.lists} onClick={this.changeStatus} />;
  };

  changeStatus(event) {
    // console.log(event.target);
    const tmp = this.state.lists;
    tmp[event.target.id].status = true;
    this.setState({
      lists: [...tmp],
    });
    console.table(this.state.lists);
  }

  render() {
    let bottomItems = ["All", "Active", "Completed"];
    console.log("redner in");

    return (
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Input onKeyDown={this.onKeyDown} />
            {this.changeTab()}
            <BottomItems
              arr={bottomItems}
              onClick={this.changeTab}
              refs={this.refs}
            />
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    );
  }
}

const BottomItems = (props) => {
  function ano(a) {
    console.log(props);
    props.onClick(a.target.id);
  }
  // let refs = props.refs;
  const buttons = props.arr.map((e, i) => (
    <Badge key={i} id={i} variant="light" value={e} onClick={props.onClick}>
      {e}
    </Badge>
  ));
  return <Alert variant="primary">{buttons}</Alert>;
};
export default ToDo;
