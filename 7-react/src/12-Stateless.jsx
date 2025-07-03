import React, { Component } from "react";

export default class Stateless extends Component {
  state = {
    users: [
      { id: 1, name: "Ali" },
      { id: 2, name: "Eli" },
      { id: 3, name: "Qoli" },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

function User(props) {
  return <div>{props.user.name}</div>;
}
