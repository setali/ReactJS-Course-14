import React from "react";
import List from "./List";
import Add from "./Add";
import Detail from "./Detail";
import { Route, Routes } from "react-router";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}
