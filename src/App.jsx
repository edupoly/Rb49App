import { Outlet } from "react-router-dom";
import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";
import Recipes from "./features/recipes/Recipes";
import Todolist from "./features/todolist/Todolist";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
