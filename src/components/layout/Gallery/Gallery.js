import imageGallery from './imageGallery'; 
import './Gallery.css'; 


function GalleryHtml() {
    return (
        <div className="images">
            <h1>Look At the Healed Artwork</h1>
            <div className="images_container" dangerouslySetInnerHTML={{__html: imageGallery}}></div>
        </div>
        // this might be bad later on because of cross site scripting
    )
}

export default GalleryHtml; 