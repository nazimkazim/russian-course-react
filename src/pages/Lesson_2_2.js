import React from 'react';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import LessonHeader from './LessonHeaderTemplate';
import DragAndDrop from '../components/DragAndDrop/Container';
import { DnDSet1 } from '../data/DragAndDrop';
import PossessivePronounsChart from '../components/Charts/PossessivePronouns';
import SentenceWithOptions from '../components/SentenceWithOptions/Index';
import { chooseOptionSet1 } from '../data/ChooseOption';
import { set4TextQuizzer } from '../data/TextQuizzerData';
import ActivityContainer from '../components/comprehendTextActivity/ActivityContainer';
import { MTCText12 } from '../data/MemorizeTextClick';
import MemorizeOnClickActivity from '../components/MemorizeTextOnClick/Index';


function Lesson_2_2() {
  return (
    <>
      <section>
        <div className="container is-fluid">
          <LessonHeader topic="Моя семья" lesson="Урок 5" />
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Новые слова" engName="New words" />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Выучите новые слова. Профессии" engName="Learn new words. Professions" />
              <iframe
                src="https://quizlet.com/559414238/flashcards/embed?i=4bby1&x=1jj1"
                height="500"
                width="100%"
                title="new words 1"
                styles={ "border:0" }></iframe>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Распределите слова в правильные группы" engName="Distribute the words in the correct bords" />
              <DragAndDrop
                data={ DnDSet1 }
                name1="Мужчины"
                name2="Женщины"
                img1="https://res.cloudinary.com/nzmai/image/upload/v1610786476/russian%20course/general/male-user.png "
                img2="https://res.cloudinary.com/nzmai/image/upload/v1610786479/russian%20course/general/female-worker.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Грамматика" engName="Grammar" />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Грамматика. Притягательные местоимения" engName="Grammar. Possessive pronouns" />
              <PossessivePronounsChart />
            </div>
            <div className="column">
              <Instruction letter="a" name="Выберите правильный вариант" engName="Choose a correct option" />
              <SentenceWithOptions data={ chooseOptionSet1 } />
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Чтение" engName="Reading" />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <Instruction letter="a" name="Читайте тексты, и отгадайте новые слова" engName="Read texts and guess new words" />
              <ActivityContainer data={ set4TextQuizzer } />
            </div>
            <div className="column">
              <Instruction letter="a" name="Выучите слова из предыдущего упражнения" engName="Learn the words from the previous exercise" />
              <iframe
                src="https://quizlet.com/564892257/flashcards/embed?i=4bby1&x=1jj1"
                height="500"
                width="100%"
                title="new words 1"
                styles={ "border:0" }></iframe>
            </div>
          </div>
          <div className="columns">
              <div className="column">
                <Instruction letter="a" name="Читайте и переводите предложения" engName="Read and translate the sentences" />
                <MemorizeOnClickActivity data={ MTCText12 } />
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Lesson_2_2;
