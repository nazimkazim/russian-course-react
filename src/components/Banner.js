import React from "react";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

export default function Banner({ children, title, subtitle }) {
  return (
    <section className="hero is-primary is-medium hero-c is-large">
      <div className="hero-body">
        <div className="has-text-centered">
          <StyleRoot>
            <h1
              className="title hero-title has-text-black-bis primary-title"
              style={styles.fadeIn}
            >
              {title}
            </h1>
            <h2
              className="subtitle secondary-title has-text-black-bis"
              style={styles.fadeIn}
            >
              {subtitle}
            </h2>
          </StyleRoot>
          {children}
        </div>
      </div>
    </section>
  );
}
