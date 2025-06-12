import React, { Component } from "react";

export default class UnMounting extends Component {
  state = { mount: true };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ mount: !this.state.mount })}>
          {this.state.mount ? "Unmount" : "Mount"}
        </button>
        {this.state.mount && <Counter />}
        <div style={{ visibility: this.state.mount ? "visible" : "hidden" }}>
          <Counter />
        </div>
      </div>
    );
  }
}

class Counter extends Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("componentDidMount");
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return <div>Counter: {this.state.count}</div>;
  }
}
