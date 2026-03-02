import React from "react";
import Logo from "../Logo/Logo";
import Banner from "../Home/Banner/Banner";
import Features from "../Home/Features/Features";
import OurService from "../Home/OurService/OurService";
import Company from "../Home/Company/Company";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Features></Features>
      <OurService></OurService>
      <Company></Company>
    </div>
  );
}
