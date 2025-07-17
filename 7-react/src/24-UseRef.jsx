import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function UseRef() {
  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={myRef} />
    </div>
  );
}
