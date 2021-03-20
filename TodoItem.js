import React from "react";

function TodoItem(props) {
  // styles to apply when completed todo
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.data.completed}
        // onChange recives the event object in the function and then calls handleChange where we pass the id
        onChange={() => props.handleChange(props.data.id)}
      />
      <p style={props.data.completed ? completedStyle : null}>
        {props.data.text}
      </p>
    </div>
  );
}

export default TodoItem;
