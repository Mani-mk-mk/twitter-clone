import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.tsx";
import Home from "./pages/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename="twitter-clone/">
      <Routes>
        <Route
          path="/"
          element={
            <div data-mode="dark">
              <Register />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div data-mode="dark">
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
);
