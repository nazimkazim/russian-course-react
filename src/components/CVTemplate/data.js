const _ = require('lodash');
export const generateCV = () => {
  const genderType = ["male", "female"];
  const yesOrNo = ['yes', 'no'];

  const femaleNames = ['Лара Крофт', 'Мария Шарапова', 'Елена Михаилова', 'Сауле Байсарина', 'Софи Лорен', 'Жустин Энен', 'Клаудия Шифер'];
  const maleNames = ['Майкл Джордан', 'Джордж Клуни', 'Олег Иванов', 'Сергей Еснин', 'Джеймс Тони', 'Брэдл Купер', 'Сильвестер Сталоне'];
  const birthPlaces = ['Франция', 'Германия', 'Испания', 'Германия', 'Чехия', 'Латвия', 'Колумбия', 'Норвегия'];
  const currentCountries = ['Казахстан', 'Америка', 'Украина', 'Литва', 'Мексика', 'Аргентина', 'Узбекистан', 'Польша'];
  const occupations = ['Менеджер', 'Президент', 'Бухгалтер', 'Профессор', 'Футболист', 'Депутат', 'Учитель', 'Доктор', 'Дизайнер'];
  const skills = ['Майкрософт Офис', 'Эксэль', 'Фотошоп', 'Маркетинг', 'Планирование', 'Тайм-менеджмент', 'Проджект менеджмент'];
  const hobbies = ['Фотографирование', 'Дайвинг', 'Велоспорт', 'Сноубординг', 'Каратэ', 'Гитару', 'Пианино', 'Музыку', 'Футбол', 'Баскетбол'];
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
  console.log(chosenGender, chosenYesOrNo);

  if (chosenGender === "female") {
    return {
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
    }
  }

  if (chosenGender === "male") {
    return {
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
    }
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