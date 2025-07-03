import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Parent() {
  const [mount, setMount] = useState(true);

  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? "Unmount" : "Mount"}
      </button>
      {mount && <MyComponent />}
    </div>
  );
}

function MyComponent() {
  const [count, setCount] = useState(1);
  const [state, setState] = useState(5);
  const [users, setUsers] = useState([]);

  // cDM, cDU
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setState(state + 1);
  //       console.log("State", state);
  //     }, 5000);

  //     return () => {
  //       console.log("cleanup", state);
  //     };
  //   }, [state]);

  //   // cDM
  //   useEffect(() => {
  //     console.log("Mount");
  //   }, []);

  //   // cDM, cDU
  //   useEffect(() => {
  //     console.log("Salam");
  //   }, [count]);

  // cWU
  useEffect(() => {
    // Cleanup function
    return () => {
      console.log("Unmount");
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));

    return () => {
      console.log("Abort request");
      controller.abort();
    };
  }, []);

  //   console.log("Render");

  return (
    <div>
      State: {state}
      <hr />
      Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      <ol>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ol>
    </div>
  );
}
