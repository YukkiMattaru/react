import {profileAPI, ResultCodesEnum} from "../api/api";
import store, {AppStateType} from "./store";
import {stopSubmit, StopSubmitAction} from "redux-form";
import {PostType, ProfileType, PhotosType} from "../types/types";
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {text: 'Привет, как дела?', id: 1, likesCount: 12},
        {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
        {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    let stateCopy;

    switch (action.type) {
        case ADD_POST: {
            stateCopy = {
                ...state,
                posts: [...state.posts]
            };
            if (action.newPostBody) {
                let posts = state.posts;
                let newPost = {
                    text: action.newPostBody,
                    id: posts[posts.length - 1].id + 1,
                    likesCount: 0
                };
                stateCopy.posts.push(newPost);
            }
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postID)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return {...state}
    }
}

type AddPostActionType = {
    type: typeof ADD_POST
    newPostBody: string
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

type DeletePostActionType = {
    type: typeof DELETE_POST
    postID: number
}

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

type ActionType = AddPostActionType | SetUserProfileActionType | SetStatusActionType | DeletePostActionType | SavePhotoSuccessType | Action<any>
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionType>

export const addPost = (newPostBody: string): AddPostActionType => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const deletePost = (postID: number): DeletePostActionType => ({type: DELETE_POST, postID})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userID: number | null): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userID)
    dispatch(setUserProfile(data))
}

export const getStatus = (userID: number | null): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userID)
    dispatch(setStatus(data))

}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setStatus(status))
    } else {
        alert('Введите валидный статус');
        dispatch(getStatus(store.getState().auth.userId))
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (formData: ProfileType): ThunkType => async (dispatch) => {
    let response = await profileAPI.saveProfile(formData)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(store.getState().auth.userId))
    } else {
        dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}))
    }
}

export default profileReducer;