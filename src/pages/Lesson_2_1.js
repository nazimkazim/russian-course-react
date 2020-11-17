import React from 'react';
import LessonHeader from './LessonHeaderTemplate';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import MatchingActivity from '../components/MatchWords';
import { matchingWordsData1, matchingWordsData2 } from '../data/MatchWordsData';
import VebConjugationTemplate from '../components/Charts/VerbConjugationTemplate';
import { conjVerbsSet1 } from '../data/ConjugatedVerbs';
import CasesTemplate from '../components/Charts/CasesTemplate';
import { prepositionalCaseData1, instrumentalCaseData1 } from '../data/CasesData';
import ScrambleWordsActivity from '../components/ScrambleWordsActivity';
import { set6COSOC } from '../data/ComposeOrderedSentOnClick';
import { NWset4, NWset5, NWset6 } from '../data/newWords';
import NewWordsBoard from '../components/NewWordsBoard';




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
        <SectionHeader name="Спряжения глагола. Предложный падеж" engName="Verb conjugation. Prepositional case" />
        <div className="container is-fluid">
          <div className="columns is-multiline">
            <Instruction letter="a" name="Слушайте и повторяйте спряжение" engName="Lsten and repeat conjugation" />
            { conjVerbsSet1.map(set => (
              <div className="column is-3">
                <VebConjugationTemplate centered={ true } set={ set } />
              </div>
            )) }
          </div>
          <div className="columns is-multiline">
            <div className="column is-half">
              <Instruction letter="a" name="Узнайте о предложном падеже" engName="Learn about prepositional case" />
              <NewWordsBoard data={ NWset5 } />
              <CasesTemplate centered={ true } data={ prepositionalCaseData1 } />
            </div>
            <div className="column is-half">
              <Instruction letter="b" name="Сопоставьте местоимение с глаголом" engName="Match subjects with verbs" />
              <MatchingActivity headerLeft="Subject" headerRight="Verb" data={ matchingWordsData2 } />
            </div>
            <div className="column">
              <Instruction letter="c" name="Научитесь составлять простые предложения" engName="Learn composing simple sentences" />
              <NewWordsBoard data={ NWset4 } />
              <ScrambleWordsActivity data={ set6COSOC } />
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Спряжения глагола. Творительный падеж" engName="Verb conjugation. Instrumental case" />
        <div className="container is-fluid">
          <div className="columns is-multiline">
            <div className="column is-half">
              <Instruction letter="a" name="Узнайте о творительном падеже" engName="Learn about instrumental case" />
              <NewWordsBoard data={ NWset6 } />
              <CasesTemplate centered={ true } data={ instrumentalCaseData1 } />
            </div>
            <div className="column is-half">
              <Instruction letter="c" name="Научитесь составлять простые предложения" engName="Learn composing simple sentences" />
              <NewWordsBoard data={ NWset4 } />
              <ScrambleWordsActivity data={ set6COSOC } />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
