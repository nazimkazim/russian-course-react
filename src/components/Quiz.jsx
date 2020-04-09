import React, { Component } from "react";
import click from "../data/media/click.wav";
import correct from "../data/media/correct.wav";
import denied from "../data/media/denied.mp3";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answers: [],
      myanswers: [],
      checked: false,
      isCorrect: false,
      isIncorrect: false,
    };
  }

  componentDidMount() {
    let answers = [];
    this.props.data.quiz.map((item) => {
      answers.push(item.answer);
      return answers;
    });

    this.setState({
      data: this.props.data.quiz,
      answers,
    });
  }

  handleAnswer = (evt, index) => {
    let sound = new Audio(click);
    sound.play();
    let option = evt.target.id;
    const array = [...this.state.myanswers];
    array[index] = option;
    this.setState({ myanswers: array });
  };

  checkHandler = () => {
    console.log("cleciked");
    if (this.state.myanswers.join(" ") === this.state.answers.join(" ")) {
      let sound = new Audio(correct);
      sound.play();
      this.setState({ isCorrect: true });
    } else {
      let sound = new Audio(denied);
      sound.play();
      this.setState({
        isIncorrect: true,
      });
      setTimeout(() => {
        this.setState({
          isIncorrect: false,
        });
      }, 3000);
    }
  };

  startAgainHandler = () => {
    this.setState({
      myanswers: [],
      index: 0,
      checked: false,
      isCorrect: false,
      isIncorrect: false,
    });
  };

  render() {
    //console.log(this.state.data);
    //console.log(this.state.answers.join(" "));
    //console.log(this.state.myanswers);
    //console.log(this.state.myanswers.join(" ") === this.state.answers.join(" "));
    return (
      <aside className="menu">
        <ul className="menu-label">
          {this.state.data.map((item, index) => (
            <div key={index}>
              <li className="has-text-grey-dark is-size-5 is-uppercase has-text-weight-semibold">
                {item.word}
              </li>
              <ul className="level tags">
                {item.options.map((option, i) => (
                  <li
                    className="menu-list-options level-item tag is-primary is-medium"
                    key={i}
                    onClick={(event) => this.handleAnswer(event, index)}
                    id={option}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        <p class="buttons">
          <button
            className={`button ${this.state.isCorrect && "is-success"}`}
            onClick={this.checkHandler}
            disabled={this.state.myanswers.length < 1}>
            {this.state.isCorrect ? "Good Job" : "Check"}
          </button>
          <button class="button" onClick={this.startAgainHandler}>
            <span class="icon is-small">
              <i className="fas fa-redo"></i>
            </span>
          </button>
        </p>

        {this.state.isIncorrect && (
          <div class="notification is-warning">Try again</div>
        )}
      </aside>
    );
  }
}

export default Quiz;
