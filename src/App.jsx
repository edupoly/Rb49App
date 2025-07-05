import Counter from "./Counter";
import Counter2 from "./counter/Counter2";
import Todolist from "./todolist/Todolist";

function App() {
  return (
    <div className="border border-5 p-2 m-2 border-danger">
      <h1>This is APP</h1>
      <Todolist></Todolist>
      <Counter></Counter>
      <Counter2></Counter2>
    </div>
  );
}

export default App;
