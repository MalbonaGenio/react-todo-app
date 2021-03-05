import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
    }
  }
  render() {
    const todoComponent = this.state.todos.map((data) => (
      <TodoItem key={data.id} data={data} />
    ));
    return <div className="todo-list">{todoComponent}</div>;
  }
  
}

export default App;
