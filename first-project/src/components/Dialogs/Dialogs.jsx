import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let dialogsComponents = props.messagesPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} src={dialog.src} />);

    let messagesComponents = props.messagesPage.messages.map(message => <Message message={message.message}/>);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator(text));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsComponents }
            </div>
            <div className={s.messages}>
                { messagesComponents }
                <textarea onChange={ onMessageChange } value={props.messagesPage.newMessageText} />
                <button onClick={ addMessage }>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;