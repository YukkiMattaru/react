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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Паша" id="1" />
                <DialogItem name="Валя" id="2" />
                <DialogItem name="Даня П" id="3" />
                <DialogItem name="Тимофей" id="4" />
                <DialogItem name="Даня М" id="5" />
                <DialogItem name="Мама" id="6" />
                <DialogItem name="Папа" id="7" />
            </div>
            <div className={s.messages}>
                <Message message="Привет" />
                <Message message="Как ты?" />
                <Message message="Хэй, йо" />
                <Message message="Че делаешь? Че каво, сучара, жди сигнала" />
            </div>
        </div>
    );
};

export default Dialogs;