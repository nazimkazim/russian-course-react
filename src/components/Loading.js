import React, { Component } from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

export default class Loading extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="loading">
        <h4>{this.props && this.props.words}</h4>
        <img src={loadingGif} alt="loading gif" />
      </div>
    );
  }
}
