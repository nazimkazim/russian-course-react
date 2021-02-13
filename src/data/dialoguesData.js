import billGates from '../images/MTWTP/lesson1.1/gates.PNG';
import timCook from '../images/MTWTP/lesson1.1/tim_cook.jpg';
import tomHardy from '../images/MTWTP/lesson1.2/tom_hardy.jpg';


export const tomHardyAttr = '<a href="https://www.flickr.com/photos/gageskidmore/42774738485/in/photolist-28aRHv8-2iMHTLE-DNsbWr-YxHbmj-DavA6U-GDvrPd-KdQktM-8hNkFU-pSgXo1-cyLCgu-22vjEtc-qdF4W3-cyLCNL-brd3wj-bE7VVk-MCtxHT-MCFhjU-NAt1s2-26MS4BA-28aRN5Z-dMjEzM-HKy12u-bE7jFx-brcnWA-brcR9G-4Puwav-bE824H-bE7AWx-9DJ1mR-bE7TLV-brcR9y-cyLAaL-h7dAoK-bE7mND-bE7TMx-bE7Noi-cyLD3E-bE7ms6-brcR9N-brd3vY-cyLCwL-2b1kU1d-brcK19-brcR9b-bJ35rx-P6iQsW-bE7iuk-brd3ws-aweyGL-bE7sLp" target="_blank">"Tom Hardy"</a> by <a href="https://www.flickr.com/photos/gageskidmore/" target="_blank">Gage Skidmore</a>, <a>russian course</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>';

const womanPhoto = 'https://res.cloudinary.com/nzmai/image/upload/v1612604225/russian%20course/general/sigmund-jzz_3jWMzHA-unsplash.jpg';
const manPhoto = 'https://res.cloudinary.com/nzmai/image/upload/v1612604229/russian%20course/general/ben-parker-OhKElOkQ3RE-unsplash.jpg';

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


// Lesson 1.3
// Practice speaking section
export const dialogue4 = [
    {
        L1: `Who is this man?`,
        name: "Tom Haedy",
        company: "Actor",
        speaker: 2,
        L2: "Кто этот мужчина?",
        image: tomHardy,
        extra: []
    },
    {
        L1: "His name is  Khasan Shash. He is a former professional footballer.",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Его зовут Хасан Шаш. Он бывший профессиональный футболист.",
        image: billGates,
        extra: [{
            L1: "Бывший",
            L2: "Former"
        },
        {
            L1: "Профессиональный",
            L2: "Professional"
        }]
    },
    {
        L1: "Who is this woman?",
        name: "Tom Haedy",
        company: "Actor",
        speaker: 2,
        L2: "Кто эта женщина?",
        image: tomHardy,
        extra: []
    },
    {
        L1: "Her name is Angela Merkel. She is chancellor of Germany. She is a representative of Christian-Democratic party. By profession, she is physical chemist.",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Её зовут Ангела Меркель. Она канцлер Германии. Она представитель Христианско-Демократической партии. По профессии, она физико-химик.",
        image: billGates,
        extra: [{
            L1: "канцлер",
            L2: "chancellor"
        },
        {
            L1: "представитель",
            L2: "representative"
        },
        {
            L1: "по профессии",
            L2: "By profession"
        },
        {
            L1: "физико-химик",
            L2: "physical chemist"
        }]
    },
    {
        L1: `Who is this man?`,
        name: "Tom Haedy",
        company: "Actor",
        speaker: 2,
        L2: "Кто этот мужчина?",
        image: tomHardy,
        extra: []
    },
    {
        L1: "His name is Boris Ivanov. He works for CIA under cover in Russia. He tries to find a secret weapon.",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Его зовут Борис Иванов. Он работает на ЦРУ под прикрытием в России. Он пытается найти секретное оружие.",
        image: billGates,
        extra: [
            {
                L1: "Он работает на ЦРУ",
                L2: "He works for CIA"
            },
            {
                L1: "под прикрытием",
                L2: "under cover"
            },
            {
                L1: "он пытается найти",
                L2: "he tries to find"
            },
            {
                L1: "секретное оружие",
                L2: "secret weapon"
            }
        ]
    },
    {
        L1: `Who is this man?`,
        name: "Tom Haedy",
        company: "Actor",
        speaker: 2,
        L2: "Кто этот мужчина?",
        image: tomHardy,
        extra: []
    },
    {
        L1: "His name is Vladimir Klichko. He is a former champion of world on boxing in heavy weight. Currently he is a mayor of the city Kiev (literally).",
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Его зовут Владимир Кличко. Он бывший чемпион мира по боксу в тяжелом весе. Сейчас он мэр города Киев.",
        image: billGates,
        extra: [
            {
                L1: "чемпион мира",
                L2: "world champion"
            },
            {
                L1: "по боксу",
                L2: "on boxing"
            },
            {
                L1: "в тяжелом весе",
                L2: "heavyweight"
            },
            {
                L1: "мэр",
                L2: "mayor"
            }
        ]
    },
    {
        L1: `Very interesting. Thanks for information`,
        name: "Tom Haedy",
        company: "Actor",
        speaker: 2,
        L2: "Очень интересно. Спасибо за информацию",
        image: tomHardy,
        extra: []
    },
    {
        L1: `You are welcome`,
        name: "Bill Gates",
        company: "Microsoft",
        speaker: 1,
        L2: "Пожалуйста",
        image: billGates,
        extra: []
    }
];

