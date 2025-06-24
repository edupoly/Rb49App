import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
function Todolist() {
  var [todos, setTodos] = React.useState([
    {
      title: "get veggies",
      id: uuidv4(),
      status: true,
    },
    {
      title: "clean car",
      id: uuidv4(),
      status: true,
    },
    {
      title: "goto goa",
      id: uuidv4(),
      status: false,
    },
    {
      title: "Get Car",
      id: uuidv4(),
      status: false,
    },
    {
      title: "School Fee",
      id: uuidv4(),
      status: true,
    },
    {
      title: "Make it happen",
      id: uuidv4(),
      status: false,
    },
  ]);
  function deleteTodo(id) {
    setTodos((cv) => {
      return cv.filter((todo) => {
        if (todo.id === id) {
          return false;
        } else {
          return true;
        }
      });
    });
  }
  function addTodo() {
    var newtodo = {
      title: document.getElementById("d1").value,
      id: uuidv4(),
    };
    setTodos((cv) => {
      return [...cv, newtodo];
    });
  }
  function toggleTodo(id) {
    setTodos((cv) => {
      var x = cv.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      });
      return [...x];
    });
  }
  return (
    <div className="border border-5 p-2 m-2 border-primary">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <Todo
              t={todo}
              i={i}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            ></Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
