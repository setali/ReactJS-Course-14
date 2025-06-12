import React, { Component } from "react";

export default class ListKeys extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={user.id}>{user.name}</li>
          ))}
          {/* {[<li key={1}>Ali</li>, <li key={2}>Eli</li>, <li key={3}>Qoli</li>]} */}
        </ul>
      </div>
    );
  }
}
