import React from "react";
import { Button } from "@components/forms/Button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="@assets/videos/video-2.mp4" autoPlay loop muted />
      <h1>HARDEASY POKES</h1>
      <p>Self-taught & machine free</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
        >
          REGISTER
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn-large"
        >
          ABOUT US <i className="far 
                fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
