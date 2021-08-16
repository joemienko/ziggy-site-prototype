import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const { REACT_APP_INSTA_TEST_TOKEN } = process.env;

export default function Gallery() {
  return (
    <div className="cards">
      <h1>Some h1 input here</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <InstagramFeed token={REACT_APP_INSTA_TEST_TOKEN} counter="6" />
          </ul>
        </div>
      </div>
    </div>
  );
}
