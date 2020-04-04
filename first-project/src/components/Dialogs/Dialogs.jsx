import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
};

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Паша'},
        {id: 2, name: 'Валя'},
        {id: 3, name: 'Даня П'},
        {id: 4, name: 'Тимофей'},
        {id: 5, name: 'Даня М'},
        {id: 6, name: 'Мама'},
        {id: 7, name: 'Папа'}
    ];

    let messagesData = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как ты?'},
        {id: 3, message: 'Хэй, йо!'},
        {id: 4, message: 'Че делаешь? Че каво, сучара, жди сигнала'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    );
};

export default Dialogs;