import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.data.completed}
        onChange={() => console.log("checked")}
      />
      <p>{props.data.text}</p>
    </div>
  );
}

export default TodoItem;
