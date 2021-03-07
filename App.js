import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    // binding the method to this
    this.handleChange = this.handleChange.bind(this);
  }
  // recieves the id from the onchange function when fired
  handleChange(id) {
    // create a new array when using .map where the only thing that cnages is the completed true/false value of the checkbox in the todoItem that matched the id that is clicked
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          //returns a new object using spread and changing manually the value for completed
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  render() {
    const todoComponent = this.state.todos.map((data) => (
      <TodoItem key={data.id} data={data} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoComponent}</div>;
  }
}

export default App;
