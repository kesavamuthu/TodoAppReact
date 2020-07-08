import React from "react";
import { ListGroup, InputGroup, Container } from "react-bootstrap";
import { Row, Col, Badge, Alert, Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";

function List(props) {
  const listItems = props.task.map((e, i) => {
    if (e.task && !e.isDeleted)
      return (
        <ListGroup.Item
          action
          key={e.date}
          id={i}
          className={e.status ? "strike" : undefined}
        >
          <InputGroup.Prepend>
            <Container>
              <Row>
                <Col xs={1.5}>
                  <InputGroup.Radio
                    aria-label="Radio button for following text input"
                    name="what"
                    onClick={() => props.onUpdate(i)}
                  />
                </Col>
                <Col onClick={() => props.onChangeStatus(i)}>{e.task}</Col>
                <Col xs={1}>
                  <FaBeer onClick={() => props.onDelete(i)} />
                </Col>
              </Row>
            </Container>
          </InputGroup.Prepend>
        </ListGroup.Item>
      );
  });
  return <ListGroup>{listItems}</ListGroup>;
}

export default List;
