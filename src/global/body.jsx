import React from "react";
import "../index.css";

import NavBar from "./navBar";
import HomeBox from "../components/homeBox";
import Technology from "../components/technology";
import NavMobile from "./navMobile";
import CaroselBox from "../components/carsoelbox";
import ProjectSection from "../components/Projects";
import GlobeSect from "../components/globe";
import Footer from "../components/footer";
export default function Body() {
  return (
    <div className="mainBody">
      <NavMobile />
      <NavBar />
      <HomeBox />
      <Technology />
      <CaroselBox />
      <ProjectSection />
      <GlobeSect/>
      <Footer/>
    </div>
  );
}
