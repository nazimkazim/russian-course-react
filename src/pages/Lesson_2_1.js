import React from 'react';
import LessonHeader from './LessonHeaderTemplate';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import MatchingActivity from '../components/MatchWords';
import { matchingWordsData1, matchingWordsData2 } from '../data/MatchWordsData';
import VebConjugationTemplate from '../components/Charts/VerbConjugationTemplate';
import { conjVerbsSet1 } from '../data/ConjugatedVerbs';
import CasesTemplate from '../components/Charts/CasesTemplate'
import {prepositionalCaseData1} from '../data/CasesData'




export default function Lesson_2_1() {
  return (
    <>
      <section>
        <div className="container is-fluid">
          <LessonHeader topic="Моя жизнь" lesson="Урок 4" />
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Новые слова" engName="New words" />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Выучите новые слова. Профессии" engName="Learn new words. Professions" />
              <iframe
                src="https://quizlet.com/546474072/flashcards/embed?i=4bby1&x=1jj1"
                height="500"
                width="100%"
                title="new words 1"
                styles={ "border:0" }></iframe>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Выучите новые слова. Места" engName="Learn new words. Places" />
              <iframe
                src="https://quizlet.com/546475157/flashcards/embed?i=4bby1&x=1jj1"
                height="500"
                width="100%"
                title="new words 1"
                styles={ "border:0" }></iframe>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Сопоставьте профессии с местом" engName="Match professions with places" />
              <MatchingActivity headerLeft="Places" headerRight="Jobs" data={ matchingWordsData1 } />
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Спряжения глагола" engName="Verb conjugation" />
        <div className="container is-fluid">
          <div className="columns is-multiline">
            <Instruction letter="a" name="Слушайте и повторяйте спряжение" engName="Lsten and repeat conjugation" />
            { conjVerbsSet1.map(set => (
              <div className="column is-3">
                <VebConjugationTemplate centered={true} set={ set } />
              </div>
            )) }
          </div>
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Узнайте о предложном падеже" engName="Learn about prepositional case" />
              <CasesTemplate centered={true} data={prepositionalCaseData1}/>
            </div>
            <div className="column">
              <Instruction letter="a" name="Сопоставьте местоимение с глаголом" engName="Match subjects with verbs" />
              <MatchingActivity headerLeft="Subject" headerRight="Verb" data={ matchingWordsData2 } />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
