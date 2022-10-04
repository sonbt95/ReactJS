import React, { useState } from "react";
import "./ConvertMoney.css";

const allUnit = [
  {
    nameUnit: "Euro",
    numberUnit: 25832.33,
  },
  {
    nameUnit: "Dolar",
    numberUnit: 22982.5,
  },
];

export default function ConvertMoney() {
  let [moneyStart, setMoneyStart] = useState();
  let [moneyEnd, setMoneyEnd] = useState();
  let [unit, setUnit] = useState(allUnit[0].nameUnit);

  function formatMoney(n, currency) {
    return currency + n.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  let sumbmitConvert = () => {
    let indexUnit = allUnit.findIndex((item) => item.nameUnit === unit);
    let money = Math.round(moneyStart * allUnit[indexUnit].numberUnit);
    setMoneyEnd(money);
  };
  return (
    <div>
      <div className="convert">
        <div className="convert__title">Tiền Tệ</div>
        <div>
          <label>Tôi muốn chuyển đổi:</label>
          <input
            value={moneyStart}
            onChange={(e) => setMoneyStart(e.target.value)}
            type="number min={0}"
          />
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            {allUnit.map((item, index) => {
              return (
                <option key={index} value={item.nameUnit}>
                  {item.nameUnit}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Đến</label>
          <p>Đồng Việt Nam</p>
        </div>
        <button onClick={sumbmitConvert}>Xác nhận</button>
        <p>{moneyEnd && formatMoney(moneyEnd, "VND ")}</p>
      </div>
    </div>
  );
}
