import React, { Component } from "react";

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Parent component</h2>
        <ErrorBoundaries>
          <Child />
        </ErrorBoundaries>
      </div>
    );
  }
}

class ErrorBoundaries extends Component {
  state = { hasError: false };

  //   static getDerivedStateFromError(error) {
  //     console.log("=========>", error);

  //     return {
  //       hasError: true,
  //     };
  //   }

  componentDidCatch(error) {
    console.log("=========>", error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return "OOOps, there is an error !!!";
    }
    return this.props.children;
  }
}

class Child extends Component {
  state = { count: 0, user: { address: {} } };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
  }

  componentDidUpdate() {
    if (this.state.count === 4) {
      throw new Error("App Crashed.");
    }
  }

  render() {
    console.log(this.state.user);

    return (
      <div>
        Address: {this.state.user?.address?.city}
        <hr />
        Count: {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
