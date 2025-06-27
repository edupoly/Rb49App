import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterSlice";

function Counter() {
  var { count } = useSelector((state) => state.counterR);
  var dispatch = useDispatch();

  return (
    <div className="border border-5 p-3 m-2 border-info">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          dispatch(inc());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(dec());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
