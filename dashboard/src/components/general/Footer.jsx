import AuhContext from "@/contexts/AuthContext";
import React, { Component } from "react";

export default class Footer extends Component {
  static contextType = AuhContext;

  render() {
    return (
      <div className="border p-2">
        <h2>Footer</h2>
        {this.context.isLoggedIn && (
          <div>Wellcome: {this.context.user.name}</div>
        )}
      </div>
    );
  }
}

// export default class Footer extends Component {
//   render() {
//     return (
//       <div className="border p-2">
//         <h2>Footer</h2>
//         <AuhContext.Consumer>
//           {({ user, isLoggedIn }) => {
//             return isLoggedIn && <div>Wellcome: {user.name}</div>;
//           }}
//         </AuhContext.Consumer>
//       </div>
//     );
//   }
// }

// export default function Footer() {
//   return (
//     <div className="border p-2">
//       <h2>Footer</h2>
//       <AuhContext.Consumer>
//         {({ user, isLoggedIn }) => {
//           return isLoggedIn && <div>Wellcome: {user.name}</div>;
//         }}
//       </AuhContext.Consumer>
//     </div>
//   );
// }
