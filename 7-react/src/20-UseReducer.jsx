import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const DEFAULT_STATE = 1;

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return state + action.payload;

    case "SUB":
      return state - action.payload;

    case "RESET":
      return DEFAULT_STATE;

    default:
      return state;
  }
}

const add = (payload) => ({ type: "ADD", payload });
const sub = (payload) => ({ type: "SUB", payload });
const reset = () => ({ type: "RESET" });

export default function UseReducer() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return (
    <div>
      State = {state}
      <button onClick={() => dispatch(add(1))}>+</button>
      <button onClick={() => dispatch(add(2))}>+2</button>
      <button onClick={() => dispatch(add(3))}>+3</button>
      <button onClick={() => dispatch(sub(1))}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <hr />
      Count: {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
