import {authAPI, ResultCodesEnum, ResultCodesEnumWithCaptcha, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {Action} from "redux";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState;

const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
});

type SetCaptchaUrl = {
    type: typeof SET_CAPTCHA_URL,
    captchaUrl: string | null
}

const setCaptchaUrl = (url: string | null): SetCaptchaUrl => ({
    type: SET_CAPTCHA_URL,
    captchaUrl: url
})

type ActionType = SetAuthUserDataType | SetCaptchaUrl | Action
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionType>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthUserData());
        dispatch(setCaptchaUrl(null));
    } else {
        if (data.resultCode === ResultCodesEnumWithCaptcha.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(data.url));
}

export default authReducer;