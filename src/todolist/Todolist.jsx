import React, { useReducer } from "react";
import { reducer, initialState } from "./todolist.reducer";
function Todolist() {
  var [state] = useReducer(reducer, initialState);
  return (
    <div className="border border-5 p-2 m-2 border-primary">
      <h1>Todolist</h1>
      <ul>
        {state.todos?.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
