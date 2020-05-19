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
        },
        {
            word: "в городе",
            options: _.shuffle(["in the city", "in the country", "in the village", "in the areas"]),
            answer: "in the city"
        },
        {
            word: "году",
            options: _.shuffle(["year", "month", "week", "period"]),
            answer: "year"
        },
        {
            word: "производит",
            options: _.shuffle(["produce", "buy", "tell", "give"]),
            answer: "produce"
        },
        {
            word: "устройства",
            options: _.shuffle(["devices", "equipment", "technology", "machines"]),
            answer: "devices"
        },
        {
            word: "продажам",
            options: _.shuffle(["sales", "equipment", "technology", "machines"]),
            answer: "sales"
        },
        {
            word: "странах",
            options: _.shuffle(["in cities", "in countries", "in districts", "in neighbourhoods"]),
            answer: "in countries"
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
                    options: _.shuffle(["famous", "fast", "clean", "very"]),
                    answer: "famous"
                },
                {
                    word: "проживает",
                    options: _.shuffle(["is living", "is eating", "strong", "busy"]),
                    answer: "is living"
                },
                {
                    word: "столице",
                    options: _.shuffle(["capital", "village", "swimming pool", "country"]),
                    answer: "capital"
                },
                {
                    word: "более",
                    options: _.shuffle(["more than", "cause", "rarely", "often"]),
                    answer: "more than"
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
                    options: _.shuffle(["first", "second", "third", "fourth"]),
                    answer: "first"
                },
                {
                    word: "который стал",
                    options: _.shuffle(["who became", "who did not become", "who dreamed", "who run"]),
                    answer: "who became"
                },
                {
                    word: "служил",
                    options: _.shuffle(["served", "worked", "treated", "lied"]),
                    answer: "served"
                },
                {
                    word: "срока",
                    options: _.shuffle(["terms", "time", "period", "sessions"]),
                    answer: "terms"
                },
                {
                    word: "всего",
                    options: _.shuffle(["overall", "finish", "know", "last"]),
                    answer: "overall"
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
                    options: _.shuffle(["drive a yellow taxi", "ride a blue bike", "fly a black plane", "want a big car"]),
                    answer: "drive a yellow taxi"
                },
                {
                    word: "зарабатываю 80 долларов",
                    options: _.shuffle(["earn 80 dollars", "spend 80 dollars", "splash out 80 dollars", "take 80 dollars"]),
                    answer: "earn 80 dollars"
                }
            ]
        },
        {
            text: `<p>Майа Плисецкая - советская балерина, хореограф, директор. Она работала в театре Большой. Она <strong>родилсь</strong> в Москве в 1925 (тысяча девятсот двадцать пятом) году в Москве и <strong>умерла</strong> в (две тысячи пятнадцатом) 2015 году в Германии.</p>`,
            title: 'Майа Плисецкая',
            audio: Plesetskaya,
            quiz: [
                {
                    word: "родилась",
                    options: _.shuffle(["was born", "was given", "was taken", "was named"]),
                    answer: "was born"
                },
                {
                    word: "умерла",
                    options: _.shuffle(["died", "became", "marked", "moved"]),
                    answer: "died"
                }
            ]
        },
        {
            text: `<p>Илон Маск - известный бизнесмен и менеджер <strong>ракетной компании</strong> SpaceX и электромобильной компании Тесла. Он родился в Южной Африке в городе Притория.</p>`,
            title: 'Илон Маск',
            audio: ElonMusk,
            quiz: [
                {
                    word: "ракетной компании",
                    options: _.shuffle(["rocket company", "car company", "bike company", "scooter company"]),
                    answer: "rocket company"
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
                    options: _.shuffle(["former", "unreal", "dangerous", "busy"]),
                    answer: "former"
                },
                {
                    word: "В моей стране",
                    options: _.shuffle(["in my country", "in our country", "in their country", "in your country"]),
                    answer: "in my country"
                },
                {
                    word: "любят",
                    options: _.shuffle(["love", "hate", "skip", "miss"]),
                    answer: "love"
                },
                {
                    word: "бешеные",
                    options: _.shuffle(["crazy", "calm", "peaceful", "kind"]),
                    answer: "crazy"
                }
            ]
        },
        {
            text: `<p>Её зовут Ангела Меркель. Она является Канцлером Германии <strong>с 2005 года</strong>. Она <strong>представитель</strong> партии Христианско-демократический союз Германии. По профессии она Физикохимик. Но она <strong>выбрала</strong> политику, так как хочет сделать вклад в развитие своей страны.</p>`,
            title: 'Ангела Меркель',
            audio: AngelaMerkel,
            quiz: [
                {
                    word: "с 2005 года",
                    options: _.shuffle(["since 2005", "for 2005", "in 2005", "at 2005"]),
                    answer: "since 2005"
                },
                {
                    word: "представитель",
                    options: _.shuffle(["representative", "accountant", "actor", "sunset"]),
                    answer: "representative"
                },
                {
                    word: "выбрала",
                    options: _.shuffle(["chose", "took", "gave", "sorted"]),
                    answer: "chose"
                },
                {
                    word: "срока",
                    options: _.shuffle(["terms", "time", "period", "sessions"]),
                    answer: "terms"
                },
                {
                    word: "всего",
                    options: _.shuffle(["overall", "finish", "know", "last"]),
                    answer: "overall"
                }
            ]
        },
        {
            text: `<p>Его зовут Моцарт. Он <strong>великий</strong> австрийский композитор, дирижер. Он представитель венской классической школы музыки. Он автор более 600 музыкальных <strong>работ</strong>.</p>`,
            title: 'Моцарт',
            audio: Mozart,
            quiz: [
                {
                    word: "великий",
                    options: _.shuffle(["great", "small", "unknown", "insignificant"]),
                    answer: "great"
                },
                {
                    word: "работ",
                    options: _.shuffle(["pieces of work", "dollars", "numbers", "production"]),
                    answer: "pieces of work"
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
                    options: _.shuffle(["agent CAI", "agent BBC", "agent CNN", "agent MTV"]),
                    answer: "agent CAI"
                },
                {
                    word: "под прикрытием",
                    options: _.shuffle(["under cover", "under pillow", "under table", "under water"]),
                    answer: "under cover"
                },
                {
                    word: "оружие",
                    options: _.shuffle(["weapon", "present", "gift", "santa"]),
                    answer: "weapon"
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
                    options: _.shuffle(["heavy weight", "light weight"]),
                    answer: "heavy weight"
                },
                {
                    word: "сейчас",
                    options: _.shuffle(["now", "then", "after", "finally"]),
                    answer: "now"
                },
                {
                    word: "стал",
                    options: _.shuffle(["became", "stand out", "forget", "find"]),
                    answer: "became"
                },
                {
                    word: "основал",
                    options: _.shuffle(["founded", "hided", "marked", "tapped"]),
                    answer: "founded"
                }
            ]
        }
    ]
};