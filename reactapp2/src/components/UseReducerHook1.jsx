
 import { useReducer } from "react";

const initialState = { name: "", email: "" };

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.value };
    case "setEmail":
      return { ...state, email: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

 export default function UseReducerHook1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
        <h3>useReducer  - Managing Complex States</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={state.name}
        placeholder="Enter name"
        onChange={(e) =>
          dispatch({ type: "setName", value: e.target.value })
        }
      />
      <br />
      <input
        type="email"
        value={state.email}
        placeholder="Enter email"
        onChange={(e) =>
          dispatch({ type: "setEmail", value: e.target.value })
        }
      />
      <br />
      <button type="submit">Submit</button>   
      <button type="button" onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </form>
    </div>
  );
}
 
