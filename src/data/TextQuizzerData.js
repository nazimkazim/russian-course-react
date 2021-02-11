// set2TextQuizzer
import RoberFisk from '../images/ListenChooseRelevant/Lesson1.2/audio/RobertFisk.wav';
import BarackObama from '../images/ListenChooseRelevant/Lesson1.2/audio/BarackObama.wav';
import Chauffeur from '../images/ListenChooseRelevant/Lesson1.2/audio/ChauffeurNY.wav';
import Plesetskaya from '../images/ListenChooseRelevant/Lesson1.2/audio/Plesetskaya.wav';
import ElonMusk from '../images/ListenChooseRelevant/Lesson1.2/audio/ElonMusk.wav';

import KhasanShash from '../images/ListenChooseRelevant/Lesson1.3/Audio/shash.wav';
import AngelaMerkel from '../images/ListenChooseRelevant/Lesson1.3/Audio/merkel.wav';
import Mozart from '../images/ListenChooseRelevant/Lesson1.3/Audio/mozart.wav';
import CIA_agent from '../images/ListenChooseRelevant/Lesson1.3/Audio/cia_agent.wav';
import Klitchko from '../images/ListenChooseRelevant/Lesson1.3/Audio/klitchko.wav';

// unit 5
const myGrandDaughter = 'https://res.cloudinary.com/nzmai/video/upload/v1611715470/russian%20course/Sound/unit5/my_granddaughter.wav'
const myDad = 'https://res.cloudinary.com/nzmai/video/upload/v1611716550/russian%20course/Sound/unit5/my_dad.wav'
const myMother = 'https://res.cloudinary.com/nzmai/video/upload/v1611716953/russian%20course/Sound/unit5/my_mother.wav'


export const set1TextQuizzer = {
    text: "Компания Apple <strong><em>была основана</em></strong> двумя <strong><em>друзьями</em></strong> Стивом Джобсом и Стивом Возняком в <strong><em>городе</em></strong> Калифорния в 1976 <strong><em>году</em></strong>. Компания Apple <strong><em>производит</em></strong> такие <strong><em>устройства</em></strong> как, персональные компьютеры, ноутбуки, смартфоны, телевизоры. Компания Apple является лидером по <strong><em>продажам</em></strong> смартфонов в таких <strong><em>странах</em></strong>, как Россия, Китай, Япония, Германия, Франция, США.",
    quiz: [
        {
            word: "была основана",
            pair: ["была основана", "was founded"],
            translation: "was founded"
        },
        {
            word: "друзьями",
            pair: ["друзьями", "by friends"],
            translation: "by friends"
        },
        {
            word: "в городе",
            pair: ["в городе", "in the city"],
            translation: "in the city"
        },
        {
            word: "году",
            pair: ["году", "year"],
            translation: "year"
        },
        {
            word: "производит",
            pair: ["производит", "produces"],
            translation: "produces"
        },
        {
            word: "устройства",
            pair: ["устройства", "devices"],
            translation: "devices"
        },
        {
            word: "продажам",
            pair: ["продажам", "sales"],
            translation: "sales"
        },
        {
            word: "странах",
            pair: ["странах", "countries"],
            translation: "countries"
        }
    ]
};

