import { v4 as uuidv4 } from 'uuid';

export const chooseOptionSet1 = [
  {
    start: 'Это',
    options1:
      [{
        word: 'мой',
        id: uuidv4(),
        status: false,
        checked: false
      },
      {
        word: 'моя',
        id: uuidv4(),
        status: true,
        checked: false
      }
      ],
    middle: 'мама',
    options2: [{
      word: 'Её',
      id: uuidv4(),
      status: true,
      checked: false
    },
    {
      word: 'Его',
      id: uuidv4(),
      status: false,
      checked: false
    }
    ],
    end: 'зовут Юлия'
  }
];