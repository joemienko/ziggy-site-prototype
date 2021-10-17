import "@src/App.css";
import HeroSection from "@components/layout/ViewTemplate/HeroSection/HeroSection";
import React from "react";
import Cards from "@components/layout/Cards/Cards";
import About from '@components/layout/About/About'

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
    </>
  );
}

export default Home;
