import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistSlice";

function Todolist() {
  var { todos } = useSelector((state) => state.todolistR);
  var dispatch = useDispatch();
  var [newTodo, setNewTodo] = React.useState("");
  return (
    <div className="border border-5 p-3 m-2 border-primary">
      <h1>Todolist:</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(newTodo));
        }}
      >
        Add New Todo
      </button>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
