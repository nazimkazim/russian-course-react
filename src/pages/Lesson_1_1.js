import React, { Component } from "react";
import LessonHeader from './LessonHeaderTemplate';
import AlphabetComponent from '../components/Alphabet';
import SectionHeader from '../components/SectionHeader'
import Instruction from '../components/Instruction'
import SyllablePlate from '../components/SyllablePlate'
import ListenOptionsAndClick from '../components/ListenOptionsAndClick'
import {syllableSet1} from '../data/SyllablesData'


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
            <Instruction letter="a" name="Слушайте и повторяйте за учителем Русский алфавит" engName="Listen and repeat after your teacher the Russian alphabet"/>
            <AlphabetComponent />
          </div>
        </section>
        <section className="newSection">
        <SectionHeader name="Читаем по слогам" engName="Read by syllables"/>
          <div className="container is-fluid">
            <Instruction letter="a" name="Нажмите на слог и повторяйте" engName="Click a syllable and repeat"/>
            <div className="columns is-vcentered">
              <div className="column">
              <SyllablePlate syllables={syllableSet1}/>
              </div>
              <div className="column">
              <ListenOptionsAndClick syllables={syllableSet1}/>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
