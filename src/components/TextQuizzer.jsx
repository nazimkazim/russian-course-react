import React, { Component } from "react";
const ReactMarkdown = require("react-markdown");

class TextQuizzer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ReactMarkdown source={this.props.data.text} escapeHtml={false} />
      </div>
    );
  }
}

export default TextQuizzer;
