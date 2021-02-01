/* eslint-disable no-extend-native */
import React, { Component } from 'react';
import correct from '../data/media/correct.wav';
import denied from '../data/media/denied.mp3';
import Notification from './Notification';
import { speakStr } from '../components/Pronunciation';
let _ = require('lodash');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mixedWords: [],
      myanswers: [],
      allPairs: [],
      checked: false,
      isCorrect: false,
      isIncorrect: false,
    };
  }

  componentDidMount() {
    let mixedWords = [];
    let allPairs = [];
    this.props.data.quiz &&
      this.props.data.quiz.map((item) => {
        mixedWords.push(
          { word: item.word, disabled: false },
          { translation: item.translation, disabled: false }
        );
        allPairs.push(item.pair);
        return mixedWords, allPairs;
      });

    this.setState({
      data: this.props.data.quiz,
      mixedWords: _.shuffle(mixedWords),
      allPairs,
    });
    //console.log(this.props.data);
  }

  selectWords = (e) => {
    let items = e.target.value;
    let myanswers = this.state.myanswers.concat(items);
    speakStr(items, 'ru-Ru');
    this.setState({ myanswers }, () => {
      if (this.state.myanswers.length === 2) {
        if (this.checkAnswers(this.state.myanswers, this.state.allPairs)) {
          //console.log("correct");
          let sound = new Audio(correct);
          sound.play();
          const myFunction = (value) => {
            this.setState({
              mixedWords: this.state.mixedWords.map((item) =>
                myanswers.includes(item.translation) ||
                myanswers.includes(item.word)
                  ? Object.assign({}, item, { disabled: true })
                  : item
              ),
              isCorrect: true,
            });
          };

          setTimeout(() => {
            this.setState({ isCorrect: false });
          }, 1000);

          this.state.myanswers.forEach(myFunction);
          this.setState({
            myanswers: [],
          });
        } else {
          //console.log("incorrect");
          let sound = new Audio(denied);
          sound.play();
          this.setState({
            myanswers: [],
            isIncorrect: true,
          });
          setTimeout(() => {
            this.setState({ isIncorrect: false });
          }, 1000);
        }
      } else {
        //console.log('choose a pair');
      }
    });
  };

  checkAnswers = (answersArr, allPairs) => {
    let bools = [];
    allPairs.forEach((arr) => {
      this.arraysEqual(answersArr, arr);
      //console.log(this.arraysEqual(answersArr, arr));
      //console.log(arr, this.state.myanswers);
      bools.push(this.arraysEqual(answersArr, arr));
    });

    if (bools.includes(true)) {
      return true;
    }
  };

  arraysEqual = (a, b) => {
    return a.sort().toString() === b.sort().toString();
  };

  render() {
    //console.log(this.state.mixedWords);
    //console.log(this.state.myanswers);
    //console.log(this.state.allPairs);
    //console.log(this.state.myanswers.join(" ") === this.state.answers.join(" "));
    return (
      <div>
        <div className='tags are-medium'>
          {this.state.mixedWords.map((item, index) => (
            <button
              key={index}
              style={{ cursor: 'pointer' }}
              disabled={item.disabled}
              value={item.word || item.translation}
              onClick={(e) => {
                this.selectWords(e);
              }}
              className={`tag ${item.disabled && 'tag is-success'}`}>
              {item.word || item.translation}
            </button>
          ))}
          {this.state.isCorrect && (
            <Notification message='Correct' type='success' />
          )}
          {this.state.isIncorrect && (
            <Notification message='Try again' type='error' />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
