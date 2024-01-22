import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 이렇게 선언하는 style은 전역으로 적용된다.
// import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
