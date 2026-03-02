import React from "react";
import NavBar from "../Component/Home/NavBar/NavBar";
import Footer from "../Component/Home/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
