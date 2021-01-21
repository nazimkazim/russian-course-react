import { v4 as uuidv4 } from 'uuid';

export const chooseOptionSet1 = [
  {
    start: 'Это',
    options1: {
      option1: {
        word: 'мой',
        id: uuidv4(),
        status: false,
        checked:false
      },
      option2: {
        word: 'моя',
        id: uuidv4(),
        status: true,
        checked:false
      }
    },
    middle: 'мама',
    options2: {
      option1: {
        word: 'Её',
        id: uuidv4(),
        status: true,
        checked:false
      },
      option2: {
        word: 'Его',
        id: uuidv4(),
        status: false,
        checked:false
      }
    },
    end: 'зовут Юлия'
  }
];