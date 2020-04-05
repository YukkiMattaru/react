import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let data = {
    dialogs: [
        {id: 1, name: 'Паша'},
        {id: 2, name: 'Валя'},
        {id: 3, name: 'Даня П'},
        {id: 4, name: 'Тимофей'},
        {id: 5, name: 'Даня М'},
        {id: 6, name: 'Мама'},
        {id: 7, name: 'Папа'},
        {id: 8, name: 'Я'},
        {id: 9, name: 'Дружная семья'}
    ],

    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как ты?'},
        {id: 3, message: 'Хэй, йо!'},
        {id: 4, message: 'Че делаешь? Че каво, сучара, жди сигнала'}
    ],

    posts: [
        {text: 'Привет, как дела?', id: 1, likesCount: 12},
        {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
        {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1},
        {text: '42 - смысл жизни', id: 4, likesCount: 52},
        {text: 'lorem ipsum ... и прочая хрень', id: 5, likesCount: 5},
        {text: 'Хочу спать', id: 6, likesCount: 9},
        {text: 'Я люблю заниматься херней, а не этим .-.', id: 7, likesCount: 122},
        {text: 'Сделайте за меня домашку', id: 8, likesCount: 142},
        {text: 'гы гы гы гы гы гы гы', id: 9, likesCount: 252},
    ]
};

ReactDOM.render(
    <React.StrictMode>
        <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
