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
import PersonalPronounChart from '../components/Charts/PersonalPronounsChart'

import ActivityContainer from '../components/comprehendTextActivity/ActivityContainer';
import { set2TextQuizzer } from '../data/TextQuizzerData';


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
          <SectionHeader name="Грамматика и упражнения" engName="Grammar and exrcises" />
          <div className="container is-fluid">
            <div className="columns">
              <PersonalPronounChart/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
