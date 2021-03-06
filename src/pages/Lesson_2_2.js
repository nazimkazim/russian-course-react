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
import NumbersFrom10To100 from '../components/Charts/NumbersFrom10To100';
import ChooseNumberOptions from '../components/ChooseNumberOptions/Index';
import { numData1 } from '../components/ChooseNumberOptions/data';
import MatchingActivity from '../components/MatchWords';
import { matchingWordsData8 } from '../data/MatchWordsData';
import CVTemplate from '../components/CVTemplate/Index';
import NewWordsBoard from '../components/NewWordsBoard';
import { NWset8, NWset9 } from '../data/newWords';
import DialogueContainer from '../components/dialoguesActivity/DialogueContainer';
import { dialogue5 } from '../data/dialoguesData';


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
              <Instruction letter="b" name="Выучите слова из предыдущего упражнения" engName="Learn the words from the previous exercise" />
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
              <Instruction letter="c" name="Читайте и переводите предложения" engName="Read and translate the sentences" />
              <MemorizeOnClickActivity data={ MTCText12 } />
            </div>
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Learning and Practice numbers from 10-100" engName="Изучение и практика чисел от 10 до 100" />
        <div className="columns">
          <div className="column">
            <Instruction letter="a" name="Нажмите на цифру, послушайте и повторите" engName="Click a digit, listen and repeat" />
            <NumbersFrom10To100 />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Instruction letter="b" name="Угадайте цифры" engName="Guess digits" />
            <ChooseNumberOptions data={ numData1 } marginTop="30" />
          </div>
          <div className="column">
            <Instruction letter="c" name="Сопоставьте цифры" engName="Match the digits" />
            <MatchingActivity headerLeft="Digit" headerRight="Word" data={ matchingWordsData8 } />
          </div>
        </div>
      </section>
      <section className="newSection">
        <SectionHeader name="Speaking practice" engName="Практика говорения" />
        <div className="columns">
          <div className="column">
            <Instruction letter="a" name="Выучите новые фразы" engName="Learn new phrases" />
            <div className="columns">
              <div className="column">
                <NewWordsBoard title="New phrases" data={ NWset8 } /></div>
              <div className="column">
                <NewWordsBoard title="Grammar explanation" data={ NWset9 } /></div>
            </div>
          </div>
          <div className="column">
            <Instruction letter="b" name="Спрашивайте и отвечайте о человеке" engName="Ask and answer about a person" />
            <CVTemplate />
          </div>
        </div>
      </section>
      <div className="newSection">
        <SectionHeader name="Практика говорения" engName="Speaking practice" />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Instruction letter="б" name="Говорите данные предложения на Русском" engName="Say the given sentences in Russian" />
              <DialogueContainer dialogues={ dialogue5 } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson_2_2;
