import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./AppContext/AuthContextProvider";
import ThemeContextProvider from "./AppContextTheme/ThemeContextProvider";
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
