import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));

    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 7000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.user.name);
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount");
  }

  render() {
    console.log("render", this.state.user.name, this.state.count);
    return (
      <div>
        <h2>LifeCycle</h2>
        {this.state.user.name || "Loading"}
        <div>Count: {this.state.count}</div>
      </div>
    );
  }
}
