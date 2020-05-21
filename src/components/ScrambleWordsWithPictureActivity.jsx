import React, { Component } from "react";
import click from "../data/media/click.wav";
import denied from "../data/media/denied.mp3";
import correct from "../data/media/correct.wav";
import ProgressBar from "../components/ProgressBar";
var _ = require("lodash");

class ScrambleWordsActivity extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      answer: [],
      scrambledArr: [],
      index: 0,
      length: 0,
      activityIsFinished: false,
    };
  }
  componentDidMount() {
    let arr = [];
    let scrambledArr = [];
    this.props.data.map((item) => {
      let obj = {
        rus: item.rus,
        photo: item.photo,
        name: item.name
      };
      return (arr.push(obj), scrambledArr.push(item.rus.split(" ")));
    });
    this.setState({
      data: arr,
      scrambledArr: _.uniq(this.randomize(scrambledArr.flat(1))),
      length: arr.length
    });
  }

  randomize = (arr) => {
    let shuffled = _.shuffle(arr);
    return shuffled;
  };

  handleAnswer = (e) => {
    let sound = new Audio(click);
    sound.play();
    let word = e.target.value;

    let index = this.state.scrambledArr.indexOf(word);
    let scrambledArr = [...this.state.scrambledArr];
    scrambledArr.splice(index, 1);
    this.setState({
      answer: this.state.answer.concat(word),
      scrambledArr: scrambledArr
    });
  };

  handleRemove = (e) => {
    let sound = new Audio(click);
    sound.play();
    let array = [...this.state.answer];
    let word = e.target.value;
    const index = array.indexOf(word);

    let scrambledArr = [...this.state.scrambledArr];
    scrambledArr.push(word);

    if (index > -1) {
      array.splice(index, 1);
      this.setState({
        answer: array,
        scrambledArr: scrambledArr
      });
    }
  };

  handleCheck = () => {
    let answer = this.state.answer.join(" ");
    if (answer === this.state.data[this.state.index].rus) {
      let sound = new Audio(correct);
      sound.play();
      this.updateScrambleArr();
      this.setState(
        {
          index: this.state.index + 1,
          answer: []
        },
        () => {
          if (this.state.index === this.state.length) {
            this.setState({
              activityIsFinished: true,
              scrambledArr: []
            });
          }
        }
      );
    } else {
      let sound = new Audio(denied);
      sound.play();
    }
  };

  updateScrambleArr = () => {
    let scrambledArr = [];
    this.props.data.map((item) => {
      return (scrambledArr.push(item.rus.split(" ")));
    });
    this.setState({
      scrambledArr: _.uniq(this.randomize(scrambledArr.flat(1))),
    });
  };

  startAgain = () => {
    this.setState({
      data: [],
      answer: [],
      scrambledArr: [],
      index: 0,
      length: 0,
      activityIsFinished: false,
    });
    this.update();
  };

  update = () => {
    let arr = [];
    let scrambledArr = [];
    this.props.data.map((item) => {
      let obj = {
        rus: item.rus,
        photo: item.photo,
        name: item.name
      };
      return (arr.push(obj), scrambledArr.push(item.rus.split(" ")));
    });
    this.setState({
      data: arr,
      scrambledArr: _.uniq(this.randomize(scrambledArr.flat(1))),
      length: arr.length
    });
  };

  render() {
    //console.log(this.state.scrambledArr);
    //console.log(this.state.answer);
    //console.log(this.state.index === this.state.data.length);
    return (
      <div className="card mtwp-card-container">
        <div className="card-content scramble-words-activity-image no-pic">
          { this.state.activityIsFinished
            ? <div className="centered-item">Good Job</div> : (<div className="wrapper">
              <div class="item">
                <div class="polaroid"><img src={ this.state.data[this.state.index] && this.state.data[this.state.index].photo } alt="" />
                  <div class="caption">{ this.state.data[this.state.index] && this.state.data[this.state.index].name }</div>
                </div>
              </div>
            </div>)
          }
        </div>
        <div className="card-content card-content-answer-container">
          <div className="media">
            <div className="media-content media-content-conteiner">
              <p className="title is-4">
                { this.state.answer.map((word) => (
                  <button
                    className="tag is-info is-medium"
                    value={ word }
                    onClick={ this.handleRemove }>
                    { word }
                  </button>
                )) }
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <span className="tags">
                { this.state.scrambledArr &&
                  this.state.scrambledArr.map((item, i) => (
                    <button
                      key={ i }
                      className="tag is-info is-medium"
                      value={ item }
                      onClick={ this.handleAnswer }>
                      { item }
                    </button>
                  )) }
              </span>
              { this.state.activityIsFinished ? (
                <button className="button is-success" onClick={ this.startAgain }>
                  <span class="icon is-small">
                    <i className="fas fa-redo"></i>
                  </span>
                </button>
              ) : (
                  <button
                    className="button is-success"
                    onClick={ this.handleCheck }
                    disabled={ this.state.answer.length < 1 }>
                    Check
                  </button>
                ) }
              <hr />
              <ProgressBar
                value={ this.state.index }
                max={ this.state.length }
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
