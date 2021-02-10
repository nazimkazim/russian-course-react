const _ = require('lodash');
const malePhoto = 'https://res.cloudinary.com/nzmai/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1612604229/russian%20course/general/ben-parker-OhKElOkQ3RE-unsplash.jpg';
const femalePhoto = 'https://res.cloudinary.com/nzmai/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1612604225/russian%20course/general/sigmund-jzz_3jWMzHA-unsplash.jpg';

export const generateCV = () => {
  const genderType = ["мужчина", "женщина"];
  const yesOrNo = ['yes', 'no'];

  const femaleNames = ['Лара Крофт', 'Мария Шарапова', 'Елена Михаилова', 'Сауле Байсарина', 'Софи Лорен', 'Жустин Энен', 'Клаудия Шифер'];
  const maleNames = ['Майкл Джордан', 'Джордж Клуни', 'Олег Иванов', 'Сергей Еснин', 'Джеймс Тони', 'Брэд Купер', 'Сильвестер Сталоне'];
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

  if (chosenGender === "женщина") {
    let subjectPronoun = 'она';
    let objPronounGenitive = 'её';
    let objPronoundative = 'ей';
    return {
      avatar: femalePhoto,
      gender: {
        question: `Кто ${subjectPronoun}?`,
        word: chosenGender,
        answer: `${subjectPronoun} ${chosenGender}`,
      },
      name: {
        question: `Как ${objPronounGenitive} зовут?`,
        word: chosenFemaleName,
        answer: `${objPronounGenitive} зовут ${chosenFemaleName}`
      },
      occupation: {
        question: `Кто ${subjectPronoun} по профессии?`,
        word: chosenOccupation,
        answer: `${subjectPronoun} по профессии ${chosenOccupation}`
      },
      birthPlace: {
        question: `Откуда ${subjectPronoun}?`,
        word: chosenBirthPlace,
        answer: `${subjectPronoun} из ${chosenBirthPlace.slice(0, chosenBirthPlace.length - 1)}и`
      },
      currentPlace: {
        question: `Где ${subjectPronoun} сейчас живёт?`,
        word: chosenCurrentPlace,
        answer: `${subjectPronoun} сейчас живёт в ${changeEndingForContryPrepositionalCase(chosenCurrentPlace)}`
      },
      likeOrNot: chosenYesOrNo,
      age: {
        question: `Сколько ${objPronoundative} лет?`,
        word: generatedAge,
        answer: `${objPronoundative} ${generatedAge} ${setAgeAccordingToNumber(generatedAge)}`
      },
      hobbies: {
        question: `Что ${objPronounGenitive} интересует?`,
        word: chosenHobbies,
        answer: `${objPronounGenitive} интересует ${chosenHobbies.map(hobby => hobby)}`
      },
      skills: {
        question: `Что ${subjectPronoun} знает?`,
        word: chosenSkills,
        answer: `${subjectPronoun} знает ${chosenSkills.map(skill => skill)}`
      },
      languages: {
        question: `На каких языках ${subjectPronoun} говорит?`,
        word: chosenlanguages,
        answer: `${subjectPronoun} говорит на ${chosenlanguages.map(language => changeLanguageEnding(language))}`
      }
    };
  }

  if (chosenGender === "мужчина") {
    let subjectPronoun = 'он';
    let objPronounGenitive = 'его';
    let objPronoundative = 'ему';
    return {
      avatar: malePhoto,
      gender: {
        question: `Кто ${subjectPronoun}?`,
        word: chosenGender,
        answer: `${subjectPronoun} ${chosenGender}`,
      },
      name: {
        question: `Как ${objPronounGenitive} зовут?`,
        word: chosenMaleName,
        answer: `${objPronounGenitive} зовут ${chosenMaleName}`
      },
      occupation: {
        question: `Кто ${subjectPronoun} по профессии?`,
        word: chosenOccupation,
        answer: `${subjectPronoun} по профессии ${chosenOccupation}`
      },
      birthPlace: {
        question: `Откуда ${subjectPronoun}?`,
        word: chosenBirthPlace,
        answer: `${subjectPronoun} из ${chosenBirthPlace.slice(0, chosenBirthPlace.length - 1)}и`
      },
      currentPlace: {
        question: `Где ${subjectPronoun} сейчас живёт?`,
        word: chosenCurrentPlace,
        answer: `${subjectPronoun} сейчас живёт в ${changeEndingForContryPrepositionalCase(chosenCurrentPlace)}`
      },
      likeOrNot: chosenYesOrNo,
      age: {
        question: `Сколько ${objPronoundative} лет?`,
        word: generatedAge,
        answer: `${objPronoundative} ${generatedAge} ${setAgeAccordingToNumber(generatedAge)}`
      },
      hobbies: {
        question: `Что ${objPronounGenitive} интересует?`,
        word: chosenHobbies,
        answer: `${objPronounGenitive} интересует ${chosenHobbies.map(hobby => hobby)}`
      },
      skills: {
        question: `Что ${subjectPronoun} знает?`,
        word: chosenSkills,
        answer: `${subjectPronoun} знает ${chosenSkills.map(skill => skill)}`
      },
      languages: {
        question: `На каких языках ${subjectPronoun} говорит?`,
        word: chosenlanguages,
        answer: `${subjectPronoun} говорит на ${chosenlanguages.map(language => changeLanguageEnding(language))}`
      }
    };
  }
};

const changeEndingForContryPrepositionalCase = (word) => {
  if (word.charAt(word.length - 1) === 'а') {
    return `${word.slice(0, word.length - 1)}е`;
  }

  if (word.charAt(word.length - 1) === 'н') {
    return `${word}е`;
  }
};

const setAgeAccordingToNumber = (age) => {
  if (Number(String(age)[1]) === 1) {
    return 'год';
  }

  if (Number(String(age)[1]) >= 2 && Number(String(age)[1]) < 5) {
    return 'года';
  }

  if (Number(String(age)[1]) >= 5 || Number(String(age)[1]) === 0) {
    return 'лет';
  }
};

const changeLanguageEnding = (language) => {
  if (language.charAt(language.length - 1) === 'й') {
    return `${language.slice(0, language.length - 2)}ом`;
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