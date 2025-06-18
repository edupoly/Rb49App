import React from "react";
import Todo from "./Todo";
function Todolist() {
  var [todos, setTodos] = React.useState([
    "get veggies",
    "clean car",
    "goto goa",
  ]);

  return (
    <div className="border border-5 p-2 m-2 border-primary">
      <h1>Todolist</h1>
      <ul>
        {todos.map((todo) => {
          return <Todo t={todo}></Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
