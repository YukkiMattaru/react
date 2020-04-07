import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsComponents = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} src={dialog.src} />);

    let messagesComponents = props.state.messages.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsComponents }
            </div>
            <div className={s.messages}>
                { messagesComponents }
            </div>
        </div>
    );
};

export default Dialogs;