// Lesson 2.1 matching activity jobs - places
const _ = require('lodash')
export const matchingWordsData1 = [
  {
    word1: 'Банк',
    word2: 'Банкир',
    pair: ['Банкир', 'Банк']
  },
  {
    word1: 'Театр',
    word2: 'Актёр',
    pair: ['Актёр', 'Театр']
  },
  {
    word1: 'Офис',
    word2: 'Секретарь',
    pair: ['Офис', 'Секретарь']
  },
  {
    word1: 'Школа',
    word2: 'Учитель',
    pair: ['Школа', 'Учитель']
  },
  {
    word1: 'Больница',
    word2: 'Доктор',
    pair: ['Больница', 'Доктор']
  },
  {
    word1: 'Университет',
    word2: 'Профессор',
    pair: ['Университет', 'Профессор']
  },
  {
    word1: 'Парламент',
    word2: 'Депутат',
    pair: ['Парламент', 'Депутат']
  }
];

// Lesson 2.1 matching activity "Работать verb conjugation"
export const matchingWordsData2 = [
  {
    word1: 'Я',
    word2: 'Работаю',
    pair: ['Работаю', 'Я']
  },
  {
    word1: 'Ты',
    word2: 'Работаешь',
    pair: ['Работаешь', 'Ты']
  },
  {
    word1: 'Он/Она/Оно',
    word2: 'Работает',
    pair: ['Он/Она/Оно', 'Работает']
  },
  {
    word1: 'Мы',
    word2: 'Работаем',
    pair: ['Мы', 'Работаем']
  },
  {
    word1: 'Вы',
    word2: 'Работаете',
    pair: ['Вы', 'Работаете']
  },
  {
    word1: 'Они',
    word2: 'Работают',
    pair: ['Они', 'Работают']
  }
];

// Lesson 2.1 matching activity "Завтракать verb conjugation"
export const matchingWordsData3 = [
  {
    word1: 'Я',
    word2: 'Завтракаю',
    pair: ['Завтракаю', 'Я']
  },
  {
    word1: 'Ты',
    word2: 'Завтракаешь',
    pair: ['Завтракаешь', 'Ты']
  },
  {
    word1: 'Он/Она/Оно',
    word2: 'Завтракает',
    pair: ['Он/Она/Оно', 'Завтракает']
  },
  {
    word1: 'Мы',
    word2: 'Завтракаем',
    pair: ['Мы', 'Завтракаем']
  },
  {
    word1: 'Вы',
    word2: 'Завтракаете',
    pair: ['Вы', 'Завтракаете']
  },
  {
    word1: 'Они',
    word2: 'Завтракают',
    pair: ['Они', 'Завтракают']
  }
];

// Lesson 2.1 matching activity "Обедать verb conjugation"
export const matchingWordsData4 = [
  {
    word1: 'Я',
    word2: 'Обедаю',
    pair: ['Обедаю', 'Я']
  },
  {
    word1: 'Ты',
    word2: 'Обедаешь',
    pair: ['Обедаешь', 'Ты']
  },
  {
    word1: 'Он/Она/Оно',
    word2: 'Обедает',
    pair: ['Он/Она/Оно', 'Обедает']
  },
  {
    word1: 'Мы',
    word2: 'Обедаем',
    pair: ['Мы', 'Обедаем']
  },
  {
    word1: 'Вы',
    word2: 'Обедаете',
    pair: ['Вы', 'Обедаете']
  },
  {
    word1: 'Они',
    word2: 'Обедают',
    pair: ['Они', 'Обедают']
  }
];

// Lesson 2.1 matching activity "Ужинать verb conjugation"
export const matchingWordsData5 = [
  {
    word1: 'Я',
    word2: 'Ужинаю',
    pair: ['Ужинаю', 'Я']
  },
  {
    word1: 'Ты',
    word2: 'Ужинаешь',
    pair: ['Ужинаешь', 'Ты']
  },
  {
    word1: 'Он/Она/Оно',
    word2: 'Ужинает',
    pair: ['Он/Она/Оно', 'Ужинает']
  },
  {
    word1: 'Мы',
    word2: 'Ужинаем',
    pair: ['Мы', 'Ужинаем']
  },
  {
    word1: 'Вы',
    word2: 'Ужинаете',
    pair: ['Вы', 'Ужинаете']
  },
  {
    word1: 'Они',
    word2: 'Ужинают',
    pair: ['Они', 'Ужинают']
  }
];

