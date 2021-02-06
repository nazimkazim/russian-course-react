const _ = require('lodash');
const malePhoto = 'https://res.cloudinary.com/nzmai/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1612604229/russian%20course/general/ben-parker-OhKElOkQ3RE-unsplash.jpg';
const femalePhoto = 'https://res.cloudinary.com/nzmai/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1612604225/russian%20course/general/sigmund-jzz_3jWMzHA-unsplash.jpg';

export const generateCV = () => {
  const genderType = ["male", "female"];
  const yesOrNo = ['yes', 'no'];

  const femaleNames = ['Лара Крофт', 'Мария Шарапова', 'Елена Михаилова', 'Сауле Байсарина', 'Софи Лорен', 'Жустин Энен', 'Клаудия Шифер'];
  const maleNames = ['Майкл Джордан', 'Джордж Клуни', 'Олег Иванов', 'Сергей Еснин', 'Джеймс Тони', 'Брэдл Купер', 'Сильвестер Сталоне'];
  const birthPlaces = ['Франция', 'Германия', 'Испания', 'Германия', 'Чехия', 'Латвия', 'Колумбия', 'Норвегия'];
  const currentCountries = ['Казахстан', 'Америка', 'Украина', 'Литва', 'Мексика', 'Аргентина', 'Узбекистан', 'Польша'];
  const occupations = ['Менеджер', 'Президент', 'Бухгалтер', 'Профессор', 'Футболист', 'Депутат', 'Учитель', 'Доктор', 'Дизайнер'];
  const skills = ['Майкрософт Офис', 'Эксэль', 'Фотошоп', 'Маркетинг', 'Планирование', 'Тайм-менеджмент', 'Проджект менеджмент'];
  const hobbies = ['Фотографирование', 'Дайвинг', 'Велоспорт', 'Сноубординг', 'Каратэ', 'Гитара', 'Пианино', 'Музыка', 'Футбол', 'Баскетбол'];
  const languages = ['Русский', 'Итальянский', 'Испанский', 'Английский', 'Французский', 'Китайский', 'Турецкий', 'Японский'];

  const chosenGender = genderType[generateChoiceNum(genderType.length)];
  const chosenYesOrNo = yesOrNo[generateChoiceNum(yesOrNo.length)];
  const chosenFemaleName = femaleNames[generateChoiceNum(femaleNames.length)];
  const chosenMaleName = maleNames[generateChoiceNum(maleNames.length)];
  const chosenBirthPlace = birthPlaces[generateChoiceNum(birthPlaces.length)];
  const chosenCurrentPlace = currentCountries[generateChoiceNum(currentCountries.length)];
  const chosenOccupation = occupations[generateChoiceNum(occupations.length)];
  const chosenSkills = _.shuffle(skills).slice(0, 5);
  const chosenHobbies = _.shuffle(hobbies).slice(0, 5);
  const chosenlanguages = _.shuffle(languages).slice(0, 4);
  const generatedAge = randomRange(23, 63);

  if (chosenGender === "female") {
    return {
      avatar: femalePhoto,
      gender: chosenGender,
      name: chosenFemaleName,
      birthPlace: chosenBirthPlace,
      currentPlace: chosenCurrentPlace,
      occupation: chosenOccupation,
      likeOrNot: chosenYesOrNo,
      age: generatedAge,
      hobbies: chosenHobbies,
      skills: chosenSkills,
      languages: chosenlanguages
    };
  }

  if (chosenGender === "male") {
    return {
      avatar: malePhoto,
      gender: chosenGender,
      name: chosenMaleName,
      likeOrNot: chosenYesOrNo,
      birthPlace: chosenBirthPlace,
      currentPlace: chosenCurrentPlace,
      age: generatedAge,
      occupation: chosenOccupation,
      skills: chosenSkills,
      hobbies: chosenHobbies,
      languages: chosenlanguages
    };
  }
};

const generateChoiceNum = (num) => {
  return Math.floor(Math.random() * num);
};

const randomRange = (myMin, myMax) => {
  return Math.floor(
    Math.random() * (Math.ceil(myMax) - Math.floor(myMin) + 1) + myMin
  );
};