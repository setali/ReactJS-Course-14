import { useState } from "react";

// #12AE15  => count 1
// #14A2DC  => count 2

export default function Counter() {
  const [count, setCount] = useState(1);
  const [state, setState] = useState(
    () => (99999999n ** 999999n).toString().length
  );

  return (
    <div>
      Counter: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      State: {state}
      <button onClick={() => setState(state + 5)}>+</button>
    </div>
  );
}
//   export default function Counter() {
//     const state = useState(1);

//     console.log(state);

//     return (
//       <div>
//         Counter: {state[0]}
//         <button onClick={() => state[1](state[0] + 1)}>+</button>
//       </div>
//     );
//   }
