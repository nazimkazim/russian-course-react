import React, { Component } from "react";
import click from "../data/media/click.wav";
import denied from "../data/media/denied.mp3";
import correct from "../data/media/correct.wav";
import ProgressBar from "../components/ProgressBar";
var _ = require("lodash");

class ScrambleWordsActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answer: [],
      index: 0,
      activityIsFinished: false,
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
    let sound = new Audio(click);
    sound.play();
    let word = e.target.value;
    this.setState({
      answer: this.state.answer.concat(word),
    });
  };

  handleRemove = (e) => {
    let sound = new Audio(click);
    sound.play();
    let array = [...this.state.answer];
    let word = e.target.value;
    const index = array.indexOf(word);
    if (index > -1) {
      array.splice(index, 1);
      this.setState({ answer: array });
    }
  };

  handleCheck = () => {
    let answer = this.state.answer.join(" ");
    if (answer === this.state.data[this.state.index].rus) {
      let sound = new Audio(correct);
      sound.play();
      this.setState(
        {
          index: this.state.index + 1,
          answer: [],
        },
        () => {
          if (this.state.index === this.state.data.length) {
            this.setState({
              activityIsFinished: true,
            });
          }
        }
      );
    } else {
      let sound = new Audio(denied);
      sound.play();
    }
  };

  startAgain = () => {
    this.setState({
      data: [],
      answer: [],
      index: 0,
      activityIsFinished: false,
    });
    this.update()
  };

  update = () => {
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
  };

  render() {
    console.log(this.state.data);
    console.log(this.state.answer);
    console.log(this.state.index === this.state.data.length);
    return (
      <div className="card mtwp-card-container">
        <div className="card-content scramble-words-activity-image">
          <div className="scramble-words-activity-image-sent">
            {this.state.activityIsFinished
              ? "Good Job"
              : this.state.data[this.state.index] &&
                this.state.data[this.state.index].eng}
          </div>
        </div>
        <div className="card-content card-content-answer-container">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {this.state.answer.map((word) => (
                  <button
                    className="tag is-info is-medium"
                    value={word}
                    onClick={this.handleRemove}>
                    {word}
                  </button>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <span className="tags">
                {this.state.data[this.state.index] &&
                  this.state.data[this.state.index].scrambled.map((item) => (
                    <button
                      className="tag is-info is-medium"
                      value={item}
                      onClick={this.handleAnswer}>
                      {item}
                    </button>
                  ))}
              </span>
              {this.state.activityIsFinished ? (
                <button className="button is-success" onClick={this.startAgain}>
                  <span class="icon is-small">
                    <i className="fas fa-redo"></i>
                  </span>
                </button>
              ) : (
                <button
                  className="button is-success"
                  onClick={this.handleCheck}
                  disabled={this.state.answer.length < 1}>
                  Check
                </button>
              )}
              <hr />
              <ProgressBar
                value={this.state.index}
                max={this.state.data.length}
              />
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrambleWordsActivity;
