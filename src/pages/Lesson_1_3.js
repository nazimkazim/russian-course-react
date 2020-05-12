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
                <Instruction letter="a" name="Читаем по слогам" engName="Read by syllables" />
                <ObjectPronounChart/>
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
                {/* <div className="columns">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Lesson_1_3;

