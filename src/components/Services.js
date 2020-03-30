import React, { Component } from "react";
import time from "../images/elearning.svg";
import van from "../images/digital.svg";
import flower from "../images/interest.svg";
import centerAlignment from "../images/experience.svg";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: time,
        title: "Video Based Lessons",
        info: ""
      },
      {
        icon: van,
        title: "Interactive Exercises",
        info: ""
      },
      {
        icon: flower,
        title: "Fun Activities",
        info: ""
      },
      {
        icon: centerAlignment,
        title: "Real World Experience",
        info: ""
      }
    ]
  };
  render() {
    return (
      <section className="hero">
        <div className="columns service-columns">
          {this.state.services.map((item, i) => {
            return (
              <div className="column has-text-centered" key={i}>
                <span className="heading">
                  <img src={item.icon} alt={item.title} />
                </span>
                <span className="title services-title">{item.title}</span>
                <div>{item.info}</div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
