import React from "react";
import Input from "./Input";
import List from "./List";
import BottomItems from "./BottomItems";
import { FaBeer, FaSlidersH } from "react-icons/fa";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      prev: [],
      isDeleted: "",
    };
    this.save = this.save.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.delete = this.delete.bind(this);
  }

  async save(value) {
    const tmp = this.state.prev;
    tmp.push({ task: value, status: "", date: new Date().getTime() });
    await this.setState({
      lists: [...tmp],
      prev: [...tmp],
    });
    localStorage.setItem("all tasks", JSON.stringify(this.state));
  }

  changeTab = (event) => {
    const id = Number(event.target.id);
    const lists = this.state.prev.map((e) => {
      return { ...e };
    }); //to avoid mutating object
    let listsTmp;
    if (!lists) return;
    switch (id) {
      case 1:
        listsTmp = lists.filter((e) => !e.status);
        this.setState({
          lists: listsTmp,
          prev: this.state.prev,
        });
        break;
      case 2:
        listsTmp = lists.filter((e) => e.status);
        if (!listsTmp) return;
        listsTmp = listsTmp.map((e) => {
          e.status = false;
          return e;
        });
        this.setState({
          lists: [...listsTmp],
          prev: this.state.prev,
        });
        break;
      default:
        this.setState({
          lists: this.state.prev,
          prev: this.state.prev,
        });
    }
  };
  changeStatus(index) {
    // if (!event.target.id) return;
    const tmp = this.state.lists;
    tmp[index].status = !tmp[index].status;
    this.setState({
      lists: [...tmp],
      prev: tmp,
    });
    localStorage.setItem("all tasks", JSON.stringify(this.state));
  }

  componentDidMount() {
    if (localStorage.getItem("all tasks")) {
      this.setState(JSON.parse(localStorage.getItem("all tasks")));
    }
  }

  delete(index) {
    let tmp = this.state.prev;
    tmp[index].isDeleted = true;
    this.setState({
      lists: [...tmp],
      prev: [...tmp],
    });
    localStorage.setItem("all tasks", JSON.stringify(this.state));
  }

  update(index) {
    let tmp = this.state.prev;
    // tmp[index].task =
  }

  render() {
    let bottomItems = ["All", "Active", "Completed"];
    return (
      <>
        <div className="shadow-lg">
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              style={{ display: "inline-block" }}
            >
              <FaSlidersH />
            </Accordion.Toggle>
            <Input onSave={this.save} />
            <Accordion.Collapse eventKey="0">
              <List
                task={this.state.lists}
                onChangeStatus={this.changeStatus}
                onDelete={this.delete}
              />
            </Accordion.Collapse>
            <BottomItems
              arr={bottomItems}
              onChangeTab={this.changeTab}
              refs={this.refs}
            />
          </Accordion>
        </div>
      </>
    );
  }
}

export default ToDo;
