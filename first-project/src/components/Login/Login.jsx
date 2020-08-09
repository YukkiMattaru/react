import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Логин"}
                   name={"login"}
                   component={Input}
                   validate={requiredField}/>
        </div>
        <div>
            <Field placeholder={"Пароль"}
                   name={"password"}
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
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;