import Counter from "./Counter";
import StudentForm from "./StudentForm";
import StudentsTable from "./StudentsTable";
import Todolist from "./Todolist";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="border border-5 p-2 m-2 border-danger">
      <h1>This is APP</h1>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todolist">Todolist</Link>
        </li>
        <li>
          <Link to="/studentlist">All Student</Link>
        </li>
        <li>
          <Link to="/addStudent">NewStudent</Link>
        </li>
        <li>
          <Link to="/food">Recipes</Link>
        </li>
      </ul>
      <div className="border border-5 p-2 m-2 border-success">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;

// 1. links
// 2. routes
// 3. palce holder for display component
