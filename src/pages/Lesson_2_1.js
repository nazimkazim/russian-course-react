import React from 'react';
import LessonHeader from './LessonHeaderTemplate';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import MatchingActivity from '../components/MatchWords'
import {matchingWordsData1} from '../data/MatchWordsData'



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
              <MatchingActivity data={matchingWordsData1}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
