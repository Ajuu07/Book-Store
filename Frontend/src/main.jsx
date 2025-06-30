import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
