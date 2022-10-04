import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <table className="main">
        <tr>
          <th></th>
          <th>Thứ 2</th>
          <th>Thứ 3</th>
          <th>Thứ 4</th>
          <th>Thứ 5</th>
          <th>Thứ 6</th>
          <th>Thứ 7</th>
          <th>Chủ Nhật</th>
        </tr>
        <tr>
          <td className="day">Sáng</td>
          <td>Work</td>
          <td>Work</td>
          <td>Work</td>
          <td>Work</td>
          <td>Work</td>
          <td>Off</td>
          <td>Off</td>
        </tr>
        <tr>
          <td className="day">Chiều</td>
          <td>Work</td>
          <td>Work</td>
          <td>Work</td>
          <td>Work</td>
          <td>Work</td>
          <td>Off</td>
          <td>Off</td>
        </tr>
        <tr>
          <td className="day">Tối</td>
          <td>Learn Reacts</td>
          <td>Do Lab</td>
          <td>Off</td>
          <td>Off</td>
          <td>Learn Reacts</td>
          <td>Do Lab</td>
          <td>Off</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
