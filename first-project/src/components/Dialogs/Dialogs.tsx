import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, Form, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {AddMessageType, InitialStateType} from "../../redux/dialogsReducer";

const maxLength200 = maxLengthCreator(200)

type FormDataType = {
    newMessageBody: string
}

type AddMessageFormPropsType = {
    handleSubmit: (values: FormDataType) => void
}

const AddMessageForm: React.FC<AddMessageFormPropsType> = (props) => {
    return <Form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               name={'newMessageBody'}
               placeholder={'Введите сообщение'}
               validate={[requiredField, maxLength200]}/>
        <br/>
        <button name={'addMessage'}>Отправить</button>
    </Form>
}

// @ts-ignore
const AddMessageFormRedux = reduxForm({ form: 'addMessageForm' }) (AddMessageForm)

type PropsType = {
    messagesPage: InitialStateType
    addMessage: (newMessageBody: string) => AddMessageType
}

const Dialogs: React.FC<PropsType> = (props) => {

    let addNewMessage = (values: string) => {
        // @ts-ignore
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
                {/*@ts-ignore*/}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;