import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Components/community/community.css";
import "./Components/community/companies.css";
import "./Components/About/About.css";
import "./Components/Camera/Camera.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./Components/Account/Account2.css"
import "./Components/Chat/Chat.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
