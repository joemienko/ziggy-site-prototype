import React from "react";
import { Button } from "@components/forms/Button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="@assets/videos/video-2.mp4" autoPlay loop muted />
      <h1>FILLER TITLE</h1>
      <p>some odd filler header</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
        >
          SOME BUTTON
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn-large"
        >
          SOME OTHER BTN <i className="far 
                fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
