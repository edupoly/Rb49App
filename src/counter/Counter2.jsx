import React, { useReducer } from "react";
import { reducer, initialState } from "./counter.reducer";
function Counter2() {
  var [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="border border-5 p-2 m-2 border-info">
      <h1>useReducer Counter:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter2;
