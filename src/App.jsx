import Counter from "./Counter";

function App() {
  function abc() {
    alert("Edupoly");
  }
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <h1>This is APP</h1>
      <button onClick={()=>{abc()}}>Nanna</button>
      <Counter step={10} a={abc}>100</Counter>
      <Counter step={5} a={abc}>200</Counter>
    </div>
  );
}

export default App;
