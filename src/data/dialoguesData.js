import billGates from '../images/gates.PNG';
import timCook from '../images/tim_cook.jpg';


export const dialogue1 = [
    {
        eng: "Hello, I am Bill Gates. I am from Microsoft. And who are you?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        rus: "Здравствуйте, я Билл Гейтс. Я из компании Майкрософт. А кто вы",
        image: billGates,
        extra: []
    },
    {
        eng: "Hello, I am Tim Cook. I am from Apple. Very pleased to meet you",
        name: "Tim Cook",
        company: "Apple",
        speaker: 2,
        rus: "Здравствуйте, я Тим Кук. Я из компании Аппл. Очень приятно познакомиться",
        image: timCook,
        extra: []

    },
    {
        eng: "Where was the company Apple founded?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        rus: "Где была основана компания Аппл?",
        image: billGates,
        extra: []
    },
    {
        eng: "The Apple company was founded in California city",
        name: "Tim Cook",
        company: "Apple",
        speaker: 2,
        rus: "Компания Аппл была основана в городе Калифорния",
        image: timCook,
        extra: [{
            L1: "Была основана",
            L2: "Was founded"
        }]
    },
    {
        eng: "Who was it founded by?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        rus: "Кем была основана?",
        image: billGates,
        extra: [{
            L1: "Кем",
            L2: "By whom"
        }]
    },
    {
        eng: "The Apple company was founded by Steve Jobs and Steve Wozniak",
        name: "Tim Cook",
        company: "Apple",
        speaker: 2,
        rus: "Компания Аппл была основана Стивом Джобсом и Стивеном Возняком",
        image: timCook,
        extra: []
    },
    {
        eng: "Excellent! Where are your products are sold?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        rus: "Отлично! Где продаются ваши продукты?",
        image: billGates,
        extra: [{
            L1: "Где",
            L2: "Where"
        }, {
            L1: "Ваши",
            L2: "Your"
        }, {
            L1: "Продаются",
            L2: "Are sold"
        }, {
            L1: "Продукты",
            L2: "Products"
        }]
    },
    {
        eng: "We are leaders on sales. Our products are sold in such countries as Germany, France, Russia, China, Japan, USA",
        name: "Tim Cook",
        company: "Apple",
        speaker: 2,
        rus: "Мы являемся лидерами по продажам. Наши продукты продаются в таких странах как Германия, Франция, Россия, Китай, Япония, США",
        image: timCook,
        extra: [{
            L1: "Мы являемся",
            L2: "We are"
        }, {
            L1: "Лидерами",
            L2: "Leaders"
        }, {
            L1: "В таких странах как",
            L2: "In such countries as"
        }, {
            L1: "Наши",
            L2: "Our"
        }]
    }
];