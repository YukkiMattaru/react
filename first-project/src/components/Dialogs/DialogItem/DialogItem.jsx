import {NavLink} from "react-router-dom";
import React from "react";
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={"/dialogs/" + props.id}><img className={s.avatar} alt="avatar" src={props.src}/><span className={s.name}>{props.name}</span></NavLink>
        </div>
    );
};

export default DialogItem;