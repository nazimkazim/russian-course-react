import React, { Component } from 'react';
import denied from '../data/media/denied.mp3';
import correct from '../data/media/correct.wav';
import ProgressBar from '../components/ProgressBar';
import { speakStr } from './Pronunciation';
var _ = require('lodash');

class ScrambleWordsActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answer: [],
      index: 0,
      length: 0,
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
      length: arr.length,
    });
  }

  randomize = (str) => {
    let splitted = str.split(' ');
    let shuffled = _.shuffle(splitted);
    return shuffled;
  };

  handleAnswer = (e) => {
    let word = e.target.value;
    speakStr(word, 'ru-RU');
    let obj = { ...this.state.data };

    let index = obj[this.state.index].scrambled.indexOf(word);
    let scrambledArr = obj[this.state.index].scrambled;
    scrambledArr.splice(index, 1);
    this.setState({
      answer: this.state.answer.concat(word),
      data: { ...obj, scrambled: obj[this.state.index].scrambledArr },
    });
  };

  handleRemove = (e) => {
    let array = [...this.state.answer];
    let word = e.target.value;
    const index = array.indexOf(word);

    let obj = { ...this.state.data };
    let scrambledArr = obj[this.state.index].scrambled;
    scrambledArr.push(word);

    if (index > -1) {
      array.splice(index, 1);
      this.setState({
        answer: array,
        data: { ...obj, scrambled: obj[this.state.index].scrambledArr },
      });
    }
  };

  handleCheck = () => {
    let answer = this.state.answer.join(' ');
    if (answer === this.state.data[this.state.index].rus) {
      let sound = new Audio(correct);
      sound.play();
      setTimeout(() => {
        this.setState(
          {
            index: this.state.index + 1,
            answer: [],
          },
          () => {
            if (this.state.index === this.state.length) {
              this.setState({
                activityIsFinished: true,
              });
            }
          }
        );
      }, 1000);
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
      length: 0,
      activityIsFinished: false,
    });
    this.update();
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
    //console.log(this.state.data);
    //console.log(this.state.answer);
    //console.log(this.state.index === this.state.data.length);
    return (
      <div className='card mtwp-card-container'>
        <div className='card-content scramble-words-activity-image'>
          <div className='scramble-words-activity-image-sent'>
            {this.state.activityIsFinished ? (
              <div className='centered-item'>Good Job</div>
            ) : (
              this.state.data[this.state.index] && (
                <div className='centered-item sm-font-title'>
                  {this.state.data[this.state.index].eng}
                </div>
              )
            )}
          </div>
        </div>
        <div className='card-content card-content-answer-container'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>
                {this.state.answer.map((word) => (
                  <button
                    className='tag is-info is-medium'
                    value={word}
                    onClick={this.handleRemove}>
                    {word}
                  </button>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <span className='tags'>
                {this.state.data[this.state.index] &&
                  this.state.data[this.state.index].scrambled.map((item, i) => (
                    <button
                      key={i}
                      className='tag is-info is-medium'
                      value={item}
                      onClick={this.handleAnswer}>
                      {item}
                    </button>
                  ))}
              </span>
              {this.state.activityIsFinished ? (
                <button className='button is-success' onClick={this.startAgain}>
                  <span class='icon is-small'>
                    <i className='fas fa-redo'></i>
                  </span>
                </button>
              ) : (
                <button
                  className='button is-success'
                  onClick={this.handleCheck}
                  disabled={this.state.answer.length < 1}>
                  Check
                </button>
              )}
              <hr />
              <ProgressBar value={this.state.index} max={this.state.length} />
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrambleWordsActivity;
