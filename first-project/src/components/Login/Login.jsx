import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk, logout} from "../../redux/authReducer"
import Redirect from "react-router-dom/es/Redirect";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Логин"}
                   name={"email"}
                   component={Input}
                   validate={requiredField}/>
        </div>
        <div>
            <Field placeholder={"Пароль"}
                   name={"password"}
                   type={"password"}
                   component={Input}
                   validate={requiredField}/>
        </div>
        <div>
            <Field id={"remLogin"}
                   component={Input}
                   name={"rememberMe"}
                   type={"checkbox"}/>
        </div>
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