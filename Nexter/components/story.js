import React from "react";
import "../styles/Story.scss";
import img1 from "../img/story-1.jpeg";
import img2 from "../img/story-2.jpeg";
import img3 from "../img/back.jpg";

const story = () => {
  return (
    <section className="story">
      <div className="story__pictures">
        <figure className=" story__pictures--back">
          <img src={img3} alt="" className="story__pictures--back-img" />
        </figure>

        <img src={img1} alt="Couple with new house" className="story__img--1" />
        <img src={img2} alt="Couple with new house" className="story__img--2" />
      </div>
    </section>
  );
};

export default story;