// Lesson 2.2
// Practice speaking section
export const dialogue5 = [
    {
        L1: "Who is this man on the photo?",
        name: "Linda",
        company: "Apple",
        speaker: 2,
        L2: "Кто этот мужчина на фото?",
        image: womanPhoto,
        extra: []
    },
    {
        L1: "This is my brother.",
        name: "David",
        company: "Microsoft",
        speaker: 1,
        L2: "Это мой брат.",
        image: manPhoto,
        extra: []
    },
    {
        L1: "What is his name?",
        name: "Linda",
        company: "Apple",
        speaker: 2,
        L2: "Как его зовут?",
        image: womanPhoto,
        extra: []
    },
    {
        L1: "His name is Alex. He is a teacher at the local school.",
        name: "David",
        company: "Microsoft",
        speaker: 1,
        L2: "Его зовут Алекс. Он учитель в местной школе.",
        image: manPhoto,
        extra: [{
            L1: "местной",
            L2: "local"
        }]
    },
    {
        L1: `How old is he?`,
        name: "Linda",
        company: "Apple",
        speaker: 2,
        L2: "Сколько ему лет?",
        image: womanPhoto,
        extra: []
    },
    {
        L1: "He is 32.",
        name: "David",
        company: "Microsoft",
        speaker: 1,
        L2: "Ему 32.",
        image: manPhoto,
        extra: []
    },
    {
        L1: `Is he married?`,
        name: "Linda",
        company: "Apple",
        speaker: 2,
        L2: "Он женат?",
        image: womanPhoto,
        extra: [{
            L1: "женат",
            L2: "married"
        }]
    },
    {
        L1: "Yes, he is married. He has two children. Son and Daughter. His wife's name is Angelina. She is not a teacher, he is an accountant.",
        name: "David",
        company: "Microsoft",
        speaker: 1,
        L2: "Да, он женат. У него двое детей. Сын и дочь. Его жену зовут Ангелина. Она не учитель, она бухгалтер.",
        image: manPhoto,
        extra: [
            {
                L1: "У него",
                L2: "he has"
            }
        ]
    },
    {
        L1: `How interesting. I am an accountant too. So we are collegues`,
        name: "Linda",
        company: "Apple",
        speaker: 2,
        L2: "Как интересно. Я тоже бухгалтер. Так что мы коллеги.",
        image: womanPhoto,
        extra: [{
            L1: "Как интересно",
            L2: "How interesting"
        },
        {
            L1: "Так что",
            L2: "So"
        },
        {
            L1: "Коллеги",
            L2: "collegues"
        }
        ]
    },
    {
        L1: `Yes, it is`,
        name: "David",
        company: "Microsoft",
        speaker: 1,
        L2: "Да, это так",
        image: manPhoto,
        extra: []
    },
    {
        L1: `I know that you have a sister. Please, tell me about her.`,
        name: "Linda",
        company: "Apple",
        speaker: 2,
        L2: "Я знаю, что у тебя есть сестра, пожалуйста, расскажи мне о ней.",
        image: womanPhoto,
        extra: []
    },
    {
        L1: "What can I tell you. She is still not married. But she wants to get married very much. She loves children a lot. She is a stewardess.",
        name: "David",
        company: "Microsoft",
        speaker: 1,
        L2: "Что я могу рассказать. Она все ещё не замужем. Но она очень хочет выйти замуж. Она очень сильно любит детей. Она стюардесса.",
        image: manPhoto,
        extra: [
            {
            L1: "Что я могу рассказать",
            L2: "What can I tell you"
        },
        {
            L1: "все ещё",
            L2: "still"
        },
        {
            L1: "не замужем",
            L2: "not married"
        }
    ]
    }
];