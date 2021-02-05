export const generateCV = () => {
  const genderType = ["male", "female"];
  const yesOrNo = ['yes', 'no'];
  const femaleNames = ['Лара Крофт', 'Мария Шарапова', 'Елена Михаилова', 'Сауле Байсарина', 'Софи Лорен', 'Жустин Энен', 'Клаудия Шифер'];
  const birthPlaces = ['Франция', 'Германия', 'Испания', 'Германия', 'Чехия', 'Латвия', 'Колумбия', 'Норвегия'];
  const currentCountries = ['Казахстан', 'Америка', 'Украина', 'Литва', 'Мексика', 'Аргентина', 'Узбекистан', 'Польша'];
  const chosenGender = genderType[generateChoiceNum(genderType.length)];
  const chosenYesOrNo = yesOrNo[generateChoiceNum(yesOrNo.length)];
  const chosenFemaleName = femaleNames[generateChoiceNum(femaleNames.length)];
  const chosenBirthPlace = birthPlaces[generateChoiceNum(birthPlaces.length)];
  const chosenCurrentPlace = currentCountries[generateChoiceNum(currentCountries.length)];
  const generatedAge = randomRange(23, 63); 
  console.log(chosenGender, chosenYesOrNo);

  if (chosenGender === "female") {
    console.log('trueee');
    console.log({
      gender: chosenGender,
      name: chosenFemaleName,
      likeOrNot: chosenYesOrNo,
      birthPlace: chosenBirthPlace,
      currentPlace: chosenCurrentPlace,
      age: generatedAge,
      occupation: '',
      skills: '',
      hobbies: '',
      languages: ''
    });
    /* return {
      gender: genderType,
      name: chosenFemaleName,
      likeOrNot: yesOrNo,
      birthPlace: '',
      currentPlace: '',
      age: '',
      occupation: '',
      skills: '',
      hobbies: '',
      languages: ''
    }; */
  }
};

const generateChoiceNum = (num) => {
  return Math.floor(Math.random() * num);
};

const randomRange = (myMin, myMax) => {
  return Math.floor(
    Math.random() * (Math.ceil(myMax) - Math.floor(myMin) + 1) + myMin
  );
}