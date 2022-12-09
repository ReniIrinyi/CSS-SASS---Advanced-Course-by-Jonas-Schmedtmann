import React from "react";
import "../styles/StoryContent.scss";
import "../styles/_buttons.scss";

const storyContent = () => {
  return (
    <section className="storyContent  ">
      <h1 className="heading--2 mb-sm">Happy Customers</h1>
      <h3 className="heading--3 heading--3-dark mb-md">
        &ldquo;The best decision of our lives&rdquo;
      </h3>
      <p className="content__text mb-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        laborum voluptatum vero. Doloribus tenetur ipsa similique inventore
        ducimus deleniti error, minus officiis laborum numquam culpa excepturi
        delectus exercitationem magnam nobis?
      </p>
      <button className="btn">Find your own home</button>
    </section>
  );
};

export default storyContent;
