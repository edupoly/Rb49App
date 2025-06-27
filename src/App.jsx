import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <h1>This is APP</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
