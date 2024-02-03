import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Components/community/community.css";
import "./Components/community/companies.css";
import "./Components/About/About.css";
import "./Components/Camera/Camera.css";
import "./Components/Account/login.css";
import "./Components/Account/register.css";
import "./Components/Account/ResetPass.css";
import "./Components/Account/Account.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
