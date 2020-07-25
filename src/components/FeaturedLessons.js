import React, { Component } from "react";
import { LessonContext } from "../context";
import Loading from "./Loading";
import Lesson from "./Lesson";
import Title from "./Title";

export default class FeaturedLessons extends Component {
  static contextType = LessonContext;
  render() {
    let { loading, lessons } = this.context;
    lessons = lessons.map(lesson => {
      return <Lesson key={lesson.id} lesson={lesson} />;
    });

    return (
      <section className="featured-lessons">
        <Title title="Все уроки" />
        <div className="columns featured-lessons-center is-multiline">
          {loading ? <Loading words="уроки загружаются" /> : lessons}
        </div>
      </section>
    );
  }
}
