import React from 'react';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import { conjVerbsSet2, conjVerbsSet3 } from '../data/ConjugatedVerbs';
import VebConjugationTemplate from '../components/Charts/VerbConjugationTemplate';
import MemorizeOnClickActivity from '../components/MemorizeTextOnClick/Index';
import { MTCTextCustomJon1dash1,MTCTextCustomJon1dash2, MTCTextCustomJon1dash3, MTCTextCustomJon1dash4, MTCTextCustomJon1dash5, MTCTextCustomJon1dash6, MTCTextCustomJon1dash7, MTCTextCustomJon1dash8,MTCTextCustomJon1dash9,MTCTextCustomJon1dash10 } from '../data/MemorizeTextClick';
import TenseDescriptionBox from '../components/TenseDescriptionBox';

export default function Lesson_2_1() {
  return (
    <>
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
            <TenseDescriptionBox word='Одеваться' tense='Present Tense (Imperfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash1 } />
            <hr />
            <TenseDescriptionBox word='Одеваться' tense='Future Tense (Imperfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash2 } />
            <hr />
            <TenseDescriptionBox word='Одеться' tense='Future Tense (Perfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash3 } />
            <hr />
            <TenseDescriptionBox word='Одеваться' tense='Past Tense (Imperfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash4 } />
            <hr />
            <TenseDescriptionBox word='Одеться' tense='Past Tense (Perfect)'/>
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
            <TenseDescriptionBox word='Мыться' tense='Present Tense (Imperfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash6 } />
            <hr />
            <TenseDescriptionBox word='Мыться' tense='Future Tense (Imperfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash7 } />
            <hr />
            <TenseDescriptionBox word='Помыться' tense='Future Tense (Perfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash8 } />
            <hr />
            <TenseDescriptionBox word='Мыться' tense='Past Tense (Imperfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash9 } />
            <hr />
            <TenseDescriptionBox word='Помыться' tense='Past Tense (Perfect)'/>
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash10 } />
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
