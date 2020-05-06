import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LessonContext } from "../context";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class LessonHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      slug: this.props.topic    };
  }

  static contextType = LessonContext;

  componentDidMount() {
  }
  render() {
    const { getLesson } = this.context;
    const lesson = getLesson(this.props.topic);
    if (!lesson) {
      return (
        <div className="error">
          <h3>no such room can be found...</h3>
          <Link to="/flowers" className="btn-primary">
            вернуться к цветам
          </Link>
        </div>
      );
    }


    const { topic, objectives, cover, grammarGoals, vocabularyGoals, functionGoals } = lesson;
    return (
      <div className="columns">
        <div className="column carousel-column">
          <div className="carousel-container">
            <img src={ cover && cover } alt="" />
          </div>
        </div>
        <div className="column info-column">
          <div className="single-flower-info-container card">
          <span className="tag is-success is-large">{ this.props.lesson }</span> 
            <div className="card-content">
              <p className="has-text-centered is-size-3 is-capitalized">
              { topic }
              </p>
              
              <hr></hr>
              <ul className="has-text-centered">
                <strong>Цели</strong>{ objectives.map((obj,index) => (
                  <li key={index}>{ obj }</li>
                )) }
              </ul>
              <ul className="has-text-centered">
                <strong>Грамматика</strong> { grammarGoals.map((obj,index) => (
                  <li key={index}>{ obj }</li>
                )) }
              </ul>
              <ul className="has-text-centered">
                <strong>Слова</strong> { vocabularyGoals.map((obj, index) => (
                  <li key={index}>{ obj }</li>
                )) }
              </ul>
              <ul className="has-text-centered">
                <strong>Функция</strong>
                <li>{ functionGoals }</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