export const set2TextQuizzer = {
    texts: [
        {
            text: `<p>Роберт Фиск - <strong>известный</strong> британский журналист и корреспондент газеты Индепендент, он <strong>проживает</strong> в Бейруте, <strong>столице</strong> Ливана <strong>более</strong> 25 лет.</p>`,
            title: 'Роберт Фиск',
            audio: RoberFisk,
            quiz: [
                {
                    word: "известный",
                    pair: ["известный", "famous"],
                    translation: "famous"
                },
                {
                    word: "проживает",
                    pair: ["проживает", "is living"],
                    translation: "is living"
                },
                {
                    word: "столице",
                    pair: ["столице", "capital"],
                    translation: "capital"
                },
                {
                    word: "более",
                    pair: ["более", "more than"],
                    translation: "more than"
                }
            ]
        },
        {
            text: `<p>Барак Обама - <strong>первый</strong> в истории афро-американец, <strong>который стал</strong> президентом Америки. Он <strong>служил</strong> 2 <strong>срока</strong> по 4 года, <strong>всего</strong> 8 лет.</p>`,
            title: 'Обама',
            audio: BarackObama,
            quiz: [
                {
                    word: "первый",
                    pair: ["первый", "first"],
                    translation: "first"
                },
                {
                    word: "который стал",
                    pair: ["who became", "который стал"],
                    translation: "who became"
                },
                {
                    word: "служил",
                    pair: ["served", "служил"],
                    translation: "served"
                },
                {
                    word: "срока",
                    pair: ["terms", "срока"],
                    translation: "terms"
                },
                {
                    word: "всего",
                    pair: ["overall", "всего"],
                    translation: "overall"
                }
            ]
        },
        {
            text: `<p>Меня зовут Алекс, я из Нью Йорка, я шофёр, я <strong>вожу желтое такси</strong>, я <strong>зарабатываю 80 долларов</strong> в день.</p>`,
            title: 'Шофёр',
            audio: Chauffeur,
            quiz: [
                {
                    word: "вожу желтое такси",
                    pair: ["drive a yellow taxi", "вожу желтое такси"],
                    translation: "drive a yellow taxi"
                },
                {
                    word: "зарабатываю 80 долларов",
                    pair: ["earn 80 dollars", "зарабатываю 80 долларов"],
                    translation: "earn 80 dollars"
                }
            ]
        },
        {
            text: `<p>Майа Плисецкая - советская балерина, хореограф, директор. Она работала в театре Большой. Она <strong>родилась</strong> в 1925 (тысяча девятсот двадцать пятом) году в Москве и <strong>умерла</strong> в (две тысячи пятнадцатом) 2015 году в Германии.</p>`,
            title: 'Майа Плисецкая',
            audio: Plesetskaya,
            quiz: [
                {
                    word: "родилась",
                    pair: ["was born", "родилась"],
                    translation: "was born"
                },
                {
                    word: "умерла",
                    pair: ["died", "умерла"],
                    translation: "died"
                }
            ]
        },
        {
            text: `<p>Илон Маск - известный бизнесмен и менеджер <strong>ракетной компании</strong> SpaceX и <strong>электромобильной компании</strong> Тесла. Он родился в Южной Африке в городе Притория.</p>`,
            title: 'Илон Маск',
            audio: ElonMusk,
            quiz: [
                {
                    word: "ракетной компании",
                    pair: ["rocket company", "ракетной компании"],
                    translation: "rocket company"
                },
                {
                    word: "электромобильной компании",
                    pair: ["electric vehicle company", "электромобильной компании"],
                    translation: "electric vehicle company"
                }
            ]
        }
    ]
};

