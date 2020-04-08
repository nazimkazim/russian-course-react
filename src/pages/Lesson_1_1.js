import React, { Component } from "react";
import LessonHeader from './LessonHeaderTemplate';
import AlphabetComponent from '../components/Alphabet';
import SectionHeader from '../components/SectionHeader';
import Instruction from '../components/Instruction';
import SyllablePlate from '../components/SyllablePlate';
import ListenOptionsAndClick from '../components/ListenOptionsAndClick';
import { syllableSet1 } from '../data/SyllablesData';
import MatchTranscriptedWordToPicture from '../components/MatchTranscriptedWordToPicture';
import ScrambleWordsActivity from '../components/ScrambleWordsActivity';
import { set1 } from '../data/MTWTP';
import {set1COSOC} from '../data/ComposeOrderedSentOnClick'


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
          <SectionHeader name="Русский алфавит" engName="Russian alphabet" />
          <div className="container is-fluid">
            <Instruction letter="a" name="Слушайте и повторяйте за учителем Русский алфавит" engName="Listen and repeat the Russian alphabet after your teacher" />
            <AlphabetComponent />
          </div>
        </section>
        <section className="newSection">
          <SectionHeader name="Читаем по слогам" engName="Read by syllables" />
          <div className="container is-fluid">
            <div className="columns is-vcentered">
              <div className="column">
                <Instruction letter="a" name="Нажмите на слог и повторяйте" engName="Click a syllable and repeat" />
                <SyllablePlate syllables={ syllableSet1 } />
              </div>
              <div className="column">
                <Instruction letter="б" name="Проверьте знания" engName="Check your knowledge" />
                <ListenOptionsAndClick syllables={ syllableSet1 } />
              </div>
            </div>
          </div>
        </section>
        <section className="newSection">
          <SectionHeader name="Новые слова" engName="New words" />
          <div className="container is-fluid">
            <Instruction letter="a" name="Слушайте и повторяйте за учителем слова" engName="Listen and repeat the words after your teacher" />
          </div>
          <div>
            <iframe src="https://quizlet.com/500020326/flashcards/embed?i=4bby1&x=1jj1" title="Russian Basic Words" height="500" width="100%" styles={ { "border": 0 } }></iframe>
          </div>
        </section>
        <section className="newSection">
          <SectionHeader name="Техника и технология" engName="Machinery and technology" />
          <div className="container is-fluid">
            <div className="columns is-multiline is-vcentered">
            <div className="column">
            <Instruction letter="a" name="Выучите новые слова связанные с техникой и технологией" engName="Learn new words related to machinery and technology" />
              <MatchTranscriptedWordToPicture data={ set1 } />
            </div>
            <div className="column">
            <Instruction letter="a" name="Выучите новые слова связанные с техникой и технологией" engName="Learn new words related to machinery and technology" />
              <ScrambleWordsActivity data={set1COSOC}/>
            </div>
            </div>
          </div>
        </section>

      </>
    );
  }
}
