import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    console.log(props.dialogs[0])

    let dialogsComponents = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesComponents = props.messages.map(message => <Message message={message.message}/>);

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