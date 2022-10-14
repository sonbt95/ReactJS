import logo from "./logo.svg";
import "./App.css";
import ListTodo from "./Components/ListTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple TodoApp</p>
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
