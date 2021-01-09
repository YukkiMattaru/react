import { Action } from "redux";
import { Dispatch } from "redux";
import {getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const INITIALIZED_SUCCESS = 'application/INITIALIZED_SUCCESS'

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: InitializingSuccessActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type InitializingSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS;
}

export const initializingSuccess = (): InitializingSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = (): ThunkAction<any, AppStateType, any, Action> => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializingSuccess())
        })
}

export default appReducer;