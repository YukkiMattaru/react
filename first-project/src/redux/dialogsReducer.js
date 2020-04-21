const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText) {
                let messages = state.messages;
                let newMessage = {
                    id: messages[messages.length - 1].id + 1,
                    message: state.newMessageText
                };
                state.messages.push(newMessage);
                state.newMessageText = '';
            }
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break;
    }
    return state;
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;