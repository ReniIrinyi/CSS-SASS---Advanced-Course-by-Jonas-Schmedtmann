import React from "react";
import "../styles/Footer.scss";

const footer = () => {
  return (
    <section className="footer">
      <ul className="nav">
        <li className="nav__item">
          <bu href="#" className="nav__link">
            Find Your dream home
          </bu>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find Your dream home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find Your dream home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find Your dream home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find Your dream home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find Your dream home
          </a>
        </li>
      </ul>
      <h1 className="nav__copy">
        <p className="nav__copy--text">
          The Project was built from
          <a href="https://github.com/ReniIrinyi">RENÁTA IRINYI</a>
          as part of Jonas Schmedtmann´s
          <a href="https://www.udemy.com/course/advanced-css-and-sass/">
            ADVANCED CSS AND SASS
          </a>
          course. Copyright © by Jonas Schmedtmann.
        </p>
      </h1>
    </section>
  );
};

export default footer;
