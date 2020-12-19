const _ = require('lodash') 

export const PrepositionalCaseQuiz = _.shuffle([
  {
    word: 'Корридор',
    choices: [
      {
        name: 'Rule',
        options: [
          {
            title: 'replace the last letter with "e"',
            correct: false,
            name:'option1'
          },
          {
            title: 'add "e" to the last letter',
            correct: true,
            name:'option1'
          }
        ]
      },
      {
        name: 'Gender',
        options: [
          {
            title: 'male',
            correct: true,
            name:'option2'
          },
          {
            title: 'female',
            correct: false,
            name:'option2'
          },
          {
            title: 'neuter',
            correct: false,
            name:'option2'
          }
        ]
      }
    ]
  },
  {
    word: 'Музей',
    choices: [
      {
        name: 'Rule',
        options: [
          {
            title: 'replace the last letter with "e"',
            correct: true,
            name:'option1'
          },
          {
            title: 'add "e" to the last letter',
            correct: false,
            name:'option1'
          }
        ]
      },
      {
        name: 'Gender',
        options: [
          {
            title: 'male',
            correct: true,
            name:'option2'
          },
          {
            title: 'female',
            correct: false,
            name:'option2'
          },
          {
            title: 'neuter',
            correct: false,
            name:'option2'
          }
        ]
      }
    ]
  },
  {
    word: 'Банк',
    choices: [
      {
        name: 'Rule',
        options: [
          {
            title: 'replace the last letter with "e"',
            correct: false,
            name:'option1'
          },
          {
            title: 'add "e" to the last letter',
            correct: true,
            name:'option1'
          }
        ]
      },
      {
        name: 'Gender',
        options: [
          {
            title: 'male',
            correct: true,
            name:'option2'
          },
          {
            title: 'female',
            correct: false,
            name:'option2'
          },
          {
            title: 'neuter',
            correct: false,
            name:'option2'
          }
        ]
      }
    ]
  },
  {
    word: 'Больница',
    choices: [
      {
        name: 'Rule',
        options: [
          {
            title: 'replace the last letter with "e"',
            correct: true,
            name:'option1'
          },
          {
            title: 'add "e" to the last letter',
            correct: false,
            name:'option1'
          }
        ]
      },
      {
        name: 'Gender',
        options: [
          {
            title: 'male',
            correct: false,
            name:'option2'
          },
          {
            title: 'female',
            correct: true,
            name:'option2'
          },
          {
            title: 'neuter',
            correct: false,
            name:'option2'
          }
        ]
      }
    ]
  }
])