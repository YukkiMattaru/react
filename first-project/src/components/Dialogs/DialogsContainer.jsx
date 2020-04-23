import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let messagesPage = props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    };

    return (
        <Dialogs addMessage={addMessage} changeMessageText={onMessageChange} messagesPage={messagesPage} />
    );
}

export default DialogsContainer;