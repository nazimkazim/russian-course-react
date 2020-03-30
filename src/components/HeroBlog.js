import React from "react";
import defaultImage from "../images/blog-hero-bck.jpg";

export default function HeroBlog(props) {
  const { primaryTitle } = props;
  const { secondaryTitle } = props;
  console.log(props.picture);
  return (
    <section
      className="hero is-medium is-bold hero-blog-bck-img"
      style={{ backgroundImage: `url(${props.picture || defaultImage})` }}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{primaryTitle}</h1>
          <h2 className="subtitle">{secondaryTitle}</h2>
        </div>
      </div>
    </section>
  );
}
