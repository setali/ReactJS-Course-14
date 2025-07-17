import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState();

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 2000);

    return () => {};
  }, []);

  const cb = useCallback((node) => {
    console.log(count, node);
    node?.focus();
  }, []);

  const myH2Ref = useCallback((node) => {
    node && setHeight(node.getBoundingClientRect().height);
  }, []);

  return (
    <div>
      <h3 ref={myH2Ref}>Ali Mousavi</h3>
      Height: {height}
      <hr />
      Count: {count}
      <hr />
      <input ref={cb} />
    </div>
  );
}
