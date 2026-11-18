
import { useReducer } from "react";

const initialState = { count: 0 };

function reducerx(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

 export default function UseReducerHook() {
  const [state, dispatchx] = useReducer(reducerx, initialState);

  return (
    <div>
        <h3>useReducer Hook Example</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatchx({ type: "increment" })}>+</button>
      <button onClick={() => dispatchx({ type: "decrement" })}>-</button>
      <button onClick={() => dispatchx({ type: "reset" })}>Reset</button>
    </div>
  );
}
