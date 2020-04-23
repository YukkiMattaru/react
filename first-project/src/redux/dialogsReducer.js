const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Даша',
            src: 'https://sun1-26.userapi.com/1Lue-cqED40QRvpORb2us_46RUxG7XCdIFLc-g/6KHeLg2hmHk.jpg?ava=1'
        },
        {id: 2, name: 'Валя', src: 'https://sun9-35.userapi.com/c205620/v205620511/afa09/T8eHYI2TNFU.jpg?ava=1'},
        {
            id: 3,
            name: 'Даня П',
            src: 'https://sun1-86.userapi.com/qMqR8CCq6fTkJr3dJr6Ev27ps9gdc2nMaIv5Vg/zgjbooV9rP4.jpg?ava=1'
        },
        {id: 4, name: 'Тимофей', src: 'https://sun1-95.userapi.com/c852024/v852024101/14f710/9CGKROdeB1c.jpg?ava=1'},
        {id: 5, name: 'Лёха', src: 'https://sun1-29.userapi.com/c848524/v848524576/8f069/_l41h7X6Rys.jpg?ava=1'},
        {id: 6, name: 'Даня М', src: 'https://sun9-58.userapi.com/c846419/v846419091/18c60c/vMeqb1V1aFE.jpg?ava=1'},
        {id: 7, name: 'Илья', src: 'https://sun1-85.userapi.com/c857328/v857328354/13e882/0_tnECRBUtg.jpg?ava=1'},
        {id: 8, name: 'Серафим', src: 'https://sun9-32.userapi.com/c853624/v853624245/19cb74/jaQXzMIuNKU.jpg?ava=1'},
    ],
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как ты?'},
        {id: 3, message: 'Хэй, йо!'},
        {id: 4, message: 'Че делаешь? Че каво, сучара, жди сигнала'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE: {
            stateCopy = {
                ...state,
                messages: [...state.messages]
            };
            if (state.newMessageText) {
                let messages = state.messages;
                let newMessage = {
                    id: messages[messages.length - 1].id + 1,
                    message: state.newMessageText
                };
                stateCopy.messages.push(newMessage);
                stateCopy.newMessageText = '';
            }
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.newText};
        }
        default: return {...state};
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;