import CleanFlat from '../images/GWFP/Lesson2.1/clean-a-flat-gif.gif';
import EatPizza from '../images/GWFP/Lesson2.1/eat-pizza-gif.gif';
import GiveMoney from '../images/GWFP/Lesson2.1/give-money.gif';
import HelpMother from '../images/GWFP/Lesson2.1/help-mother.gif';
import ListenToPlayer from '../images/GWFP/Lesson2.1/listen-to-player.gif';
import PresentGift from '../images/GWFP/Lesson2.1/present-a-gift.gif';
import ReadBook from '../images/GWFP/Lesson2.1/read-a-book.gif';
import RepairCar from '../images/GWFP/Lesson2.1/repair-a-car.gif';
import WalkInTheStreet from '../images/GWFP/Lesson2.1/walk-in-the-street.gif';
import WorkInOffice from '../images/GWFP/Lesson2.1/work-in-office.gif';

var _ = require('lodash');

export const GWFP1 = _.shuffle([
  {
    id: 1,
    pic: CleanFlat,
    phrase: 'Чистить квартиру',
    eng:'Clean'
  },
  {
    id: 2,
    pic: EatPizza,
    phrase: 'Кушать пиццу',
    eng:'Eat'
  },
  {
    id: 3,
    pic: GiveMoney,
    phrase: 'Давать деньги',
    eng:'Give'
  },
  {
    id: 4,
    pic: HelpMother,
    phrase: 'Помогать маме',
    eng:'Help'
  },
  {
    id: 5,
    pic: ListenToPlayer,
    phrase: 'Слушать плеер',
    eng:'Listen'
  },
  {
    id: 6,
    pic: PresentGift,
    phrase: 'Дарить подарок',
    eng:'Present'
  },
  {
    id: 7,
    pic: ReadBook,
    phrase: 'Читать книгу',
    eng:'Read'
  },
  {
    id: 8,
    pic: RepairCar,
    phrase: 'Ремонтировать автомобиль',
    eng:'Repair'
  },
  {
    id: 9,
    pic: WalkInTheStreet,
    phrase: 'Гулять на улице',
    eng:'Walk'
  },
  {
    id: 10,
    pic: WorkInOffice,
    phrase: 'Работать в офисе',
    eng:'Work'
  }
]);