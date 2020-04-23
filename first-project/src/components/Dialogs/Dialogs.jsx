import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsComponents = props.messagesPage.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} src={dialog.src} />);

    let messagesComponents = props.messagesPage.messages.map(message => <Message key={message.id} message={message.message}/>);

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.changeMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsComponents }
            </div>
            <div className={s.messages}>
                { messagesComponents }
                <textarea onChange={ onMessageChange } value={props.messagesPage.newMessageText} />
                <button onClick={ onAddMessage }>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;