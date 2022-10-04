import React from "react";
import "./AppClock.css";
export default function AppClock() {
  return (
    <section className="flex-container">
      <div className="box">
        <h6>India</h6>
        {calcTime("+5.5")}
      </div>
      <div className="box">
        <h6>California</h6>
        {calcTime("-7.0")}
      </div>
      <div className="box">
        <h6>New York</h6>
        {calcTime("-4.0")}
      </div>
      <div className="box">
        <h6>London</h6>
        {calcTime("+1.0")}
      </div>
      <div className="box">
        <h6>Sydney</h6>
        {calcTime("+11.0")}
      </div>
      <div className="box">
        <h6>China</h6>
        {calcTime("+8.0")}
      </div>
      <div className="box">
        <h6>Tokyo</h6>
        {calcTime("+9.0")}
      </div>
      <div className="box">
        <h6>Berlin</h6>
        {calcTime("+2.0")}
      </div>
    </section>
  );
}
function calcTime(offset) {
  var d = new Date();
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = new Date(utc + 3600000 * offset);
  nd.toLocaleString();
  return nd.toLocaleString();
}
