import React, { Component } from "react";
import LessonHeader from './LessonHeaderTemplate';
import AlphabetComponent from '../components/Charts/Alphabet';
import SectionHeader from '../components/SectionHeader';
import Instruction from '../components/Instruction';
import SyllablePlate from '../components/SyllablePlate';
import ListenOptionsAndClick from '../components/ListenOptionsAndClick';
import { syllableSet1 } from '../data/SyllablesData';
import MatchTranscriptedWordToPicture from '../components/MatchTranscriptedWordToPicture';
import ScrambleWordsActivity from '../components/ScrambleWordsActivity';
import { set1 } from '../data/MTWTP';
import { set1COSOC } from '../data/ComposeOrderedSentOnClick';
import TextQuizzer from '../components/TextQuizzer';
import { set1TextQuizzer } from '../data/TextQuizzerData';
import { dialogue1 } from '../data/dialoguesData';
import Quiz from '../components/Quiz';
import appleImg from '../images/TextQuizzer/lesson1.1/apple-company.jpg';
import DialogueContainer from "../components/dialoguesActivity/DialogueContainer";
//import Snake from '../components/Snake/Snake'

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
          <SectionHeader name="Новые слова (основные слова)" engName="New words (basic words)" />
          <div className="container is-fluid">
            <Instruction letter="a" name="Слушайте и повторяйте за учителем слова" engName="Listen and repeat the words after your teacher" />
            <iframe src="https://quizlet.com/500020326/flashcards/embed?i=4bby1&x=1jj1" title="Russian Basic Words" height="500" width="100%" styles={ { "border": 0 } }></iframe>
          </div>
        </section>
        <section className="newSection">
          <SectionHeader name="Упражнение (Техника и технология)" engName="Exercise (Machinery and technology)" />
          <div className="container is-fluid">
            <div className="columns is-multiline is-vcentered">
              <div className="column">
                <Instruction letter="a" name="Научитесь печатать имена людей и компаний на русском" engName="Learn type people's names and companies's names in russian" />
                <MatchTranscriptedWordToPicture data={ set1 } />
              </div>
              <div className="column">
                <Instruction letter="b" name="Научитесь составлять простые предложения" engName="Learn composing simple sentences" />
                <ScrambleWordsActivity data={ set1COSOC } />
              </div>
            </div>
          </div>
        </section>
        <section className="newSection">
          <SectionHeader name="Новые слова (Техника и технология)" engName="New words (Machinery and technology)" />
          <div className="container is-fluid">
            <Instruction letter="a" name="Слушайте и повторяйте за учителем слова" engName="Listen and repeat the words after your teacher" />
            <iframe src="https://quizlet.com/501180727/flashcards/embed?i=4bby1&x=1jj1" title="Technology and machinery" height="500" width="100%" styles={ { "border": 0 } }></iframe>
          </div>
        </section>
        <section className="newSection">
          <SectionHeader name="Чтение" engName="Reading" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <Instruction letter="a" name="Читайте текст" engName="Read the text" />
                <TextQuizzer data={ set1TextQuizzer } image={ appleImg } />
              </div>
              <div className="column">
                <Instruction letter="b" name="Что значат выделенные слова" engName="What do the bolded words mean" />
                <Quiz data={ set1TextQuizzer } />
              </div>
            </div>
          </div>
        </section>
        <div className="newSection">
          <SectionHeader name="выучите слова(страны)" engName="learn by heart the words (countries)"/>
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
              <iframe src="https://quizlet.com/501391453/flashcards/embed?i=4bby1&x=1jj1" height="500" title="countries" width="100%" styles={ { "border": 0 } }></iframe>
              </div>
            </div>
          </div>  
        </div>
        <section className="newSection">
          <SectionHeader name="Практика говорения" engName="Speaking practice" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <Instruction name="Говорите данные предложения на Русском" engName="Say the given sentences in Russian" />
                <DialogueContainer dialogues={ dialogue1 } />
              </div>
            </div>
          </div>
        </section>
        
        {/* <section className="newSection">
          <Snake/>
        </section> */}
      </>
    );
  }
}
