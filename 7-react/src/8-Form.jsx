import React, { Component } from "react";

// React  => One Way Binding
// Angular, Vue  => Two Way Binding

export default class Form extends Component {
  handlleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    console.log(data.get("username"));
    console.log(data.get("password"));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Password</label>
            <input type="text" name="password" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// export default class Form extends Component {
//     state = {
//       username: "",
//       password: "",
//     };

//     handlleSubmit = (event) => {
//       event.preventDefault();
//       console.log(this.state);
//     };

//     handleChangeInput = (event) =>
//       this.setState({ [event.target.name]: event.target.value });

//     render() {
//       return (
//         <div>
//           <form onSubmit={this.handlleSubmit}>
//             <div>
//               <label>Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={this.state.username}
//                 onChange={this.handleChangeInput}
//               />
//             </div>
//             <div>
//               <label>Password</label>
//               <input
//                 type="text"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleChangeInput}
//               />
//             </div>

//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       );
//     }
//   }

// export default class Form extends Component {
//   state = {
//     username: "",
//     password: "",
//   };

//   handlleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//   };

//   handleChangeUsername = (event) =>
//     this.setState({ username: event.target.value });

//   handleChangePassword = (event) =>
//     this.setState({ password: event.target.value });

//   render() {
//     console.log(this.state.username);
//     return (
//       <div>
//         <form onSubmit={this.handlleSubmit}>
//           <div>
//             <label>Username</label>
//             <input
//               type="text"
//               value={this.state.username}
//               onChange={this.handleChangeUsername}
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="text"
//               value={this.state.password}
//               onChange={this.handleChangePassword}
//             />
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
