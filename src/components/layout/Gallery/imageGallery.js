// import React from "react"; 

import images from '@assets/images/images'; 

function imageGallery(images) {
    let html = ''

    images.forEach(function (image) {
        html += `<img className="image" src="${image}"/>`
    }); 


    html = `
    <div className="images__wrapper">
        ${html}
    </div>
    `; 

    return html; 
}

export default imageGallery(images); 