export const set3TextQuizzer = {
    texts: [
        {
            text: `<p>Меня зовут Хасан Шаш, я <strong>бывший</strong> профессиональный футболист клуба Галатасарай и сборной Турции. <strong>В моей стране</strong> люди очень <strong>любят</strong> футбол. Наши фаны просто <strong>бешеные</strong>.</p>`,
            title: 'Хасан Шаш',
            audio: KhasanShash,
            quiz: [
                {
                    word: "бывший",
                    pair: ["former", "бывший"],
                    translation: "former"
                },
                {
                    word: "в моей стране",
                    pair: ["in my country", "в моей стране"],
                    translation: "in my country"
                },
                {
                    word: "любят",
                    pair: ["love", "любят"],
                    translation: "love"
                },
                {
                    word: "бешеные",
                    pair: ["crazy", "бешеные"],
                    translation: "crazy"
                }
            ]
        },
        {
            text: `<p>Её зовут Ангела Меркель. Она является Канцлером Германии <strong>с 2005 года</strong>. Она <strong>представитель</strong> партии Христианско-демократический союз Германии. По профессии она Физикохимик. Но она <strong>выбрала</strong> политику, так как хочет сделать вклад в <strong>развитие</strong> своей страны.</p>`,
            title: 'Ангела Меркель',
            audio: AngelaMerkel,
            newWords: [{
                rus: 'так как',
                eng: 'because'
            },
            {
                rus: 'хочет',
                eng: 'wants'
            },
            {
                rus: 'сделать вклад в',
                eng: 'to contribute to'
            }],
            quiz: [
                {
                    word: "с 2005 года",
                    pair: ["since 2005", "с 2005 года"],
                    translation: "since 2005"
                },
                {
                    word: "представитель",
                    pair: ["representative", "представитель"],
                    translation: "representative"
                },
                {
                    word: "выбрала",
                    pair: ["chose", "выбрала"],
                    translation: "chose"
                },
                {
                    word: "развитие",
                    pair: ["development", "развитие"],
                    translation: "development"
                }
            ]
        },
        {
            text: `<p>Его зовут Моцарт. Он <strong>великий</strong> австрийский композитор, дирижер. Он представитель венской классической школы музыки. Он автор более 600 музыкальных <strong>работ</strong>.</p>`,
            title: 'Моцарт',
            audio: Mozart,
            newWords: [{
                rus: 'школа музыки',
                eng: 'school of music'
            }],
            quiz: [
                {
                    word: "великий",
                    pair: ["great", "великий"],
                    translation: "great"
                },
                {
                    word: "работ",
                    pair: ["pieces of work", "работ"],
                    translation: "pieces of work"
                }
            ]
        },
        {
            text: `<p>Тебя зовут Борис Иванов. Ты будешь работать <strong>агентом ЦРУ</strong> <strong>под прикрытием</strong> в России. Тебе нужно узнать данные о секретном <strong>оружии</strong> и его локацию.</p>`,
            title: 'Борис Иванов',
            audio: CIA_agent,
            newWords: [{
                rus: 'Тебе нужно',
                eng: 'You need'
            },
            {
                rus: 'Узнать данные',
                eng: 'Get data'
            }],
            quiz: [
                {
                    word: "агентом ЦРУ",
                    pair: ["agent CIA", "агентом ЦРУ"],
                    translation: "agent CIA"
                },
                {
                    word: "под прикрытием",
                    pair: ["under cover", "под прикрытием"],
                    translation: "under cover"
                },
                {
                    word: "оружие",
                    pair: ["weapon", "оружие"],
                    translation: "weapon"
                }
            ]
        },
        {
            text: `<p>Нас зовут Владимир и Виталий Кличко. Мы бывшие профессиональные боксёры <strong>в тяжелом весе</strong> свыше 91 килограмм. Мы из Украины. После завершения карьеры в боксе, Виталий <strong>стал</strong> политиком. <strong>Сейчас</strong> он мэр города Киев. А я <strong>основал</strong> свою компанию.</p>`,
            title: 'Братья Кличко',
            audio: Klitchko,
            newWords: [{
                rus: 'Бывшие',
                eng: 'Former'
            },
            {
                rus: 'После',
                eng: 'After'
            },
            {
                rus: 'Завершение',
                eng: 'Completion'
            }],
            quiz: [
                {
                    word: "в тяжелом весе",
                    pair: ["heavy weight", "в тяжелом весе"],
                    translation: "heavy weight"
                },
                {
                    word: "сейчас",
                    pair: ["now", "сейчас"],
                    translation: "now"
                },
                {
                    word: "стал",
                    pair: ["became", "стал"],
                    translation: "became"
                },
                {
                    word: "основал",
                    pair: ["founded", "основал"],
                    translation: "founded"
                }
            ]
        }
    ]
};

