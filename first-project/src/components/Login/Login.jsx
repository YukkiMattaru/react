import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk, logout} from "../../redux/authReducer"

import Redirect from "react-router-dom/es/Redirect"
import style from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        { createField("Логин", "email", requiredField, Input) }
        { createField("Пароль", "password", requiredField, Input, {type: "password"}) }
        { createField(null, "rememberMe", null, Input, {id: "remLogin", type: "checkbox"}) }
        { error && <div className={style.formSummaryError}>
            { error }
        </div> }
        <div>
            <button>Отправить</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginThunk, logout })(Login);