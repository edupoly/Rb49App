import React from "react";

function Counter(props) {
    var { step, children } = props;
  //state
  var [count, setCount] = React.useState(+children);
  //action
  function inc() {
    setCount(count + step);
  }
  function dec() {
    setCount(count - step);
  }
  //UI
  return (
    <div className="border border-5 p-3 m-2 border-info">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          inc();
        }}
        className="btn btn-success me-2"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
        className="btn btn-danger me-2"
      >
        Decrement
      </button>
      <button onClick={()=>{props.a()}}>Peddodu</button>
    </div>
  );
}

export default Counter;
