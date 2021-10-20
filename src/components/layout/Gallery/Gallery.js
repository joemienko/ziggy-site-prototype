import imageGallery from './imageGallery'; 
import './Gallery.css'; 
import React from 'react'


function GalleryHtml() {
    return (
        <div className="gallery">
            <h1>Look At the Premade Tattoos.... ALSO
                Help with css (more info @components/layout/Gallery/Gallery.js)
            </h1>
            
            <div className="images" dangerouslySetInnerHTML={{__html: imageGallery}}></div>
        </div>
        // this might be bad later on because of cross site scripting


        //  if you're reading this could you add css for those elements please, im having troubbles doing it myself
        // i dont really care what it looks like all i want from it is that each image has the same dimentions and are in rows of three

    )
}

export default GalleryHtml; 