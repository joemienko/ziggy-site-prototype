import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Some h1 input here</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-9.jpg?raw=true"
              text="others"
              label="Schedule"
              path="/Schedule"
            />

            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-2.jpg?raw=true"
              text="Some other text here."
              label="Gallery"
              path="/gallery"
            />
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-8.jpg?raw=true"
              text="some other text here"
              label="Else"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
