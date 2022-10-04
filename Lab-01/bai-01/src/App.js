import logo from "./logo.svg";
import "./App.css";
import image from "./image/avatar.png";

function App() {
  return (
    <div className="App">
      <div className="table">
        <div className="left">
          <img src={image} alt="Avatar" />
        </div>
        <div className="right">
          <p>Họ và tên: ...</p>
          <p>Giới tính: ...</p>
          <p>Địa chỉ: ...</p>
          <p>Số điện thoại: ...</p>
          <p>Email: ...</p>
          <p>Zalo/Facebook: ...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
