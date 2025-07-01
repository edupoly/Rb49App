import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";
import Recipes from "./features/recipes/Recipes";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <h1>This is APP</h1>
      <Recipes></Recipes>
      <Products></Products>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
