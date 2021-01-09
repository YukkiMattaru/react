import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk, logout} from "../../redux/authReducer"

import { Redirect } from "react-router-dom"
import style from "../common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../redux/store";

type LoginFormPropsType = {
    handleSubmit: (formData: any) => void
    error: string
    captchaUrl: string
}

const LoginForm: React.FC<LoginFormPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        { createField("Логин", "email", requiredField, Input) }
        { createField("Пароль", "password", requiredField, Input, {type: "password"}) }
        { createField(null, "rememberMe", null, Input, {id: "remLogin", type: "checkbox"}) }
        { captchaUrl && <img src={captchaUrl}  alt={captchaUrl}/> }
        { captchaUrl && createField("Введите символы с картинки", "captcha", requiredField, Input) }
        { error && <div className={style.formSummaryError}>
            { error }
        </div> }
        <div>
            <button>Отправить</button>
        </div>
    </form>
}
{/*@ts-ignore*/}
const LoginReduxForm = reduxForm({ form: 'login' }) (LoginForm)

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    loginThunk: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        {/*@ts-ignore*/}
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { loginThunk, logout })(Login);