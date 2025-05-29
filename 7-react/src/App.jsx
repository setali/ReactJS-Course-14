import React, { Component } from "react";
import Counter from "./1-Counter";

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter defaultValue={1} />
        <Counter defaultValue={10} />
        <Counter defaultValue={15} />
        <Counter />
      </div>
    );
  }
}
