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

export const dialogue2CustomAnswer = '87773486518';


// Lesson 1.2
// Practice speaking section
export const dialogue3 = [
    {
        L1: `Hello, I am Tom Hardy.`,
        name: "Tom Hardy",
        company: "Actor",
        speaker: 2,
        L2: "Здравствуйте, я Том Харди.",
        image: tomHardy,
        extra: []
    },
    {
        L1: "Hello, I know. You are a famous actor. Where were you born?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Здравствуйте, я знаю. Вы известный актёр. Где вы родились?",
        image: billGates,
        extra: [{
            L1: "Где вы родились?",
            L2: "Where were you born?"
        }]
    },
    {
        L1: `I was born in Great Britain, but now I am living in the USA. Where were you born?`,
        name: "Tom Hardy",
        company: "Actor",
        speaker: 2,
        L2: "Я родился в Великобритании, но сейчас проживаю в США. Где вы родились?",
        image: tomHardy,
        extra: [
            {
                L1: "Я родился",
                L2: "I was born"
            },
            {
                L1: "Но сейчас",
                L2: "But now"
            },
            {
                L1: "Я проживаю",
                L2: "I am living"
            }
        ]
    },
    {
        L1: "I was born in the USA. How many years are you in the USA?",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Я родился в США. Сколько лет вы в США?",
        image: billGates,
        extra: []
    },
    {
        L1: `I am in the USA already 5 years. I am living with wife, she is also actress. And with son, he goes to school. We love the USA very much`,
        name: "Tom Hardy",
        company: "Actor",
        speaker: 2,
        L2: "Я в СЩА уже 5 лет. Я проживаю с женой, она тоже актриса. И сыном, он ходит в школу. Мы очень любим США.",
        image: tomHardy,
        extra: [
            {
                L1: "Уже",
                L2: "Already"
            },
            {
                L1: "С женой",
                L2: "With wife"
            },
            {
                L1: "Тоже",
                L2: "Too"
            },
            {
                L1: "С сыном",
                L2: "With son"
            },
            {
                L1: "Он ходит в школу",
                L2: "He goes to school"
            },
            {
                L1: "Мы любим",
                L2: "We love"
            },
            {
                L1: "Очень",
                L2: "Very much"
            }
        ]
    },
    {
        L1: "It is nice. We also love the USA, it is our house",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Это прекрасно. Мы тоже любим США, это наш дом?",
        image: billGates,
        extra: [
            {
                L1: "Это прекрасно",
                L2: "It is nice"
            },
            {
                L1: "наш дом",
                L2: "our house"
            }
        ]
    }
];