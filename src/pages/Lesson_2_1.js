import React from 'react';
import LessonHeader from './LessonHeaderTemplate';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import GuessPhraseFromPicture from '../components/GuessPhraseFromPicture';
import { GWFP1 } from '../data/GuessWordFromPicture';

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
              <Instruction letter="a" name="Посмотрите на слова и попытайтесь отгадать значение этих слов. Слушайте и повторяйте за учителем слова" engName="Look through the words and try to understand their meaning. Listen and repeat the words after your teacher" />
              <iframe
                src="https://quizlet.com/526861202/flashcards/embed?i=4bby1&x=1jj1"
                height="500"
                width="100%"
                title="new words 1"
                styles={ "border:0" }></iframe>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Отгадайте значение выделенного слова" engName="Guess meaning of the bolded word" />
              <GuessPhraseFromPicture data={ GWFP1 } />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
