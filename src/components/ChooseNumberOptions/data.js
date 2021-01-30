import { v4 as uuidv4 } from 'uuid';
const _ = require('lodash');

export const numData1 = _.shuffle([
  {
    num: 1,
    word: 'од<strong>и</strong>н',
    id: uuidv4()
  },
  {
    num: 2,
    word: 'дв<strong>а</strong>',
    id: uuidv4()
  }, {
    num: 3,
    word: 'тр<strong>и</strong>',
    id: uuidv4()
  },
  {
    num: 4,
    word: 'чет<strong>ы</strong>ре',
    id: uuidv4()
  }, {
    num: 5,
    word: 'п<strong>я</strong>ть',
    id: uuidv4()
  }, {
    num: 6,
    word: 'ш<strong>е</strong>сть',
    id: uuidv4()
  }, {
    num: 7,
    word: 'с<strong>е</strong>мь',
    id: uuidv4()
  }, {
    num: 8,
    word: 'в<strong>о</strong>семь',
    id: uuidv4()
  }, {
    num: 9,
    word: 'д<strong>е</strong>вять',
    id: uuidv4()
  },
  {
    num: 11,
    word: 'од<strong>и</strong>н<span class="highlighted">надцать</span>',
    id: uuidv4()
  }, {
    num: 12,
    word: 'две<span class="highlighted">н<strong>а</strong>дцать</span>',
    id: uuidv4()
  },
  {
    num: 13,
    word: 'три<span class="highlighted">н<strong>а</strong>дцать</span>',
    id: uuidv4()
  }, {
    num: 14,
    word: 'чет<strong>ы</strong>р<span class="highlighted">надцать</span>',
    id: uuidv4()
  }, {
    num: 15,
    word: 'пят<span class="highlighted">н<strong>а</strong>дцать</span>',
    id: uuidv4()
  }, {
    num: 16,
    word: 'шест<span class="highlighted">н<strong>а</strong>дцать</span>',
    id: uuidv4()
  }, {
    num: 17,
    word: 'сем<span class="highlighted">н<strong>а</strong>дцать</span>',
    id: uuidv4()
  }, {
    num: 18,
    word: 'восем<span class="highlighted">н<strong>а</strong>дцать</span>',
    id: uuidv4()
  }, {
    num: 19,
    word: 'девят<span class="highlighted">н<strong>а</strong>дцать</span>',
    id: uuidv4()
  }
  , {
    num: 10,
    word: 'д<strong>е</strong>сять',
    id: uuidv4()
  },
  {
    num: 20,
    word: 'дв<strong>а</strong><span class="highlighted">дцать<span>',
    id: uuidv4()
  }, {
    num: 30,
    word: 'тр<strong>и</strong><span class="highlighted">дцать<span>',
    id: uuidv4()
  },
  {
    num: 40,
    word: 'с<strong>о</strong>рок',
    id: uuidv4()
  }, {
    num: 50,
    word: 'пять<span class="highlighted">дес<strong>я</strong>т<span>',
    id: uuidv4()
  }, {
    num: 60,
    word: 'шесть<span class="highlighted">дес<strong>я</strong>т<span>',
    id: uuidv4()
  }, {
    num: 70,
    word: 'с<strong>е</strong>мь<span class="highlighted">десят<span>',
    id: uuidv4()
  }, {
    num: 80,
    word: 'в<strong>о</strong>семь<span class="highlighted">десят<span>',
    id: uuidv4()
  }, {
    num: 90,
    word: 'девян<strong>о</strong>сто',
    id: uuidv4()
  }
]).slice(0, 10);