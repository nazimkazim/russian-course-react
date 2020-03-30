import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Flower({ lesson }) {
  const { topic, cover } = lesson;
  return (
    <div className="column is-one-quarter">
      <div className="card feature-flower-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={cover  || defaultImg} alt="single room" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="room-info">{topic}</p>
            <Link to={`/lessons/${topic}`} className="button is-link is-small">
              начать урок
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Flower.propTypes = {
  flower: PropTypes.shape({
    topic: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  })
};
