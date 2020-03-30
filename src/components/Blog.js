import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import moment from "moment";

export default function Blog({ blog }) {
  const { header, slub, date, description, mainPicture } = blog;
  return (
    <div className="column is-three-quarters">
      <div className="columns">
        <div className="column is-one-fifth">
          <figure>
            <p className="image is-128x128">
              <img src={(mainPicture && mainPicture) || defaultImg} alt="" />
            </p>
          </figure>
        </div>
        <div className="column auto">
          <div className="content">
            <p>
              <strong>
                <Link to={`/blogs/${slub}`}>{header}</Link>
              </strong>
              <br />
              <small>{moment(date).format("MMM Do YY")}</small>
              <br />
              {description.slice(0, 300) + "..."}
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

Blog.propTypes = {
  blogs: PropTypes.shape({
    header: PropTypes.string.isRequired,
    slub: PropTypes.string.isRequired,
    extraPictures: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.number.isRequired
  })
};
