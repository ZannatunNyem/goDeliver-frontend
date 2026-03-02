import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Home/Footer/Footer";
import NavBar from "../Component/Home/NavBar/NavBar";

export default function PageLayout() {
  return (
    <div>
      <div className="bg-base-200  p-4 ">
        <NavBar></NavBar>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
