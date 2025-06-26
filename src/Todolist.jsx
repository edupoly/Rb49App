import React from "react";
import { connect } from "react-redux";
function Todolist(props) {
  console.log("todolist component::", props);
  var [newtodo, setNewTodo] = React.useState("");
  return (
    <div className="border border-5 p-3 m-2 border-info">
      <h1>Todolist</h1>
      <input
        type="text"
        id="d2"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.dispatch({
            type: "ADD_TODO",
            payload: newtodo,
          });
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li
              className={
                todo.status ? "text-decoration-line-through m-2" : "m-2"
              }
            >
              {todo.title}
              {todo.status && (
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    props.dispatch({ type: "TOGGLE_STATUS", payload: todo.id });
                  }}
                >
                  Undo
                </button>
              )}
              {!todo.status && (
                <button
                  className="btn btn-info"
                  onClick={() => {
                    props.dispatch({ type: "TOGGLE_STATUS", payload: todo.id });
                  }}
                >
                  Done
                </button>
              )}

              <button
                onClick={() => {
                  props.dispatch({ type: "DELETE_TODO", payload: todo.id });
                }}
              >
                Delete Todo
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect((store) => {
  return store.todoReducer;
})(Todolist);
