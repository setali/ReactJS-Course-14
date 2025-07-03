import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// #23AC45   count = 1
// #1224FD   count = 2

export default function AdvanceStateEffect() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("salam", count);
    setInterval(() => {
      console.log("Inside", count);
      setCount((c) => c + 1);
      // setCount((count) => {
      //   console.log("inside count", count);
      //   return count + 1;
      // });
    }, [1000]);
  }, []);

  return <div>Count: {count}</div>;
}
