import React, { Component } from 'react';
import LessonHeader from './LessonHeaderTemplate';
import SectionHeader from '../components/SectionHeader';
import Instruction from '../components/Instruction';
import SyllablePlate from '../components/SyllablePlate';
import { syllableSet3 } from '../data/SyllablesData';
import ScrambleWordsActivity from '../components/ScrambleWordsActivity';
import { set3COSOC } from '../data/ComposeOrderedSentOnClick';
import NewWordsBoard from '../components/NewWordsBoard';
import { NWset2 } from '../data/newWords';
import ObjectPronounChart from '../components/Charts/ObjectPronounsChart';
import ListenChooseRelevant from '../components/listenChooseRelevant/AudioContainer';
import { ListenChooseRelevantSet2 } from '../data/ListentChooseRelevant';
import ActivityContainer from '../components/comprehendTextActivity/ActivityContainer';
import { set3TextQuizzer } from '../data/TextQuizzerData';
import MemorizeOnClickActivity from '../components/MemorizeTextOnClick/Index';
import { MTCText5, MTCText6, MTCText7, MTCText8, MTCText9 } from '../data/MemorizeTextClick';
import ScrambleWordsWithPictureActivity from '../components/ScrambleWordsWithPictureActivity';
import { set4COSOC, set5COSOC } from '../data/ComposeOrderedSentOnClick';



class Lesson_1_3 extends Component {
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
                <Instruction letter="a" name="Читаем по слогам" engName="Read by syllables" />
                <ObjectPronounChart />
              </div>
              <div className="column">
                <Instruction letter="b" name="Научитесь составлять простые предложения" engName="Learn composing simple sentences" />
                <NewWordsBoard data={ NWset2 } />
                <div className="marginBottom" />
                <ScrambleWordsActivity data={ set3COSOC } />
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
                <ListenChooseRelevant data={ ListenChooseRelevantSet2 } />
                <hr />
                <div className="columns">
                  <div className={ `column ${this.state.hiden && 'hide'}` }>
                    <Instruction letter="a" name="Читайте и слушайте тексты. Попытайтесь отгадать незнакомые слова" engName="Listen and read the texts. Try to guess meanings of the unknown words" />
                    <ActivityContainer data={ set3TextQuizzer } />
                  </div>
                  <div className="column">
                    <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
                    <button className="button is-info marginBottom" onClick={ this.hideHandler }>{ this.state.hiden ? 'Reveal left part' : 'Hide left part' }</button>
                    <MemorizeOnClickActivity data={ MTCText5 } />
                    <hr />
                    <MemorizeOnClickActivity data={ MTCText6 } />
                    <hr />
                    <MemorizeOnClickActivity data={ MTCText7 } />
                    <hr />
                    <MemorizeOnClickActivity data={ MTCText8 } />
                    <hr />
                    <MemorizeOnClickActivity data={ MTCText9 } />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newSection">
          <SectionHeader name="Новые слова (люди)" engName="New Words(people)" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <Instruction letter="a" name="Выучите новые слова" engName="Learn new words" />
                <iframe src="https://quizlet.com/508934398/flashcards/embed?i=4bby1&x=1jj1" height="500" width="100%" title="people" styles={ { "border": 0 } } />
              </div>
            </div>
          </div>
        </div>
        <div className="newSection">
          <SectionHeader name="Практика" engName="Practice" />
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <Instruction letter="a" name="Сделайте предложения по примеру: Это + пол. Её/Его зовут + имя" engName="Make a sentence: Это + sex. Её/Его зовут + name" />
                <ScrambleWordsWithPictureActivity data={ set4COSOC } />
              </div>
              <div className="column">
              <Instruction letter="a" name="Сделайте предложения по примеру: Это + пол. Её/Его зовут + имя. Он/Она + профессия"engName="Make a sentence: Это + sex. Её/Его зовут + name. Он/Она + profession" />
                <ScrambleWordsWithPictureActivity data={ set5COSOC } />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Lesson_1_3;

