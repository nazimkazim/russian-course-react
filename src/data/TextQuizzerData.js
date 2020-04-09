let _ = require("lodash");

export const set1TextQuizzer = {
    text: "Компания Apple <strong><em>была основана</em></strong> двумя <strong><em>друзьями</em></strong> Стивом Джобсом и Стивом Возняком в <strong><em>городе</em></strong> Калифорния в 1976 <strong><em>году</em></strong>. Компания Apple <strong><em>производит</em></strong> такие <strong><em>устройства</em></strong> как, персональные компьютеры, ноутбуки, смартфоны, телевизоры. Компания Apple является лидером по <strong><em>продажам</em></strong> смартфонов в таких <strong><em>странах</em></strong>, как Россия, Китай, Япония, Германия, Франция, США.",
    quiz: [
        {
            word:"была основана",
            options:_.shuffle(["was founded","was given", "was taken", "was named"]),
            answer:"was founded"
        },
        {
            word:"друзьями",
            options:_.shuffle(["by friends","by collegues", "by relatives", "by strangers"]),
            answer:"by friends"
        },
        {
            word:"в городе",
            options:_.shuffle(["in the city","in the country", "in the village", "in the areas"]),
            answer:"in the city"
        },
        {
            word:"году",
            options:_.shuffle(["year","month", "week", "period"]),
            answer:"year"
        },
        {
            word:"производит",
            options:_.shuffle(["produce","buy", "tell", "give"]),
            answer:"produce"
        },
        {
            word:"устройства",
            options:_.shuffle(["devices","equipment", "technology", "machines"]),
            answer:"devices"
        },
        {
            word:"продажам",
            options:_.shuffle(["sales","equipment", "technology", "machines"]),
            answer:"sales"
        },
        {
            word:"странах",
            options:_.shuffle(["in cities","in countries", "in districts", "in neighbourhoods"]),
            answer:"in countries"
        }
    ]
}