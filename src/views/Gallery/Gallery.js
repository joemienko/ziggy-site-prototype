import React from "react";
import "react-ig-feed/dist/index.css";
import {imageGallery} from "../../components/layout/imageGallery/imageGallery"

export default function Gallery() {
  return (
    <div className="cards">
      <h1>Some h1 input here</h1>
        <imageGallery/>
    </div>
  );
}