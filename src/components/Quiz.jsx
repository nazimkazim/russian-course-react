import React, { Component } from "react";
let _ = require("lodash");
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answers: [],
      myanswers: [],
      index: "",
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
    let option = evt.target.id;
    const array = [...this.state.myanswers];
    array[index] = option;
    this.setState({ myanswers: array });
  };

  render() {
    //console.log(this.state.data);
    //console.log(this.state.answers);
    console.log(this.state.myanswers)
    return (
      <aside className="menu">
        <ul className="menu-label">
          {this.state.data.map((item, index) => (
            <div key={index}>
              <li className="has-text-grey-dark is-size-5 is-uppercase has-text-weight-semibold">
                {item.word}
              </li>
              <ul className="menu-list">
                {item.options.map((option, i) => (
                  <span
                    className="menu-list-options"
                    key={i}
                    onClick={(event) => this.handleAnswer(event, index)}
                    id={option}>
                    {option}
                  </span>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </aside>
    );
  }
}

export default Quiz;
