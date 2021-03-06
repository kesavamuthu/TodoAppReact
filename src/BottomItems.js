import React from "react";
import { Alert, Button, Badge } from "react-bootstrap";

function BottomItems(props) {
  const buttons = props.arr.map((e, i) => (
    <Button
      key={i}
      id={i}
      variant="light"
      value={e}
      onClick={props.onChangeTab}
      style={{ margin: "0px 10px" }}
    >
      {e}
    </Button>
  ));
  return (
    <Alert variant="light" style={{ textAlign: "center" }}>
      <Badge className={"bottomPositionForSpan"}>
        {props.count +
          (props.selectedTab === 2 ? " items completed" : " items left")}
      </Badge>
      {buttons}
    </Alert>
  );
}

export default BottomItems;
