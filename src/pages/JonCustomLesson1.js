import React, { useState, useEffect } from 'react';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import { conjVerbsSet2, conjVerbsSet3, conjVerbsSet4, conjVerbsSet5, conjVerbsSet6, conjVerbsSet7 } from '../data/ConjugatedVerbs';
import VebConjugationTemplate from '../components/Charts/VerbConjugationTemplate';
import MemorizeOnClickActivity from '../components/MemorizeTextOnClick/Index';
import { MTCTextCustomJon1dash1, MTCTextCustomJon1dash2, MTCTextCustomJon1dash3, MTCTextCustomJon1dash4, MTCTextCustomJon1dash5, MTCTextCustomJon1dash6, MTCTextCustomJon1dash7, MTCTextCustomJon1dash8, MTCTextCustomJon1dash9, MTCTextCustomJon1dash10, MTCTextCustomJon1dash11, MTCTextCustomJon1dash12, MTCTextCustomJon1dash13, MTCTextCustomJon1dash14, MTCTextCustomJon1dash15, MTCTextCustomJon1dash16, MTCTextCustomJon1dash17, MTCTextCustomJon1dash18,MTCTextCustomJon1dash19, MTCTextCustomJon1dash20, MTCTextCustomJon1dash21, MTCTextCustomJon1dash22, MTCTextCustomJon1dash23, MTCTextCustomJon1dash24, MTCTextCustomJon1dash25,MTCTextCustomJon1dash26, MTCTextCustomJon1dash27, MTCTextCustomJon1dash28,MTCTextCustomJon1dash29,MTCTextCustomJon1dash30 } from '../data/MemorizeTextClick';
import TenseDescriptionBox from '../components/TenseDescriptionBox';

