import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Pages/Home";
import Login from "../Component/Pages/Login";
import Register from "../Component/Pages/Register";
import MainLayout from "../Layout/MainLayout";
import PageLayout from "../Layout/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/",
    Component: PageLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
export default router;
