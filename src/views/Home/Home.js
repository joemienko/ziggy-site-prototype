import "@src/App.css";
import HeroSection from "@components/layout/ViewTemplate/HeroSection/HeroSection";
import React from "react";
import Cards from "@components/layout/Cards/Cards";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
