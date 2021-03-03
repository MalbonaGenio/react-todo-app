import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
  const todoComponent = todosData.map((data) => (
    <TodoItem key={data.id} data={data} />
  ));
  return <div className="todo-list">{todoComponent}</div>;
}

export default App;
