// Lesson 2.1
export const generateText1 = () => {
  const greeting = ['Привет', 'Здравствуйте', 'Добрый день']
  const name = ['Мария', 'Лаура', 'Надя', 'Игорь', 'Иван', 'Николай'];
  const place = ['России', 'Америки', 'Австралии', 'Франции', 'Казахстана', 'Италии'];
  const workPlace = ['ресторане', 'банке', 'школе', 'университете', 'парламенте', 'больнице', 'театре'];
  const profession = ['официантом', 'банкиром', 'учителем', 'профессором', 'депутатом', 'врачом', 'актёром'];
  const earlyOrLate = ['рано', 'поздно'];
  const sequence = ['потом', 'после этого', 'затем'];
  const placeToEat = ['ресторане', 'кафе', 'столовой', 'фуд-корте', 'кафетерий', 'пиццерии', 'баре', 'столовой'];
  const time = [6, 7, 8, 9];
  const generateNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  return `<strong>${greeting[generateNumber(greeting)]}</strong> меня зовут <strong>${name[generateNumber(name)]}</strong>. Я из <strong>${place[generateNumber(place)]}</strong>. Я работаю в <strong>${workPlace[generateNumber(workPlace)]}</strong> <strong>${profession[generateNumber(profession)]}</strong>. Я очень люблю свою профессию. Вот мой типичный день. Я встаю <strong>${earlyOrLate[generateNumber(earlyOrLate)]}</strong>, а <strong>${sequence[generateNumber(sequence)]}</strong> я иду в душ, <strong>${sequence[generateNumber(sequence)]}</strong> я завтракаю, <strong>${sequence[generateNumber(sequence)]}</strong> я иду в офис, я обедаю в <strong>${placeToEat[generateNumber(placeToEat)]}</strong>, я работаю до <strong>${time[generateNumber(time)]}</strong> вечера, <strong>${sequence[generateNumber(sequence)]}</strong> я иду домой, я ужинаю в <strong>${placeToEat[generateNumber(placeToEat)]}</strong>, и <strong>${sequence[generateNumber(sequence)]}</strong> иду спать`;
};