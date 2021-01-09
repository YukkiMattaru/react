import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {ProfileType} from "../../../types/types";

type PropsType = {
    handleSubmit: (FormData: any) => void
    profile: ProfileType | null
    error: string
}

const ProfileDataForm: React.FC<PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Сохранить</button></div>
        { error && <div className={style.formSummaryError}>
            { error }
        </div> }
        <div><b>Полное имя:</b> {createField("Полное имя", "fullName", [], Input)}</div>
        <div><b>Обо мне:</b> {createField("Обо мне", "aboutMe", [], Textarea)}</div>
        <div><b>Ищу работу:</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}</div>
        <div><b>Навыки:</b> {createField("Навыки", "lookingForAJobDescription", [], Textarea)}</div>
        <div>Контакты:</div>
        { /* @ts-ignore */ }
        { Object.keys(profile.contacts).map(key => {
            // @ts-ignore
            return <div>{key}: {createField(profile.contacts[key], profile.contacts[key], [], Input)}
            </div>
        })}
    </form>
}

// @ts-ignore
const ProfileDataFormReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm)

export default ProfileDataFormReduxForm