import React from "react";
import { useState } from "react";

export default function Parent() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  console.log("Parent", counter1, counter2);
  return (
    <div>
      <button onClick={() => setCounter1((c) => c + 1)}>Counter 1</button>
      <button onClick={() => setCounter2((c) => c + 1)}>Counter 2</button>
      <div>Counter 1: {counter1}</div>
      <div>Counter 2: {counter2}</div>
      <MyComponent counter={counter1} />
      <MyMemoComponent counter={counter1} />
    </div>
  );
}

function MyComponent({ counter }) {
  console.log("MyComponent", counter);
  return <div>MyComponent {counter}</div>;
}

const MyMemoComponent = React.memo(function ({ counter }) {
  console.log("MyMemoComponent", counter);
  return <div>MyMemoComponent {counter}</div>;
});
