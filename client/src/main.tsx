import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./components/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div data-mode="dark">
        <Register />
      </div>
    ),
  },
  {
    path: "/home",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
