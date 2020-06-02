/* eslint-disable no-extend-native */
import React, { Component } from "react";
import click from "../data/media/click.wav";
import correct from "../data/media/correct.wav";
import denied from "../data/media/denied.mp3";
let _ = require("lodash");

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      mixedWords: [],
      myanswers: [],
      allPairs: [],
      checked: false,
      isCorrect: false,
      isIncorrect: false
    };
  }

  componentDidMount() {
    let mixedWords = [];
    let allPairs = [];
    this.props.data.quiz && this.props.data.quiz.map((item) => {
      mixedWords.push(item.word, item.translation);
      allPairs.push(item.pair);
      return (mixedWords, allPairs);
    });

    this.setState({
      data: this.props.data.quiz,
      mixedWords: _.shuffle(mixedWords),
      allPairs
    });
    //console.log(this.props.data);
  }

  selectWords = (e) => {
    let items = e.target.value;
    let myanswers = this.state.myanswers.concat(items);
    this.setState({ myanswers }, () => {
      if (this.state.myanswers.length === 2) {
        if (this.checkAnswers(this.state.myanswers, this.state.allPairs)) {
          console.log("correct");
          this.setState({
            myanswers:[]
          })
        } else {
          console.log("incorrect");
        }
      } else {
        console.log('choose a pair');
      }
    });


  };

  checkAnswers = (answersArr, allPairs) => {
    let bools = []
    allPairs.forEach((arr) => {
      this.arraysEqual(answersArr, arr);
      console.log(this.arraysEqual(answersArr, arr));
      console.log(arr, this.state.myanswers);
      bools.push(this.arraysEqual(answersArr, arr))
    });

    if (bools.includes(true)) {
      return true
    }
  };

  arraysEqual = (a, b) => {
    return a.sort().toString() === b.sort().toString() 
  };



  render() {
    //console.log(this.state.mixedWords);
    //console.log(this.state.myanswers);
    //console.log(this.state.allPairs);
    //console.log(this.state.myanswers.join(" ") === this.state.answers.join(" "));
    return (
      <div>
        <div className="tags are-medium">
          { this.state.mixedWords.map((item) => (
            <button value={ item } onClick={ (e) => { this.selectWords(e); } } className="tag is-warning">{ item }</button>
          )) }
        </div>
      </div>
    );
  }
}

export default Quiz;

