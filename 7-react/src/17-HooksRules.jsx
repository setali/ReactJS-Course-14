import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function HooksRules() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    return "Qoli";
  }

  const [ali, setAli] = useState();

  //   for (let i = 0; i < 5; i++) {
  //     const [first, setFirst] = useState(1);
  //   }

  //   useEffect(() => {
  //     const [state, setstate] = useState();
  //   }, []);

  return <div>HooksRules</div>;
}

// [useState, useState, useState, useState]
// [5,2,1,3]
