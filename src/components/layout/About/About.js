import React from 'react'; 
import "./About.css"; 

export default function About() {

    return (
        <div className="about">
            <h1>A Message From the Tattooist</h1>
            <div className="bio">
                My name is Zig Mienko, and I’m a non-binary handpoke tattoo artist. 

            I’ve been tattooing professionally since 2019. My favorite subject matters are abstracts, human figures, floral and fauna. 

            Currently I prioritize flash designs and customs that appeal to my style/interests. 

            Outside of tattooing I enjoy other visual arts such as drawing and painting. 

            Commissions are fully welcomed as well! Check out my portfolio for examples of both my tattoos and other pieces. 

            Feel free to explore my content further @hardeasy.handpokes on Instagram!
            </div>
            <div className="contact-info">
                <ul> If you have any questions you can either search through my FAQ
                    <li>Instagram: @hardeasy.pokes</li>
                    <li>Email: ziggymienko@gmail.com</li>    
                    <li>Location: comming soon</li>
                </ul>    
            </div>
        </div>
    ) 
}