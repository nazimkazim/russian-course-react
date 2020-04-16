import React, { Component } from "react";
import LessonHeader from './LessonHeaderTemplate';
import SectionHeader from '../components/SectionHeader';
import Instruction from '../components/Instruction';
import SyllablePlate from '../components/SyllablePlate';
import { syllableSet2 } from '../data/SyllablesData';
import ListenChooseRelevant from '../components/listenChooseRelevant/AudioContainer'
import {ListenChooseRelevantSet1} from '../data/ListentChooseRelevant'

export default class SingleFlower extends Component {
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
            <LessonHeader topic="Много общего" lesson="Урок 1.2" />
          </div>
        </section>
        <section className="newSection">
          <SectionHeader name="Произношение и новые слова" engName="Pronunciation and new words" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <Instruction letter="a" name="Читаем по слогам" engName="Read by syllables" />
                <SyllablePlate syllables={ syllableSet2 } />
              </div>
              <div className="column">
                <Instruction letter="b" name="Учим новые слова (профессии)" engName="Learn new words(professions)" />
                <iframe src="https://quizlet.com/502383431/flashcards/embed?i=4bby1&x=1jj1" height="500" width="100%" title="professions" styles={ { "border": 0 } }></iframe>
              </div>
          </div>
          </div>
      </section>
      <div className="newSection">
        <SectionHeader name="Чтение и слушание" engName="Reading and listening" />
        <div className="container is-fluid">
        <div className="columns">
            <div className="column">
              <ListenChooseRelevant data={ListenChooseRelevantSet1}/>
            </div>
        </div>
        </div>
      </div>
      </>
    );
  }
}
