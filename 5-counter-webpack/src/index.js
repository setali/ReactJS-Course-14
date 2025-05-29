import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootContainer = document.querySelector("#root");

const root = createRoot(rootContainer);

root.render(<App />);
