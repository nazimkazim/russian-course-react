import { v4 as uuidv4 } from 'uuid';
const _ = require('lodash')

export const chooseOptionSet1 =  _.shuffle([
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
    middle: 'сестра.',
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
    end: 'зовут Олеся.'
  },
  {
    start: 'Это',
    options1:
      [{
        word: 'мой',
        id: uuidv4(),
        status: true,
        checked: false
      },
      {
        word: 'моя',
        id: uuidv4(),
        status: false,
        checked: false
      }
      ],
    middle: 'брат.',
    options2: [{
      word: 'Её',
      id: uuidv4(),
      status: false,
      checked: false
    },
    {
      word: 'Его',
      id: uuidv4(),
      status: true,
      checked: false
    }
    ],
    end: 'зовут Джон.'
  },
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
    middle: 'бабушка.',
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
    end: 'зовут Вера.'
  },
  {
    start: 'Это',
    options1:
      [{
        word: 'мой',
        id: uuidv4(),
        status: true,
        checked: false
      },
      {
        word: 'моя',
        id: uuidv4(),
        status: false,
        checked: false
      }
      ],
    middle: 'папа.',
    options2: [{
      word: 'Её',
      id: uuidv4(),
      status: false,
      checked: false
    },
    {
      word: 'Его',
      id: uuidv4(),
      status: true,
      checked: false
    }
    ],
    end: 'зовут Николай.'
  },
  {
    start: 'Это',
    options1:
      [{
        word: 'мой',
        id: uuidv4(),
        status: true,
        checked: false
      },
      {
        word: 'моя',
        id: uuidv4(),
        status: false,
        checked: false
      }
      ],
    middle: 'дедушка.',
    options2: [{
      word: 'Её',
      id: uuidv4(),
      status: false,
      checked: false
    },
    {
      word: 'Его',
      id: uuidv4(),
      status: true,
      checked: false
    }
    ],
    end: 'зовут Сергей.'
  },
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
    middle: 'подруга.',
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
    end: 'зовут Наташа.'
  }
]);