import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Router>
      <StoreProvider>
        <App />
      </StoreProvider>
    </Router>
  
);