export default function Lesson_2_1() {
  const [randomSentences, setRandomSentence] = useState([]);
  const [chosenSentence, setChosenSentence] = useState([])

  const getRandomTextOnClickSentence = () => {
    let randNum1 = Math.floor(Math.random() * randomSentences.length);
    let randNum2 = Math.floor(Math.random() * randomSentences[randNum1].length);
    const randomSentence = randomSentences[randNum1][randNum2];
    setChosenSentence(randomSentence)
  };
  useEffect(() => {
    setRandomSentence([MTCTextCustomJon1dash1, MTCTextCustomJon1dash2, MTCTextCustomJon1dash3, MTCTextCustomJon1dash4, MTCTextCustomJon1dash5, MTCTextCustomJon1dash6, MTCTextCustomJon1dash7, MTCTextCustomJon1dash8, MTCTextCustomJon1dash9, MTCTextCustomJon1dash10, MTCTextCustomJon1dash11, MTCTextCustomJon1dash12, MTCTextCustomJon1dash13, MTCTextCustomJon1dash14, MTCTextCustomJon1dash15, MTCTextCustomJon1dash16, MTCTextCustomJon1dash17, MTCTextCustomJon1dash18, MTCTextCustomJon1dash19, MTCTextCustomJon1dash20, MTCTextCustomJon1dash21, MTCTextCustomJon1dash22, MTCTextCustomJon1dash23, MTCTextCustomJon1dash24, MTCTextCustomJon1dash25, MTCTextCustomJon1dash26, MTCTextCustomJon1dash27, MTCTextCustomJon1dash28, MTCTextCustomJon1dash29,MTCTextCustomJon1dash30]);
  }, []);
  //console.log(chosenSentence);
  return (
    <>
      <section className="newSection">
        <SectionHeader name="Выборочные предложения" engName="Random sentences" />
        <div className="container is-fluid">
          <div className="columns is-multiline">
            <Instruction letter="a" name="Нажмите на кнопку чтобы подучить случайное предложение" engName="Click the button to get a random sentence" />
            <div className="column">
              <MemorizeOnClickActivity randSent={chosenSentence} randomMode={ true } />
              <button className="button is-success" onClick={ getRandomTextOnClickSentence }>Random</button>
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Новые слова" engName="New words" />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Посмотрите на слова и попытайтесь отгадать значение этих слов. Слушайте и повторяйте за учителем слова" engName="Look through the words and try to understand their meaning. Listen and repeat the words after your teacher" />
              <iframe
                src="https://quizlet.com/540301456/flashcard/embed?i=4bby1&x=1jj1"
                height="500"
                width="100%"
                title="new words 1"
                styles={ "border:0" }></iframe>
            </div>
          </div>
          <div className="columns is-multiline">
            <Instruction letter="a" name="Слушайте и повторяйте спряжение глаголов" engName="Listen and repeat conjugation of verbs" />
            { conjVerbsSet2.map(set => (
              <div className="column is-3">
                <VebConjugationTemplate set={ set } />
              </div>
            )) }
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Практикуйте слово (Одеваться)" engName="Practice the word (get dressed)" />
        <div className="columns">
          <div className="column">
            <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
            <TenseDescriptionBox word='Одеваться' tense='Present Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash1 } />
            <hr />
            <TenseDescriptionBox word='Одеваться' tense='Future Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash2 } />
            <hr />
            <TenseDescriptionBox word='Одеться' tense='Future Tense (Perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash3 } />
            <hr />
            <TenseDescriptionBox word='Одеваться' tense='Past Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash4 } />
            <hr />
            <TenseDescriptionBox word='Одеться' tense='Past Tense (Perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash5 } />
            <hr />
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Практикуйте слово (Мыться/Помыться)" engName="Practice the word (to wash oneself)" />
        <div className="columns is-multiline">
          <Instruction letter="a" name="Слушайте и повторяйте спряжение глаголов" engName="Listen and repeat conjugation of verbs" />
          { conjVerbsSet3.map(set => (
            <div className="column is-3">
              <VebConjugationTemplate set={ set } />
            </div>
          )) }
        </div>
        <div className="columns">
          <div className="column">
            <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
            <TenseDescriptionBox word='Мыться' tense='Present Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash6 } />
            <hr />
            <TenseDescriptionBox word='Мыться' tense='Future Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash7 } />
            <hr />
            <TenseDescriptionBox word='Помыться' tense='Future Tense (Perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash8 } />
            <hr />
            <TenseDescriptionBox word='Мыться' tense='Past Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash9 } />
            <hr />
            <TenseDescriptionBox word='Помыться' tense='Past Tense (Perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash10 } />
            <hr />
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Практикуйте слово (Бриться/Побриться)" engName="Practice the word (to wash oneself)" />
        <div className="columns is-multiline">
          <Instruction letter="a" name="Слушайте и повторяйте спряжение глаголов" engName="Listen and repeat conjugation of verbs" />
          { conjVerbsSet4.map(set => (
            <div className="column is-3">
              <VebConjugationTemplate set={ set } />
            </div>
          )) }
        </div>
        <div className="columns">
          <div className="column">
            <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
            <TenseDescriptionBox word='Бриться' tense='Present Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash11 } />
            <hr />
            <TenseDescriptionBox word='Бриться' tense='Future Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash12 } />
            <hr />
            <TenseDescriptionBox word='Побриться' tense='Future Tense (perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash13 } />
            <hr />
            <TenseDescriptionBox word='Бриться' tense='Past Tense (imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash14 } />
            <hr />
            <TenseDescriptionBox word='Побриться' tense='Past Tense (perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash15 } />
            <hr />
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Практикуйте слово (Краситься/Накраситься)" engName="Practice the word (to wash oneself)" />
        <div className="columns is-multiline">
          <Instruction letter="a" name="Слушайте и повторяйте спряжение глаголов" engName="Listen and repeat conjugation of verbs" />
          { conjVerbsSet5.map(set => (
            <div className="column is-3">
              <VebConjugationTemplate set={ set } />
            </div>
          )) }
        </div>
        <div className="columns">
          <div className="column">
            <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
            <TenseDescriptionBox word='Краситься' tense='Present Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash16 } />
            <hr />
            <TenseDescriptionBox word='Краситься' tense='Future Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash17 } />
            <hr />
            <TenseDescriptionBox word='Накраситься' tense='Future Tense (perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash18 } />
            <hr />
            <TenseDescriptionBox word='Краситься' tense='Past Tense (imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash19 } />
            <hr />
            <TenseDescriptionBox word='Накраситься' tense='Past Tense (perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash20 } />
            <hr />
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Практикуйте слово (Собираться/Собраться)" engName="Practice the word (to pack things up)" />
        <div className="columns is-multiline">
          <Instruction letter="a" name="Слушайте и повторяйте спряжение глаголов" engName="Listen and repeat conjugation of verbs" />
          { conjVerbsSet6.map(set => (
            <div className="column is-3">
              <VebConjugationTemplate set={ set } />
            </div>
          )) }
        </div>
        <div className="columns">
          <div className="column">
            <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
            <TenseDescriptionBox word='Собираться' tense='Present Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash21 } />
            <hr />
            <TenseDescriptionBox word='Собираться' tense='Future Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash22 } />
            <hr />
            <TenseDescriptionBox word='Собраться' tense='Future Tense (perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash23 } />
            <hr />
            <TenseDescriptionBox word='Собираться' tense='Past Tense (imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash24 } />
            <hr />
            <TenseDescriptionBox word='Собраться' tense='Past Tense (perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash25 } />
            <hr />
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Практикуйте слово (Садиться/Сесть)" engName="Practice the word (to sit down)" />
        <div className="columns is-multiline">
          <Instruction letter="a" name="Слушайте и повторяйте спряжение глаголов" engName="Listen and repeat conjugation of verbs" />
          { conjVerbsSet7.map(set => (
            <div className="column is-3">
              <VebConjugationTemplate set={ set } />
            </div>
          )) }
        </div>
        <div className="columns">
          <div className="column">
            <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
            <TenseDescriptionBox word='Садиться' tense='Present Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash26 } />
            <hr />
            <TenseDescriptionBox word='Садиться' tense='Future Tense (Imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash27 } />
            <hr />
            <TenseDescriptionBox word='Сесть' tense='Future Tense (perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash28 } />
            <hr />
            <TenseDescriptionBox word='Садиться' tense='Past Tense (imperfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash29 } />
            <hr />
            <TenseDescriptionBox word='Сесть' tense='Past Tense (perfect)' />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash30 } />
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
