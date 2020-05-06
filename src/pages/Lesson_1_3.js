import React, { Component } from 'react';
import LessonHeader from './LessonHeaderTemplate';
import SectionHeader from '../components/SectionHeader';
import Instruction from '../components/Instruction';
import SyllablePlate from '../components/SyllablePlate';
import { syllableSet3 } from '../data/SyllablesData';
import ScrambleWordsActivity from '../components/ScrambleWordsActivity';
import { set2COSOC } from '../data/ComposeOrderedSentOnClick';
import NewWordsBoard from '../components/NewWordsBoard';
import { NWset2 } from '../data/newWords';


class Lesson_1_3 extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container is-fluid">
            <LessonHeader topic="Меня зовут Кхан" lesson="Урок 1.3" />
          </div>
        </section>
        <section className="newSection">
          <SectionHeader name="Произношение и новые слова" engName="Pronunciation and new words" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <Instruction letter="a" name="Читаем по слогам" engName="Read by syllables" />
                <SyllablePlate syllables={ syllableSet3 } />
              </div>
              <div className="column">
                <Instruction letter="b" name="Научитесь составлять простые предложения" engName="Learn composing simple sentences" />
                <NewWordsBoard data={ NWset2 } />
                <div className="marginBottom" />
                <ScrambleWordsActivity data={ set2COSOC } />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Lesson_1_3;

