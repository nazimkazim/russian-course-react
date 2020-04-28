import ZeroPeople from '../images/Pictures-Numbers/zero-people.jpg';
import OneLaptop from '../images/Pictures-Numbers/one-laptop.jpg';
import TwoButterflies from '../images/Pictures-Numbers/two-butterflies.jpg';
import ThreeWindows from '../images/Pictures-Numbers/three-windows.jpg';
import FourColumns from '../images/Pictures-Numbers/four-columns.jpg';
import FiveLeaves from '../images/Pictures-Numbers/five-leaves.jpg';
import SixPots from '../images/Pictures-Numbers/six-pots.jpg';
import SevenDices from '../images/Pictures-Numbers/seven-dices.jpg';
import EightFlowers from '../images/Pictures-Numbers/eight-flowers.jpg';
import NineDots from '../images/Pictures-Numbers/nine-dots.jpg';
import TenCandles from '../images/Pictures-Numbers/ten-candles.jpg'
let _ = require("lodash");

export const LCRSet1 = _.shuffle([
    {
        rus: "Сколько людей на картинке?",
        eng: "How many people are there in the picture?",
        picture: ZeroPeople,
        answer: "ноль"
    },
    {
        rus: "Сколько лаптопов на картинке?",
        eng: "How many laptops are the in the picture?",
        picture: OneLaptop,
        answer: "один"
    },
    {
        rus: "Сколько бабочек на картинке?",
        eng: "How many butterflies are the in the picture?",
        picture: TwoButterflies,
        answer: "два"
    },
    {
        rus: "Сколько окон на картинке?",
        eng: "How many windows are the in the picture?",
        picture: ThreeWindows,
        answer: "три"
    },
    {
        rus: "Сколько колонн на картинке?",
        eng: "How many column are the in the picture?",
        picture: FourColumns,
        answer: "четыре"
    },
    {
        rus: "Сколько листьев на картинке?",
        eng: "How many leaves are the in the picture?",
        picture: FiveLeaves,
        answer: "пять"
    },
    {
        rus: "Сколько горшков на картинке?",
        eng: "How many pots are the in the picture?",
        picture: SixPots,
        answer: "шесть"
    },
    {
        rus: "Сколько точек показывают игральные кубики?",
        eng: "How many dots are shown on dices?",
        picture: SevenDices,
        answer: "семь"
    },
    {
        rus: "Сколько цветков на картинке?",
        eng: "How many flowers are there in the picture?",
        picture: EightFlowers,
        answer: "восемь"
    },
    {
        rus: "Сколько точек на картинке?",
        eng: "How many dots are there in the picture?",
        picture: NineDots,
        answer: "девять"
    },
    {
        rus: "Сколько свеч на картинке?",
        eng: "How many candles are there in the picture?",
        picture: TenCandles,
        answer: "десять"
    }
]);