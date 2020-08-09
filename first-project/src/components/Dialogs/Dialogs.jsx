import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength200 = maxLengthCreator(200)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               name={'newMessageBody'}
               placeholder={'Введите сообщение'}
               validate={[requiredField, maxLength200]}/>
        <br/>
        <button name={'addMessage'}>Отправить</button>
    </form>
}

const AddMessageFormRedux = reduxForm({
    form: 'addMessageForm'
}) (AddMessageForm)

const Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    let dialogsComponents = props.messagesPage.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} src={dialog.src} />);

    let messagesComponents = props.messagesPage.messages.map(message => <Message key={message.id} message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsComponents }
            </div>
            <div className={s.messages}>
                { messagesComponents }
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;