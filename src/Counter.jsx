import React from "react";
import { connect } from "react-redux";
import { decCount, incCount } from "./store/actioncreators";

function Counter(props) {
  console.log(props);
  return (
    <div className="border border-5 p-3 m-2 border-primary">
      <h1>Counter:{props.count}</h1>
      <button
        onClick={() => {
          props.dispatch(incCount());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.dispatch(decCount());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default connect((store) => {
  return store.counterReducer;
})(Counter);
