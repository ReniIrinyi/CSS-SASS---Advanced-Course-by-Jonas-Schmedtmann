import React from "react";
import "../styles/Realtors.scss";
import img1 from "../img/realtor-1.jpeg";
import img2 from "../img/realtor-2.jpeg";
import img3 from "../img/realtor-3.jpeg";

const realtors = () => {
  return (
    <section className="realtors">
      <div className="realtors__titel heading--2">Top 3 realtors</div>
      <div className="realtors__persons">
        <div className="pictures">
          <img src={img1} alt="img" />
          <div className="pictures__infos">
            <p className="pictures__name heading--1-light">Erik Feinmann</p>
            <p className="pictures__info">245 houses sold</p>
          </div>
        </div>
        <div className="pictures">
          <img src={img2} alt="img" />
          <div className="pictures__infos">
            <p className="pictures__name heading--1-light">Erik Feinmann</p>
            <p className="pictures__info">245 houses sold</p>
          </div>
        </div>
        <div className="pictures">
          <img src={img3} alt="img" />
          <div className="pictures__infos">
            <p className="pictures__name heading--1-light">Erik Feinmann</p>
            <p className="pictures__info">245 houses sold</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default realtors;
