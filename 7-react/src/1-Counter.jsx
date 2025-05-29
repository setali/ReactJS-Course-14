import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // this.increase = this.increase.bind(this);
    this.state = {
      counter: props.defaultValue,
    };
  }

  //   static defaultProps = {
  //     defaultValue: 0,
  //   };

  //   increase = function () {
  //     this.setState({ counter: this.state.counter + 1 });
  //   };

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div>
        <span>Counter: {this.state.counter}</span>
        {/* <button onClick={this.increase.bind(this)}>Inc</button> */}
        {/* <button onClick={() => this.increase()}>Inc</button> */}
        <button onClick={this.increase}>Inc</button>
        <button onClick={this.decrease}>Dec</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  defaultValue: 0,
};
