import React, { Component } from "react";

function generateTodo() {
  const id = Date.now();

  return {
    id,
    title: `Title ${id}`,
  };
}

export default class AdvanceSetState extends Component {
  state = {
    todos: [],
    count: 0,
  };

  addTodo = () => {
    const todo = generateTodo();
    this.setState((state) => ({ todos: [...state.todos, todo] }));
    this.setState(
      (state) => ({
        count: state.todos.length,
      }),
      () => {
        console.log("State updated");
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.addTodo}>Add</button>
        <h3>Count: {this.state.count}</h3>
        <ol>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}
