import React from 'react';
import LessonHeader from './LessonHeaderTemplate';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import MatchingActivity from '../components/MatchWords';
import { matchingWordsData1, matchingWordsData2, matchingWordsData3, matchingWordsData4, matchingWordsData5, matchingWordsData6, matchingWordsData7 } from '../data/MatchWordsData';
import VebConjugationTemplate from '../components/Charts/VerbConjugationTemplate';
import { conjVerbsSet1, conjVerbsSet1_2 } from '../data/ConjugatedVerbs';
import CasesTemplate from '../components/Charts/CasesTemplate';
import { prepositionalCaseData1, instrumentalCaseData1 } from '../data/CasesData';
import ScrambleWordsActivity from '../components/ScrambleWordsActivity';
import { set6COSOC, set7COSOC, set8COSOC } from '../data/ComposeOrderedSentOnClick';
import { NWset4, NWset5, NWset6, NWset7 } from '../data/newWords';
import NewWordsBoard from '../components/NewWordsBoard';
import MemorizeOnClickActivity from '../components/MemorizeTextOnClick/Index';
import { MTCText10, MTCText11 } from '../data/MemorizeTextClick';
import { generateText1 } from '../data/TextGenerator';
import TextGenerator from '../components/TextGenerator/index';
import MemoryGame from '../components/MemoryGame/MemoryContainer';
import { MGdata6, MGdata7, MGdata8, MGdata9 } from '../data/MemoryGameData';
import Snake from '../components/Snake/Snake';
import { snakeDataSet6, snakeDataSet7, snakeDataSet8 } from '../data/SnakeData';
import CaseQuiz from '../components/CaseQuiz/Index'
import {PrepositionalCaseQuiz} from '../data/CaseQuiz'




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
            <div className="column is-half">
              <Instruction letter="c" name="Научитесь составлять простые предложения" engName="Learn composing simple sentences" />
              <CaseQuiz data={PrepositionalCaseQuiz}/>
            </div>
            <div className="column is-half">
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
              <ScrambleWordsActivity data={ set7COSOC } />
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Отработка предложений. Работать" engName="Sentence drill. Work" />
        <div className="container is-fluid">
          <div className="columns is-multiline">
            <div className="column">
              <Instruction letter="a" name="Попытайтесь сказать предложения на Русском" engName="Try to say the sentences in Russian" />
              <MemorizeOnClickActivity data={ MTCText10 } />
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Новые слова" engName="New words" />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Выучите новые слова. Места покушать" engName="Learn new words. Places to eat" />
              <iframe
                src="https://quizlet.com/549416320/flashcards/embed?i=4bby1&x=1jj1"
                height="500"
                width="100%"
                title="new words 1"
                styles={ "border:0" }></iframe>
            </div>
          </div>
          <div className="columns is-multiline">
            <Instruction letter="b" name="Сопоставьте местоимение с глаголом" engName="Match subjects with verbs" />
            <div className="column">
              <MatchingActivity headerLeft="Subject" headerRight="Verb" data={ matchingWordsData3 } />
            </div>
            <div className="column">
              <MatchingActivity headerLeft="Subject" headerRight="Verb" data={ matchingWordsData4 } />
            </div>
            <div className="column">
              <MatchingActivity headerLeft="Subject" headerRight="Verb" data={ matchingWordsData5 } />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Instruction letter="c" name="Научитесь составлять простые предложения" engName="Learn composing simple sentences" />
              <NewWordsBoard data={ NWset7 } />
              <ScrambleWordsActivity data={ set8COSOC } />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="column">
                <Instruction letter="a" name="Попытайтесь сказать предложения на Русском" engName="Try to say the sentences in Russian" />
                <MemorizeOnClickActivity data={ MTCText11 } />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Новые слова" engName="New words" />
        <div className="container is-fluid">
          <div className="columns is-multiline">
            <Instruction letter="a" name="Слушайте и повторяйте спряжение" engName="Lsten and repeat conjugation" />
            { conjVerbsSet1_2.map(set => (
              <div className="column is-6">
                <VebConjugationTemplate centered={ true } set={ set } />
              </div>
            )) }
          </div>
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Выучите новые фразы со словами ИДТИ и ВСТАВАТЬ" engName="Learn new phrases with words ИДТИ и ВСТАВАТЬ" />
              <iframe
                src="https://quizlet.com/555496386/flashcards/embed?i=4bby1&x=1jj1"
                height="500"
                width="100%"
                title="new words 1"
                styles={ "border:0" }></iframe>
            </div>
          </div>
          <div className="columns is-multiline">
            <Instruction letter="b" name="Сопоставьте местоимение с глаголом" engName="Match subjects with verbs" />
            <div className="column is-6">
              <MatchingActivity headerLeft="Subject" headerRight="Verb" data={ matchingWordsData6 } />
            </div>
            <div className="column is-6">
              <MatchingActivity headerLeft="Subject" headerRight="Verb" data={ matchingWordsData7 } />
            </div>
            <div className="column is-6">
              <Instruction letter="c" name="Прочтите тексты, как минимум 3 раза, и затем расскажите о своем дне" engName="Read texts at least 3 times, and then tell about your own day. You may record a video and upload to Youtube and share a link in disscussion" />
              <TextGenerator text={ generateText1 } />
            </div>
          </div>
        </div>
      </section>
      <div className="newSection">
        <SectionHeader name="Практика" engName="Practice" />
        <div className="columns">
          <div className="column">
            <Instruction letter="а" name="Соотнесите карты" engName="Match the cards" />
            <MemoryGame data={ [
              { name: "Профессия/Место работы (Profession/Work place)", set: MGdata6 },
              { name: "Спряжение глагола РАБОТАТЬ (Verb conjugation РАБОТАТЬ)", set: MGdata7 },
              { name: "Спряжение глагола ВСТАТЬ (Verb conjugation ВСТАТЬ)", set: MGdata8 },
              { name: "Спряжение глагола ИДТИ (Verb conjugation ИДТИ)", set: MGdata9 }
            ] } />
          </div>
          <div className="column">
            <Instruction letter="б" name="Съедайте буквы по порядку" engName="Eat letters in order" />
            <Snake data={ [
              { name: "Места покушать (Places to eat)", set: snakeDataSet6 },
              { name: "Места работы (Work places)", set: snakeDataSet7 },
              { name: "Профессии (Professions)", set: snakeDataSet8 }
              ] } />
          </div>
        </div>
      </div>
    </>
  );
}
