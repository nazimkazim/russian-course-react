const arrows = {
  downArrow: "https://res.cloudinary.com/nzmai/image/upload/v1602051806/be-verb-diagram/time-expressions/down-arrow.svg",
  leftArrow: "https://res.cloudinary.com/nzmai/image/upload/v1602051806/be-verb-diagram/time-expressions/left-arrow.svg",
  rightArrow:"https://res.cloudinary.com/nzmai/image/upload/v1602051806/be-verb-diagram/time-expressions/right-arrow.svg"
};

const time = {
  now: "https://res.cloudinary.com/nzmai/image/upload/v1602051283/be-verb-diagram/time-expressions/now.svg",
  today: "https://res.cloudinary.com/nzmai/image/upload/v1602052069/be-verb-diagram/time-expressions/today.svg",
  week: "https://res.cloudinary.com/nzmai/image/upload/v1602052728/be-verb-diagram/time-expressions/week.svg",
  month:"https://res.cloudinary.com/nzmai/image/upload/v1602052971/be-verb-diagram/time-expressions/month.svg",
  year:"https://res.cloudinary.com/nzmai/image/upload/v1602053137/be-verb-diagram/time-expressions/year.svg"
};

export const diagramData = {
  places: [
    {
      "word": "shop",
      "translation": "магазин",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886376/be-verb-diagram/places/shop.svg"
    },
    {
      "word": "library",
      "translation": "библиотека",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886376/be-verb-diagram/places/library.svg"
    },
    {
      "word": "theater",
      "translation": "театр",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886379/be-verb-diagram/places/theatre.svg"
    },
    {
      "word": "circus",
      "translation": "цирк",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886381/be-verb-diagram/places/circus.svg"
    },
    {
      "word": "church",
      "translation": "церковь",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886381/be-verb-diagram/places/church.svg"
    },
    {
      "word": "mosque",
      "translation": "мечеть",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886379/be-verb-diagram/places/mosque.svg"
    },
    {
      "word": "airport",
      "translation": "аэропорт",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886379/be-verb-diagram/places/airport.svg"
    },
    {
      "word": "bakery",
      "translation": "булочная",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886379/be-verb-diagram/places/bakery.svg"
    },
    {
      "word": "supermarket",
      "translation": "супермаркет",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886379/be-verb-diagram/places/supermarket.svg"
    },
    {
      "word": "retaurant",
      "translation": "ресторан",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886381/be-verb-diagram/places/restaurant.svg"
    },
    {
      "word": "cinema",
      "translation": "кинотеатр",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886376/be-verb-diagram/places/cinema.svg"
    },
    {
      "word": "shopping center",
      "translation": "торговый центр",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601886376/be-verb-diagram/places/shopping_center.svg"
    }
  ],
  subjectPronouns: [
    {
      "word": "I",
      "translation": "Я",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601893694/be-verb-diagram/subject-pronouns/Iam.png"
    },
    {
      "word": "You",
      "translation": "Ты",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601893693/be-verb-diagram/subject-pronouns/you.svg"
    },
    {
      "word": "He",
      "translation": "Он",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601893694/be-verb-diagram/subject-pronouns/male.svg"
    },
    {
      "word": "She",
      "translation": "Она",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601893693/be-verb-diagram/subject-pronouns/female.svg"
    },
    {
      "word": "It",
      "translation": "Это",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601893693/be-verb-diagram/subject-pronouns/it.svg"
    },
    {
      "word": "We",
      "translation": "Мы",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601893694/be-verb-diagram/subject-pronouns/we.png"
    },
    {
      "word": "They",
      "translation": "Они",
      "picUrl": "https://res.cloudinary.com/nzmai/image/upload/v1601893694/be-verb-diagram/subject-pronouns/they.jpg"
    }
  ],
  tenses: [
    {
      tense: "present",
      expressions: [
        {
          name: "now / at the moment",
          pics: [time.now, arrows.downArrow]
        },
        {
          name: "today",
          pics: [time.today, arrows.downArrow]
        }
      ]
    },
    {
      tense: "past",
      expressions: [
        {
          name: "yesterday",
          pics: [time.today, arrows.leftArrow]
        },
        {
          name: "last week",
          pics: [time.week, arrows.leftArrow]
        },
        {
          name: "last month",
          pics: [time.month, arrows.leftArrow]
        },
        {
          name: "last year",
          pics: [time.year, arrows.leftArrow]
        }
      ]
    },
    {
      tense: "future",
      expressions: [
        {
          name: "tomorrow",
          pics: [time.today, arrows.rightArrow]
        },
        {
          name: "next week",
          pics: [time.week, arrows.rightArrow]
        },
        {
          name: "next month",
          pics: [time.month, arrows.rightArrow]
        },
        {
          name: "next year",
          pics: [time.year, arrows.rightArrow]
        }
      ]
    }
  ]
};