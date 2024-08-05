import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import MovieDetails from "./assets/pages/MovieDetails.jsx";
import Login from "./assets/pages/Login.jsx";
import Signup from "./assets/pages/Signup.jsx";
import Confirmation from "./assets/pages/Confirmation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/MovieDetails/:moviename",
    element: <MovieDetails />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Confirmation",
    element: <Confirmation />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