// Lesson 2.1 matching activity "Идти verb conjugation"
export const matchingWordsData6 = [
  {
    word1: 'Я',
    word2: 'Иду',
    pair: ['Иду', 'Я']
  },
  {
    word1: 'Ты',
    word2: 'Идёшь',
    pair: ['Идёшь', 'Ты']
  },
  {
    word1: 'Он/Она/Оно',
    word2: 'Идёт',
    pair: ['Он/Она/Оно', 'Идёт']
  },
  {
    word1: 'Мы',
    word2: 'Идём',
    pair: ['Мы', 'Идём']
  },
  {
    word1: 'Вы',
    word2: 'Идёте',
    pair: ['Вы', 'Идёте']
  },
  {
    word1: 'Они',
    word2: 'Идут',
    pair: ['Они', 'Идут']
  }
];

// Lesson 2.1 matching activity "Вставать verb conjugation"
export const matchingWordsData7 = [
  {
    word1: 'Я',
    word2: 'Встаю',
    pair: ['Встаю', 'Я']
  },
  {
    word1: 'Ты',
    word2: 'Встаёшь',
    pair: ['Встаёшь', 'Ты']
  },
  {
    word1: 'Он/Она/Оно',
    word2: 'Встаёт',
    pair: ['Он/Она/Оно', 'Встаёт']
  },
  {
    word1: 'Мы',
    word2: 'Встаём',
    pair: ['Мы', 'Встаём']
  },
  {
    word1: 'Вы',
    word2: 'Встаёте',
    pair: ['Вы', 'Встаёте']
  },
  {
    word1: 'Они',
    word2: 'Встают',
    pair: ['Они', 'Встают']
  }
];

// Lesson 2.2 Matching numbers
export const matchingWordsData8 = _.shuffle([
  {
    word1: '11',
    word2: 'одиннадцать',
    pair: ['11', 'одиннадцать']
  },
  {
    word1: '12',
    word2: 'двенадцать',
    pair: ['12', 'двенадцать']
  }, {
    word1: '13',
    word2: 'тринадцать',
    pair: ['13', 'тринадцать']
  }, {
    word1: '14',
    word2: 'четырнадцать',
    pair: ['14', 'четырнадцать']
  }, {
    word1: '15',
    word2: 'пятнадцать',
    pair: ['15', 'пятнадцать']
  }, {
    word1: '16',
    word2: 'шестнадцать',
    pair: ['16', 'шестнадцать']
  }, {
    word1: '17',
    word2: 'семнадцать',
    pair: ['17', 'семнадцать']
  }, {
    word1: '18',
    word2: 'восемьнадцать',
    pair: ['18', 'восемьнадцать']
  }, {
    word1: '19',
    word2: 'девятнадцать',
    pair: ['19', 'девятнадцать']
  }, {
    word1: '20',
    word2: 'двадцать',
    pair: ['20', 'двадцать']
  },{
    word1: '30',
    word2: 'тридцать',
    pair: ['30', 'тридцать']
  },{
    word1: '40',
    word2: 'сорок',
    pair: ['40', 'сорок']
  },{
    word1: '50',
    word2: 'пятьдесят',
    pair: ['50', 'пятьдесят']
  },{
    word1: '60',
    word2: 'шестьдесят',
    pair: ['60', 'шестьдесят']
  },{
    word1: '70',
    word2: 'семьдесят',
    pair: ['70', 'семьдесят']
  },{
    word1: '80',
    word2: 'восемьдесят',
    pair: ['80', 'восемьдесят']
  },{
    word1: '90',
    word2: 'девяносто',
    pair: ['90', 'девяносто']
  },
]).slice(0, 11);