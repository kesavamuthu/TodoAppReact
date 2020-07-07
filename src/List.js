import React from "react";

function List(props) {
  // console.log(props.task);

  const listItems = props.task.map((e, i) => {
    if (e.task)
      return (
        <li key={e.date} id={i} className={e.status && "strike"}>
          {e.task}
        </li>
      );
  });
  return <ul onClick={props.onClick}>{listItems}</ul>;
}

export default List;
