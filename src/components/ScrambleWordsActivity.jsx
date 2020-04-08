import React, { Component } from "react";
var _ = require("lodash");

class ScrambleWordsActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answer: [],
      index: 0,
    };
  }
  componentDidMount() {
    let arr = [];
    this.props.data.map((item) => {
      let obj = {
        eng: item.eng,
        rus: item.rus,
        scrambled: this.randomize(item.rus),
      };
      return arr.push(obj);
    });
    this.setState({
      data: arr,
    });
  }

  randomize = (str) => {
    let splitted = str.split(" ");
    let shuffled = _.shuffle(splitted);
    return shuffled;
  };

  handleAnswer = (e) => {
    let word = e.target.value;

    this.setState({
      answer: this.state.answer.concat(word),
    });
  };

  handleRemove = (e) => {
    let array = [...this.state.answer]
    let word = e.target.value;
    const index = array.indexOf(word);
    if (index > -1) {
      array.splice(index, 1);
      this.setState({answer:array})
    }
  };

  render() {
    console.log(this.state.data);
    console.log(this.state.answer);
    return (
      <div className="card mtwp-card-container">
        <div className="card-content scramble-words-activity-image">
          {this.state.data[this.state.index] &&
            this.state.data[this.state.index].eng}
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {this.state.answer.map((word) => (
                  <button className="tag" value={word} onClick={this.handleRemove}>{word}</button>
                ))}
              </p>
              <p className="subtitle is-6">
                <span className="tags">
                  {this.state.data[this.state.index] &&
                    this.state.data[this.state.index].scrambled.map((item) => (
                      <button
                        className="tag is-dark is-light is-medium"
                        value={item}
                        onClick={this.handleAnswer}>
                        {item}
                      </button>
                    ))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrambleWordsActivity;
