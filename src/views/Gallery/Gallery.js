import React from "react";
import imageGallery from "@components/layout/imageGallery/imageGallery"

function Gallery() {

  return (
    <div className="galleryWrapper0">
      <h1>Tattoos That Have Already Been Preformed</h1>
      <div className="galleryWrapper1" dangerouslySetInnerHTML={{__html: imageGallery}}>
      </div>
    </div>
    // this might be bad later on because of cross site scripting
  );
}

export default Gallery; 