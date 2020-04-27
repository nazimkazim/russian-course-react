import ZeroPeople from '../images/Pictures-Numbers/zero-people.jpg';
import OneLaptop from '../images/Pictures-Numbers/one-laptop.jpg';
import TwoCars from '../images/Pictures-Numbers/two-cars.jpg';
import ThreeWindows from '../images/Pictures-Numbers/three-windows.jpg';
import FourColumns from '../images/Pictures-Numbers/four-columns.jpg';
import FiveLeaves from '../images/Pictures-Numbers/five-leaves.jpg';
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
        rus: "Сколько машин на картинке?",
        eng: "How many cars are the in the picture?",
        picture: TwoCars,
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
    }
]);