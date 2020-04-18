// set2TextQuizzer
import RoberFisk from '../images/ListenChooseRelevant/Lesson1.2/audio/RobertFisk.wav';
import BarackObama from '../images/ListenChooseRelevant/Lesson1.2/audio/BarackObama.wav';
import Chauffeur from '../images/ListenChooseRelevant/Lesson1.2/audio/ChauffeurNY.wav';
import Plesetskaya from '../images/ListenChooseRelevant/Lesson1.2/audio/Plesetskaya.wav';
import ElonMusk from '../images/ListenChooseRelevant/Lesson1.2/audio/ElonMusk.wav';
let _ = require("lodash");



export const set1TextQuizzer = {
    text: "Компания Apple <strong><em>была основана</em></strong> двумя <strong><em>друзьями</em></strong> Стивом Джобсом и Стивом Возняком в <strong><em>городе</em></strong> Калифорния в 1976 <strong><em>году</em></strong>. Компания Apple <strong><em>производит</em></strong> такие <strong><em>устройства</em></strong> как, персональные компьютеры, ноутбуки, смартфоны, телевизоры. Компания Apple является лидером по <strong><em>продажам</em></strong> смартфонов в таких <strong><em>странах</em></strong>, как Россия, Китай, Япония, Германия, Франция, США.",
    quiz: [
        {
            word: "была основана",
            options: _.shuffle(["was founded", "was given", "was taken", "was named"]),
            answer: "was founded"
        },
        {
            word: "друзьями",
            options: _.shuffle(["by friends", "by collegues", "by relatives", "by strangers"]),
            answer: "by friends"
        }
    ]
};

export const set2TextQuizzer = {
    texts: [
        {
            text: `<p>Роберт Фиск - известный британский журналист и корреспондент газеты Индепендент, он проживает в Бейруте, столице Ливана более 25 лет.</p>`,
            title: 'Роберт Фиск',
            audio: RoberFisk,
            quiz: [
                {
                    word: "была основана",
                    options: _.shuffle(["was founded", "was given", "was taken", "was named"]),
                    answer: "was founded"
                },
                {
                    word: "друзьями",
                    options: _.shuffle(["by friends", "by collegues", "by relatives", "by strangers"]),
                    answer: "by friends"
                }
            ]
        },
        {
            text: `<p>Барак Обама - первый в истории афро-американец, который стал президентом Америки. Он служил 2 срока по 4 года, всего 8 лет</p>`,
            title: 'Обама',
            audio: BarackObama,
            quiz: [
                {
                    word: "была основана",
                    options: _.shuffle(["was founded", "was given", "was taken", "was named"]),
                    answer: "was founded"
                },
                {
                    word: "друзьями",
                    options: _.shuffle(["by friends", "by collegues", "by relatives", "by strangers"]),
                    answer: "by friends"
                }
            ]
        },
        {
            text: `<p>Меня зовут Алекс, я из Нью Йорка, я шофёр, я вожу желтое такси, я зарабатываю 80 долларов в день</p>`,
            title: 'Шофёр',
            audio: Chauffeur,
            quiz: [
                {
                    word: "была основана",
                    options: _.shuffle(["was founded", "was given", "was taken", "was named"]),
                    answer: "was founded"
                },
                {
                    word: "друзьями",
                    options: _.shuffle(["by friends", "by collegues", "by relatives", "by strangers"]),
                    answer: "by friends"
                }
            ]
        }
    ]



};