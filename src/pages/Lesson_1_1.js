import React, { Component } from "react";
import LessonHeader from './LessonHeaderTemplate';
import AlphabetComponent from '../components/Alphabet';
import SectionHeader from '../components/SectionHeader'

export default class Lesson_1_1 extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() { }
  render() {

    return (
      <>
        <section>
          <div className="container is-fluid">
            <LessonHeader topic="Известные брэнды" lesson="Урок 1.1" />
          </div>
        </section>
        <section className="newSection">
        <SectionHeader name="Русский алфавит" engName="Russian alphabet"/>
          <div className="container is-fluid">
            <AlphabetComponent />
          </div>
        </section>
      </>
    );
  }
}
