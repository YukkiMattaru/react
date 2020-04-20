import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsComponents = props.messagesPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} src={dialog.src} />);

    let messagesComponents = props.messagesPage.messages.map(message => <Message message={message.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsComponents }
            </div>
            <div className={s.messages}>
                { messagesComponents }
                <textarea onChange={ onMessageChange } ref={ newMessage } value={props.messagesPage.newMessageText} />
                <button onClick={ addMessage }>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;