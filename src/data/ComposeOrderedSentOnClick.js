import KateWoman from '../images/COSOC/Lesson 1.3/woman.jpg'
import BorisMan from '../images/COSOC/Lesson 1.3/man.jpg'
import YoungMan from '../images/COSOC/Lesson 1.3/youngman.jpg'
import YoungLady from '../images/COSOC/Lesson 1.3/younglady.jpg'
import Girl from '../images/COSOC/Lesson 1.3/girl.jpg'
import Boy from '../images/COSOC/Lesson 1.3/boy.jpg'

let _ = require("lodash");


export const set1COSOC = _.shuffle([
    {
        eng: "This is Larry Page, he is from Google",
        rus: "Это Ларри Пейдж, он из Гугл"
    },
    {
        eng: "This is Jeff Bezos, he is from Amazon",
        rus: "Это Джеф Безос, он из Амазон"
    },
    {
        eng: "This is Tim Cook, he is from Apple",
        rus: "Это Тим Кук, он из Аппл"
    },
    {
        eng: "This is Bill Gates, he is from Microsoft",
        rus: "Это Билл Гейтс, он из Майкрософт"
    },
    {
        eng: "This is Elon Musk, he is from Tesla",
        rus: "Это Илон Маск, он из Тесла"
    },
    {
        eng: "This is Jack Ma, he is from Ali Baba",
        rus: "Это Джек Ма, он из Али Баба"
    }
]);

export const set2COSOC = _.shuffle([
    {
        eng: "He is not a taxi driver, he is a minster",
        rus: "Он не таксист, он министр"
    },
    {
        eng: "She is not a politician, she is a pianist",
        rus: "Она не политик, она пианист"
    },
    {
        eng: "I am not a pilot, I am a manager",
        rus: "Я не пилот, я менеджер"
    },
    {
        eng: "You are not an actor, you are a businessman",
        rus: "Ты не актёр, ты бизнесмэн"
    },
    {
        eng: "We are not acrobats, we are performers",
        rus: "Мы не акробаты, мы артисты"
    },
    {
        eng: "They are not directors, they are gymnasts",
        rus: "Они не директора, они гимнасты"
    },
    {
        eng: "You are not journalist, you are chauffeur",
        rus: "Вы не журналист, вы шофёр"
    },
    {
        eng: "It is not a computer, it is a printer",
        rus: "Это не компьютер, это принтер"
    }
]);

export const set3COSOC = _.shuffle([
    {
        eng: "My name is Jackie Chan. I am an actor. I am from China",
        rus: "Меня зовут Джеки Чан. Я актёр. Я из Китая"
    },
    {
        eng: "Your name is Tom Hardy. You are an actor. You are from Great Britain",
        rus: "Тебя зовут Том Харди. Ты актёр. Ты из Великобритании"
    },
    {
        eng: "His name is Elon Musk. He is a manager. He is from South Africa",
        rus: "Его зовут Илон Маск. Он менеджер. Он из Южной Африки"
    },
    {
        eng: "Her name is Angela Merkel. She is a chancellor. She is from Germany",
        rus: "Её зовут Ангела Меркель, Она канцлер. Она из Германии"
    },
    {
        eng: "Its name is Samsuns. It is a device. It is from South Korea",
        rus: "Его зовут Самсунг. Оно устройство. Оно из Южной Кореи"
    },
    {
        eng: "Your names are Barack and Michelle Obama. You are a couple. You are from the USA",
        rus: "Вас зовут Барак и Мишель Обама. Вы пара. Вы из США"
    },
    {
        eng: "Our names are Akio Morita and Masaru Ibuka. We are founders. We are from Japan",
        rus: "Нас зовут Акио Морита и Масару Ибука. Мы основатели. Мы из Японии"
    },
    {
        eng: "Their names are Alexandr Ovechkin and Evgeni Malkin. They are hockey players. They are from Russia",
        rus: "Их зовут Александр Овечкин и Евгений Малкин. Они хоккеисты. Они из России"
    },
    {
        eng: "My name is Luc Besson. I am a fild director. I am from France",
        rus: "Меня зовут Люк Бессон. Я режиссёр. Я из Франции"
    },
    {
        eng: "My name is Hasan Shah. I am a footballer. I am from Turkey",
        rus: "Меня зовут Хасан Шаш. Я футболист. Я из Турции"
    }
]);

export const set4COSOC = _.shuffle([
    {
        photo:KateWoman,
        name: 'Катя',
        rus: "Это женщина. Её зовут Катя."
    },
    {
        photo:BorisMan,
        name: 'Борис',
        rus: "Это мужчина. Его зовут Борис."
    },
    {
        photo:YoungMan,
        name: 'Джим',
        rus: "Это молодой человек. Его зовут Джим."
    },
    {
        photo:YoungLady,
        name: 'Вероника',
        rus: "Это девушка. Её зовут Вероника."
    },
    {
        photo:Girl,
        name: 'Мария',
        rus: "Это девочка. Её зовут Мария."
    },
    {
        photo:Boy,
        name: 'Дэвид',
        rus: "Это мальчик. Его зовут Дэвид."
    }
]);