import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h6>{calcTime("Bombay", "+7")}</h6>
    </div>
  );
}

export default App;

function calcTime(city, offset) {
  var d = new Date();
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = new Date(utc + 3600000 * offset);
  return "The local time for city" + city + " is " + nd.toLocaleString();
}
