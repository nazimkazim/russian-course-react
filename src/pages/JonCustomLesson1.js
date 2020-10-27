import React from 'react';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import { conjVerbsSet2 } from '../data/ConjugatedVerbs';
import VebConjugationTemplate from '../components/Charts/VerbConjugationTemplate';
import MemorizeOnClickActivity from '../components/MemorizeTextOnClick/Index';
import { MTCTextCustomJon1dash1,MTCTextCustomJon1dash2, MTCTextCustomJon1dash3 } from '../data/MemorizeTextClick';

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
        <SectionHeader name="Новые слова" engName="New words" />

        <div className="columns">
          <div className="column">
            <Instruction letter="b" name="Читайте на английском и постарайтесь сказать на русском" engName="Read English version and try to tell in Russian" />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash1 } />
            <hr />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash2 } />
            <hr />
            <MemorizeOnClickActivity data={ MTCTextCustomJon1dash3 } />
            <hr />
            
          </div>
        </div>
      </section>
    </>
  );
}
