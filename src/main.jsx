import React from "react";
import App from "./App.jsx";
import "./assets/css/input.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Modals } from './components';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
      <Modals />
    </BrowserRouter>
  </React.StrictMode>
);
