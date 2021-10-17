import React from "react"; 

export default function imageGallery() {
    const images = [
        "https://media.discordapp.net/attachments/804847788109463552/891365929403969556/20210925123921_1.jpg?width=1057&height=595", 
        "https://media.discordapp.net/attachments/804847788109463552/891365961066749952/20210925124906_1.jpg?width=1057&height=595", 
        "https://media.discordapp.net/attachments/804847788109463552/891365945967255562/20210925115207_1.jpg?width=1057&height=595", 
        "https://media.discordapp.net/attachments/804847788109463552/894517048003133460/RDT_20211004_0531057994840425633551133.jpg", 
        "https://media.discordapp.net/attachments/804847788109463552/895427330988716042/vg8jqkirkvr71.png?width=619&height=656", 
        "https://media.discordapp.net/attachments/804847788109463552/896926998906171392/unknown.png?width=1057&height=608", 
        "https://media.discordapp.net/attachments/804847788109463552/898372315761504266/20211014194535_1.jpg?width=1057&height=595"
    ]; 

    let html = ''

    images.forEach(function (image) {
        html += `<img src="${image}"/>`
    }); 

    const doc = new DOMParser().parseFromString(html, 'text/xml'); 

    let otherHtml = `<div id="gallery">${doc}</div>`

    const imageGalleryHtml = new DOMParser().parseFromString(otherHtml, 'text/xml'); 
    return imageGalleryHtml; 
}