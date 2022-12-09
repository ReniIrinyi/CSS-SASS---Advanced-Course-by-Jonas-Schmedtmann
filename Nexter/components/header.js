import React from "react";
import "../styles/Header.scss";
import img1 from "../img/logo.png";
import img2 from "../img/logo-bi.png";
import img3 from "../img/logo-forbes.png";
import img4 from "../img/logo-techcrunch.png";
import img5 from "../img/hero.jpeg";

const header = () => {
  return (
    <section className="header">
      <img src={img5} alt="background" className="header__main" />

      <img src={img1} alt="nexter logo" className="header__logo" />

      <h3 className="header__heading-sm heading--2">Your own home</h3>
      <h1 className="header__heading-lg heading--3-light">
        The ultimate personal freedom
      </h1>
      <button className="header__btn btn">View our Properties</button>
      <div className="header__seenon">
        <p className="header__seenon-text">As seen on</p>
      </div>
      <div className="header__logos">
        <img src={img2} alt=" logo" />
        <img src={img3} alt=" logo" />
        <img src={img4} alt=" logo" />
      </div>
    </section>
  );
};

export default header;
