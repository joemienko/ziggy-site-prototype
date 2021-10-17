// import React from "react"; 

import images from '@assets/images/images'; 

function imageGallery(images) { 
    let html = ''

    images.forEach(function (image) {
        html += `<img src="${image}"/>`
    }); 

    html = `<div id="galleryWrapper2">${html}</div>`
    return html; 
}

export default imageGallery(images); 