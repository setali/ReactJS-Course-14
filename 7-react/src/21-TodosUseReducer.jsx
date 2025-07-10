import React from "react";
import { useReducer } from "react";
import { useState } from "react";

function getId(todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1;
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { title: action.payload, id: getId(state) }];

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

const addTodo = (payload) => ({ type: "ADD_TODO", payload });
const removeTodo = (payload) => ({ type: "REMOVE_TODO", payload });

export default function TodosUseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}

            <span
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ color: "red", margin: "5px" }}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
