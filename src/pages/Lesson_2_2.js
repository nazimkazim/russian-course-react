import React from 'react';
import Instruction from '../components/Instruction';
import SectionHeader from '../components/SectionHeader';
import LessonHeader from './LessonHeaderTemplate';
import DragAndDrop from '../components/DragAndDrop/Container';
import { DnDSet1 } from '../data/DragAndDrop';

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
    </>
  );
}

export default Lesson_2_2;
