const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

type DialogType = {
    id: number,
    name: string,
    src: string
}

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Даша', src: 'https://sun1-97.userapi.com/impg/DDtc5r0xwnKB4kbDSfroDjGpfsN3QG1vkrir3Q/wubRfIExNwA.jpg?size=50x0&quality=96&crop=0,421,1620,1620&sign=a05bedc385fc72a55187883de06c9c96&ava=1'},
        {id: 2, name: 'Валя', src: 'https://sun9-35.userapi.com/c205620/v205620511/afa09/T8eHYI2TNFU.jpg?ava=1'},
        {id: 3, name: 'Даня П', src: 'https://sun1-86.userapi.com/qMqR8CCq6fTkJr3dJr6Ev27ps9gdc2nMaIv5Vg/zgjbooV9rP4.jpg?ava=1'},
        {id: 4, name: 'Тимофей', src: 'https://sun1-95.userapi.com/c852024/v852024101/14f710/9CGKROdeB1c.jpg?ava=1'},
        {id: 5, name: 'Лёха', src: 'https://sun1-29.userapi.com/c848524/v848524576/8f069/_l41h7X6Rys.jpg?ava=1'},
        {id: 6, name: 'Даня М', src: 'https://sun9-58.userapi.com/c846419/v846419091/18c60c/vMeqb1V1aFE.jpg?ava=1'},
        {id: 7, name: 'Илья', src: 'https://sun1-85.userapi.com/c857328/v857328354/13e882/0_tnECRBUtg.jpg?ava=1'},
        {id: 8, name: 'Серафим', src: 'https://sun9-32.userapi.com/c853624/v853624245/19cb74/jaQXzMIuNKU.jpg?ava=1'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как ты?'},
        {id: 3, message: 'Хэй, йо!'},
        {id: 4, message: 'Че делаешь? Че каво, сучара, жди сигнала'}
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state: InitialStateType = initialState, action: AddMessageType) => {
    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE: {
            stateCopy = {
                ...state,
                messages: [...state.messages]
            };
            if (action.newMessageBody) {
                let messages = state.messages;
                let newMessage = {
                    id: messages[messages.length - 1].id + 1,
                    message: action.newMessageBody
                };
                stateCopy.messages.push(newMessage);
            }
            return stateCopy;
        }
        default: return {...state};
    }
}
export type AddMessageType = {
    type: typeof ADD_MESSAGE,
    newMessageBody: string
}
export const addMessage = (newMessageBody: string): AddMessageType => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;