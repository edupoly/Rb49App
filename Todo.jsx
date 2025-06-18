import React from "react";

function Todo(props) {
  return (
    <div>
      <li className="border border-5 p-2 m-2 border-primary">
        {props.t}
        <button className="m-2 btn btn-danger">Delete</button>
      </li>
    </div>
  );
}

export default Todo;
