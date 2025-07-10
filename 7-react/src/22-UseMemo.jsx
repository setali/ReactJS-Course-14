import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const data = [
  { id: 1, title: "Yek", parentId: null },
  { id: 2, title: "Do", parentId: 1 },
  { id: 3, title: "Se", parentId: 1 },
  { id: 4, title: "Chahr", parentId: 2 },
  { id: 5, title: "Panj", parentId: 2 },
  { id: 6, title: "Shesh", parentId: 3 },
];

const treeData = [
  {
    id: 1,
    title: "Yek",
    children: [
      {
        id: 2,
        title: "Do",
        children: [
          { id: 4, title: "Chahr" },
          { id: 5, title: "Panj" },
        ],
      },
      { id: 3, title: "Se", children: [{ id: 6, title: "Shesh" }] },
    ],
  },
];

export default function Parent() {
  const [mount, setMount] = useState(true);

  return (
    <div>
      <button onClick={() => setMount((m) => !m)}>
        {mount ? "Unmount" : "Mount"}
      </button>
      {mount && <Child />}
    </div>
  );
}

function heavyProcess() {
  return (99999n ** 999999n).toString().length;
}

function getData() {
  return data;
}

function Child() {
  const [count, setCount] = useState(1);

  console.log("render1");
  useEffect(() => {
    console.log("useEffect");
    setInterval(() => setCount((c) => c + 1), 100000);
  }, []);

  const data = getData();
  console.log("render2");

  const newData = useMemo(() => {
    console.log("useMemo");
    //...
  }, [data]);
  console.log("render3");

  const value = useMemo(() => {
    return heavyProcess();
  }, []);

  return (
    <div>
      Count: {count}
      <hr />
      Value: {value}
    </div>
  );
}
