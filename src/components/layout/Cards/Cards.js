import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check us out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-9.jpg?raw=true"
              text="Check out this gallery of Ziggy's art"
              label="Gallery"
              path="/Gallery"
            />
            {/* fix these cards and other html tmr */}
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-2.jpg?raw=true"
              text="Give anonymous feedback on your expirence"
              label="Feedback"
              path="/Feedback"
            />
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-8.jpg?raw=true"
              text="Find out ways to contact Ziggy"
              label="Contact"
              path="/Contact"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
