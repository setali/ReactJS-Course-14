import React, { Component, PureComponent } from "react";

export default class Parent extends Component {
  state = {
    counter1: 0,
    counter2: 0,
  };

  render() {
    console.log("render Parent");
    return (
      <div>
        <div>
          Counter1: {this.state.counter1}
          <button
            onClick={() =>
              this.setState((s) => ({
                counter1: s.counter1 + 1,
              }))
            }
          >
            +
          </button>
        </div>
        <div>
          Counter2: {this.state.counter2}
          <button
            onClick={() =>
              this.setState((s) => ({
                counter2: s.counter2 + 1,
              }))
            }
          >
            +
          </button>
        </div>
        <Child counter={{ value: this.state.counter1 }} />
        <PureChild counter={{ value: this.state.counter1 }} />
      </div>
    );
  }
}

class Child extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (newProps.counter.value === this.props.counter.value) {
      return false;
    }

    return true;
  }

  render() {
    console.log("render Child", this.props.counter);
    return <div>Child: {this.props.counter.value}</div>;
  }
}

class PureChild extends PureComponent {
  render() {
    console.log("render PureChild", this.props.counter);

    return <div>PureChild: {this.props.counter.value}</div>;
  }
}
