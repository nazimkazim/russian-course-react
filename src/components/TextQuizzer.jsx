import React, { Component } from "react";
const ReactMarkdown = require("react-markdown");

class TextQuizzer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="text-quizzer-container">
        <div className="text-quizzer-img-container">
          <img src={this.props.image} alt="" />
          <ReactMarkdown className="text-quizzer-text has-text-primary is-size-4" source={this.props.data.text} escapeHtml={false} />
        </div>

      </div>
    );
  }
}

export default TextQuizzer;
