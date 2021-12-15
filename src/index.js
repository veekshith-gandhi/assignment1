import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./AppContext/AuthContextProvider";
import ThemeContextProvider from "./AppContextTheme/ThemeContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