// unit 5
export const set4TextQuizzer = {
    texts: [
        {
            text: `<p>Моя внучка менеджер. Её зовут Ольга. Она управляет <strong>успешной</strong> компанией <strong>из списка</strong> Форбс. В её компании работают 200 человек <strong>из разных стран</strong>, например, Индия, Бразилия, Россия, Мексика. В этом году, из-за Ковид-19 результаты компании <strong>ухудшились</strong>, но я надеюсь, что на следующий год <strong>все будет хорошо</strong>.</p>`,
            title: 'Моя внучка',
            audio: myGrandDaughter,
            newWords: [
                {
                    rus: 'Управляет',
                    eng: 'Manages'
                },
                {
                    rus: 'В этом году',
                    eng: 'This year'
                },
                {
                    rus: 'Из-за',
                    eng: 'Because of'
                },
                {
                    rus: 'Но я надеюсь',
                    eng: 'But I hope'
                },
                {
                    rus: 'На следующий год',
                    eng: 'Next year'
                }
            ],
            quiz: [
                {
                    word: "успешной",
                    pair: ["successful", "успешной"],
                    translation: "successful"
                },
                {
                    word: "из списка",
                    pair: ["from the list", "из списка"],
                    translation: "from the list"
                },
                {
                    word: "из разных стран",
                    pair: ["from different countries", "из разных стран"],
                    translation: "from different countries"
                },
                {
                    word: "ухудшилась",
                    pair: ["got worse", "ухудшилась"],
                    translation: "got worse"
                },
                {
                    word: "все будет хорошо",
                    pair: ["everything will be alright", "все будет хорошо"],
                    translation: "everything will be alright"
                }
            ]
        },
        {
            text: `<p>Мой папа успешный <strong>предприниматель</strong> его зовут Рашид, в его бизнесе очень <strong>жёсткая</strong> конкуренция. Поэтому он работает очень <strong>усердно</strong>. Он идёт на работу в 7 часов и приходит <strong>только</strong> в 9 вечера. Он говорит, что тайм-менеджмент помогает ему быть <strong>конкурентноспособным</strong>. Я очень <strong>уважаю</strong> папу.</p>`,
            title: 'Мой папа',
            audio: myDad,
            newWords: [
                {
                    rus: 'Конкуренция',
                    eng: 'Competition'
                },
                {
                    rus: 'Поэтому',
                    eng: 'Therefore'
                },
                {
                    rus: 'Помогает',
                    eng: '(It) helps'
                }
            ],
            quiz: [
                {
                    word: "предприниматель",
                    pair: ["entrepreneur", "предприниматель"],
                    translation: "entrepreneur"
                },
                {
                    word: "жёсткая",
                    pair: ["tough", "жёсткая"],
                    translation: "tough"
                },
                {
                    word: "усердно",
                    pair: ["hard", "усердно"],
                    translation: "hard"
                },
                {
                    word: "конкурентноспособным",
                    pair: ["competitive", "конкурентноспособным"],
                    translation: "competitive"
                },
                {
                    word: "уважаю",
                    pair: ["respect", "уважаю"],
                    translation: "respect"
                }
            ]
        },
        {
            text: `<p>Моя мама не работает, она <strong>домохозяйка</strong>. Кстати, её зовут Лена. Она очень <strong>умная</strong> женщина. Она много читает и <strong>изучает</strong> разные языки. Она любит изучать языки, так как это помогает ей узнавать о культурах и традициях разных <strong>народов</strong>. Например, недавно она узнала, что аборигены Австралии имеют <strong>уникальные</strong> музыкальные инструменты, которые существуют только в их культуре</p>`,
            title: 'Моя мама',
            audio: myMother,
            newWords:[
                {
                  rus: 'Кстати',
                  eng: 'By the way'
                },
                {
                  rus: 'Так как',
                  eng: 'Because'
                },
                {
                  rus: 'Узнавать',
                  eng: 'Find out'
                },
                {
                  rus: 'Недавно',
                  eng: 'Recently'
                },
                {
                  rus: 'Которые существуют',
                  eng: 'That exists'
                }
              ],
            quiz: [
                {
                    word: "домохозяйка",
                    pair: ["a housewife", "домохозяйка"],
                    translation: "a housewife"
                },
                {
                    word: "умная",
                    pair: ["clever", "умная"],
                    translation: "clever"
                },
                {
                    word: "изучает",
                    pair: ["learn", "изучает"],
                    translation: "learn"
                },
                {
                    word: "уникальные",
                    pair: ["unique", "уникальные"],
                    translation: "unique"
                },
                {
                    word: "народов",
                    pair: ["nations", "народов"],
                    translation: "nations"
                }
            ]
        }]
};
