import React from "react";
import "../styles/Gallery.scss";
import image1 from "../img/gal-1.jpeg";
import image2 from "../img/gal-2.jpeg";
import image3 from "../img/gal-3.jpeg";
import image4 from "../img/gal-4.jpeg";
import image5 from "../img/gal-5.jpeg";
import image6 from "../img/gal-6.jpeg";
import image7 from "../img/gal-7.jpeg";
import image8 from "../img/gal-8.jpeg";
import image9 from "../img/gal-9.jpeg";
import image10 from "../img/gal-10.jpeg";
import image11 from "../img/gal-11.jpeg";
import image12 from "../img/gal-12.jpeg";
import image13 from "../img/gal-13.jpeg";
import image14 from "../img/gal-14.jpeg";

const gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={image1} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={image2} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={image3} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={image4} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={image5} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={image6} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={image7} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={image8} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={image9} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={image10} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={image11} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={image12} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img src={image13} alt="gallery-img" className="gallery_img" />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img src={image14} alt="gallery-img" className="gallery_img" />
      </figure>
    </section>
  );
};

export default gallery;
