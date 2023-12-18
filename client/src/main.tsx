import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div data-mode="dark">
              <Register />
            </div>
          }
        />
        <Route path="/home" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
