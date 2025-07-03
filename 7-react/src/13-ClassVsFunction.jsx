import React, { Component } from "react";
import { useState } from "react";

export default function FunctionBase() {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

// export default class ClassBase extends Component {
//   state = {
//     counter: 1,
//   };

//   render() {
//     return (
//       <div>
//         Counter: {this.state.counter}
//         <button
//           onClick={() =>
//             this.setState((state) => ({ counter: state.counter + 1 }))
//           }
//         >
//           +
//         </button>
//       </div>
//     );
//   }
// }
