import React from "react";

function Todo(props) {
  return (
    <div>
      <li className="border border-1 p-1 m-1 border-primary">
        <span style={props.t.status ? { textDecoration: "line-through" } : {}}>
          {props.t.title}
        </span>
        <button
          className={props.t.status ? "btn btn-info" : "btn btn-success"}
          onClick={() => {
            props.toggleTodo(props.t.id);
          }}
        >
          {props.t.status ? "Undo" : "Done"}
        </button>
        <button
          className="m-1 btn btn-danger"
          onClick={() => {
            props.deleteTodo(props.t.id);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default Todo;
