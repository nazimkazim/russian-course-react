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