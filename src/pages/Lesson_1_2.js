import React, { Component } from "react";
import LessonHeader from './LessonHeaderTemplate';
import SectionHeader from '../components/SectionHeader';
import Instruction from '../components/Instruction';
import SyllablePlate from '../components/SyllablePlate';
import { syllableSet2 } from '../data/SyllablesData';
import ListenChooseRelevant from '../components/listenChooseRelevant/AudioContainer';
import { ListenChooseRelevantSet1 } from '../data/ListentChooseRelevant';
import MemorizeOnClickActivity from '../components/MemorizeTextOnClick/Index';
import { MTCText1, MTCText2, MTCText3, MTCText4 } from '../data/MemorizeTextClick';
import PersonalPronounChart from '../components/Charts/PersonalPronounsChart';
import FillInGapsActivity from '../components/FillInGapsActivity/Index';
import { FIGOCset1 } from '../data/FillInGapsOnClick';
import ActivityContainer from '../components/comprehendTextActivity/ActivityContainer';
import { set2TextQuizzer } from '../data/TextQuizzerData';
import ScrambleWordsActivity from '../components/ScrambleWordsActivity';
import { set2COSOC } from '../data/ComposeOrderedSentOnClick';
import NumbersZeroToTenchart from '../components/Charts/Numbers_0-10';
import LACRActivity from '../components/LookChooseRelevant.js/Index';
import { LCRSet1 } from '../data/LookAndChooseRelevant';
import { NWset1 } from '../data/newWords';
import NewWordsBoard from '../components/NewWordsBoard';
import DialogueContainer from "../components/dialoguesActivity/DialogueContainer";
import ReusableButton from '../components/ReusableButton';
import audio from '../images/MTWTP/lesson1.2/audio/audio.wav';
import { dialogue2, dialogue3 } from '../data/dialoguesData';


export default class SingleFlower extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hiden: false
    };
  }


  hideHandler = () => {
    this.setState({
      hiden: !this.state.hiden
    });
  };


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
                <Instruction letter="a" name="Слушайте пять (5) аудио фрагмента, и для каждого аудиофрагмента выберите три (3) соответствующих изображения" engName="Listen to five (5) audio clips, and for each audio clip, select three (3) matching images" />
                <ListenChooseRelevant data={ ListenChooseRelevantSet1 } />
                <hr />
                <div className="columns">
                  <div className={ `column ${this.state.hiden && 'hide'}` }>
                    <Instruction letter="a" name="Читайте и слушайте тексты. Попытайтесь отгадать незнакомые слова" engName="Listen and read the texts. Try to guess meanings of the unknown words" />
                    <ActivityContainer data={ set2TextQuizzer } />
                  </div>
                  <div className="column">
                    <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
                    <button className="button is-info marginBottom" onClick={ this.hideHandler }>{ this.state.hiden ? 'Reveal left part' : 'Hide left part' }</button>
                    <MemorizeOnClickActivity data={ MTCText1 } />
                    <hr />
                    <MemorizeOnClickActivity data={ MTCText2 } />
                    <hr />
                    <MemorizeOnClickActivity data={ MTCText3 } />
                    <hr />
                    <MemorizeOnClickActivity data={ MTCText4 } />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newSection">
          <SectionHeader name="Грамматика и упражнения (личные местоимения)" engName="Grammar and exrcises (personal pronouns)" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <Instruction letter="a" name="Слушайте и повторяйте за учителем" engName="Listen and repeat after your instructor" />
                <PersonalPronounChart />
                <Instruction letter="b" name="Замените слова на местоимения" engName="Replace the words with pronouns" />
                <FillInGapsActivity data={ FIGOCset1 } />
              </div>
              <div className="column">
                <Instruction letter="c" name="Научитесь составлять простые предложения" engName="Learn composing simple sentences" />
                <ScrambleWordsActivity data={ set2COSOC } />
              </div>
            </div>
          </div>
        </div>
        <div className="newSection">
          <SectionHeader name="Новые слова: цифры 0-10" engName="New words: numbers 0-10" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <Instruction letter="a" name="Слушайте и повторяйте за инструктором" engName="Listen and repeat after the instructor" />
                <NumbersZeroToTenchart />
              </div>
              <div className="column">
                <Instruction letter="б" name="Выберите число,отвечая на вопрос" engName="Choose a number, answering questions" />
                <NewWordsBoard data={ NWset1 } />
                <div className="marginBottom" />
                <LACRActivity data={ LCRSet1 } />
              </div>
            </div>
          </div>
        </div>
        <div className="newSection">
          <SectionHeader name="Практика слушания" engName="Speaking listening" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <Instruction letter="a" name="Слушайте диалог и запишите цифры" engName="Listen to the dialogue and write down numbers" />
                <ReusableButton audio={ audio } />
                <DialogueContainer dialogues={ dialogue2 } showInput="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="newSection">
          <SectionHeader name="Практика говорения" engName="Speaking practice" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <Instruction letter="б" name="Говорите данные предложения на Русском" engName="Say the given sentences in Russian" />
                <DialogueContainer dialogues={ dialogue3 } />
              </div>
            </div>
          </div>
        </div>


      </>
    );
  }
}
