import MaleIcon from '../images/male-avatar.svg';
import FemaleIcon from '../images/female-avatar.svg';
import ObjectIcon from '../images/neuter-avatar.svg';
import PluralIcon from '../images/crowd-of-users.svg';

export const accusativeData1 = [
  {
    gender: 'он',
    icon: MaleIcon,
    body: [
      {
        type: 'человек',
        rules: [
          `согласная + -а`,
          `-й, -ь &#8594; -я`,
        ]
      },
      {
        type: 'вещь',
        rules: [
          '&#10006;'
        ]
      }

    ]
    ,
    examples: [
      'Я слушаю президента',
      'Я слушаю джаз'
    ]
  },
  {
    gender: 'она',
    icon: FemaleIcon,
    body: [
      {
        type: 'человек',
        rules: [
          `-а &#8594; -у`,
          `-я &#8594; -ю`,
        ]
      },
      {
        type: 'вещь',
        rules: [
          '-ь &#10006;'
        ]
      }

    ]
    ,
    examples: [
      'Я слушаю музыку',
      'Я люблю семью',
      'Я люблю ночь'
    ]
  },
  {
    gender: 'оно',
    icon: ObjectIcon,
    body: [
      {
        type: 'вещь',
        rules: [
          '&#10006;'
        ]
      }

    ]
    ,
    examples: [
      'Я не люблю кино'
    ]
  },
  {
    gender: 'они',
    icon: PluralIcon,
    body: [
      {
        type: 'вещь',
        rules: [
          '&#10006;'
        ]
      }
    ]
    ,
    examples: [
      'Я вижу машины'
    ]
  }
];

export const prepositionalCaseData1 = [
  {
    gender: 'он',
    icon: MaleIcon,
    body: [
      {
        type: 'человек',
        rules: [
          `&#10006;`
        ]
      },
      {
        type: 'вещь',
        rules: [
          'согласная + е',
          '-й, -ь &#8594; -е'
        ]
      }
    ]
    ,
    examples: [
      'Я работаю в театре',
      'Он работает в парламенте'
    ]
  },
  {
    gender: 'она',
    icon: FemaleIcon,
    body: [
      {
        type: 'человек',
        rules: [
          `&#10006;`
        ]
      },
      {
        type: 'вещь',
        rules: [
          '-а, -я &#8594; -е'
        ]
      }

    ]
    ,
    examples: [
      'Мы работаем в больнице',
      'Они работают в школе'
    ]
  },
  {
    gender: 'оно',
    icon: ObjectIcon,
    body: [
      {
        type: 'вещь',
        rules: [
          '-о, -е &#8594; -е'
        ]
      }

    ]
    ,
    examples: [
      'Ты работаешь в кафе'
    ]
  },
  {
    gender: 'они',
    icon: PluralIcon,
    body: [
      {
        type: 'вещь',
        rules: [
          '&#10006;'
        ]
      }
    ]
    ,
    examples: [

    ]
  }
];

export const instrumentalCaseData1 = [
  {
    gender: 'он',
    icon: MaleIcon,
    body: [
      {
        type: 'человек',
        rules: [
          `&#10006;`
        ]
      },
      {
        type: 'вещь',
        rules: [
          'согласная + ом',
          '-й, -ь &#8594; -ем'
        ]
      }
    ]
    ,
    examples: [
      'Я работаю доктором',
      'Он работает секретарём'
    ]
  },
  {
    gender: 'она',
    icon: FemaleIcon,
    body: [
      {
        type: 'человек',
        rules: [
          `&#10006;`
        ]
      },
      {
        type: 'вещь',
        rules: [
          '-а &#8594; -ой',
          '-я &#8594; -ей',
          '-ь + ю',
        ]
      }

    ]
    ,
    examples: [
      'Она работает медсестрой'
    ]
  },
  {
    gender: 'оно',
    icon: ObjectIcon,
    body: [
      {
        type: 'вещь',
        rules: [
          '-о &#8594; -ом',
          '-е &#8594; -ем'
        ]
      }

    ]
    ,
    examples: [
    ]
  },
  {
    gender: 'они',
    icon: PluralIcon,
    body: [
      {
        type: 'вещь',
        rules: [
          '&#10006;'
        ]
      }
    ]
    ,
    examples: [

    ]
  }
];