// import React from "react"; 

import images from '@assets/images/images'; 

function imageGallery(images) {
    let htmlWrapper = ''

    const arrayOfIndexes = Array.from(Array(images.length + 1).keys()); 

    arrayOfIndexes.shift(); 

    arrayOfIndexes.forEach(function(i) {
        if(i % 3 === 0) {
            htmlWrapper += 
            `<div className="images__wrapper">
                <img className="image" src="${images[i-2]}"/>
                <img className="image" src="${images[i-1]}"/>
                <img className="image" src="${images[i]}"/>
            </div>
            `; 

        } else {

        }
        //this assumes that the array is perfectly divisible by 3, we will need to change it later
    }); 


    let finalWrapper = `
    <div className="images__container">
        ${htmlWrapper}
    </div>
    `; 

    return finalWrapper; 
}

export default imageGallery(images); 