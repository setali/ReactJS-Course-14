import React, { Component, createRef } from "react";

export default class CreateRef extends Component {
  state = { show: false };

  inputRef = createRef();

  toggle = () => {
    this.setState(
      (s) => ({ show: !s.show }),
      () => {
        this.inputRef.current?.focus();
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show && <input ref={this.inputRef} />}
      </div>
    );
  }
}
