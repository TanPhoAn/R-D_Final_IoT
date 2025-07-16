import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import DashBoard from "./pages/DashBoard.jsx";

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
