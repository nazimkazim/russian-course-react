import billGates from '../images/MTWTP/lesson1.1/gates.PNG';
import timCook from '../images/MTWTP/lesson1.1/tim_cook.jpg';
import tomHardy from '../images/MTWTP/lesson1.2/tom_hardy.jpg';

// Lesson 1.1
export const dialogue1 = [
    {
        L1: "Hello, I am Bill Gates. I am from Microsoft. And who are you?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Здравствуйте, я Билл Гейтс. Я из компании Майкрософт. А кто вы?",
        image: billGates,
        extra: []
    },
    {
        L1: "Hello, I am Tim Cook. I am from Apple. Very pleased to meet you",
        name: "Tim Cook",
        company: "Apple",
        speaker: 2,
        L2: "Здравствуйте, я Тим Кук. Я из компании Аппл. Очень приятно познакомиться",
        image: timCook,
        extra: []

    },
    {
        L1: "Where was the company Apple founded?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Где была основана компания Аппл?",
        image: billGates,
        extra: []
    },
    {
        L1: "The Apple company was founded in California city",
        name: "Tim Cook",
        company: "Apple",
        speaker: 2,
        L2: "Компания Аппл была основана в городе Калифорния",
        image: timCook,
        extra: [{
            L1: "Была основана",
            L2: "Was founded"
        }]
    },
    {
        L1: "Who was it founded by?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Кем была основана?",
        image: billGates,
        extra: [{
            L1: "Кем",
            L2: "By whom"
        }]
    },
    {
        L1: "The Apple company was founded by Steve Jobs and Steve Wozniak",
        name: "Tim Cook",
        company: "Apple",
        speaker: 2,
        L2: "Компания Аппл была основана Стивом Джобсом и Стивеном Возняком",
        image: timCook,
        extra: []
    },
    {
        L1: "Excellent! Where are your products are sold?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Отлично! Где продаются ваши продукты?",
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
        L1: "We are leaders on sales. Our products are sold in such countries as Germany, France, Russia, China, Japan, USA",
        name: "Tim Cook",
        company: "Apple",
        speaker: 2,
        L2: "Мы являемся лидерами по продажам. Наши продукты продаются в таких странах как Германия, Франция, Россия, Китай, Япония, США",
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

// Lesson 1.2
// Новые слова: цифры 0-10 exercise в
export const dialogue2 = [
    {
        L1: "Здравствуйте Том, можно ваш номер телефона?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        image: billGates,
        extra: []
    }, {
        L1: `Мой номер телефона _ _ _ _ _ _ _ _ _ _`,
        name: "Tom Hardy",
        company: "Actor",
        speaker: 2,
        image: tomHardy,
        extra: []
    },
    {
        L1: "Можно еще раз, пожалуйста?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        image: billGates,
        extra: [
            {
                L1: "Можно",
                L2: "Is it possible"
            },
            {
                L1: "Еще раз",
                L2: "Once more"
            }
        ]
    }, {
        L1: `Да, конечно _ _ _ _ _ _ _ _ _ _`,
        name: "Tom Hardy",
        company: "Actor",
        speaker: 2,
        image: tomHardy,
        extra: [
            {
                L1: "Конечно",
                L2: "Sure"
            }]
    },
    {
        L1: "Спасибо",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        image: billGates,
        extra: [
            
        ]
    }
];