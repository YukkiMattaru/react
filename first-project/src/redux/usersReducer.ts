import {ResultCodesEnum, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";
import {UserType} from "../types/types";
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [] as Array<number> // array of users ids
}

type InitialStateType = typeof initialState;

const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userID]
                    : state.isFollowingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }
}

type FollowSuccessType = {
    type: typeof FOLLOW,
    userID: number
}

type UnFollowSuccessType = {
    type: typeof UNFOLLOW,
    userID: number
}

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type ToggleIsFollowingInProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFollowingInProgress: boolean,
    userID: number
}

type ActionTypes = FollowSuccessType | UnFollowSuccessType | SetUsersType
    | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFollowingInProgressType | ToggleIsFetchingType

type DispatchType = Dispatch<ActionTypes>

export const followSuccess = (userID: number): FollowSuccessType => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID: number): UnFollowSuccessType => ({type: UNFOLLOW, userID})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (isFollowingInProgress: boolean, userID: number): ToggleIsFollowingInProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowingInProgress,
    userID
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionTypes>

/* thunks */
export const requestUsers = (pageNumber: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: DispatchType, userID: number,
                                  apiMethod: any, actionCreator: (userID: number) => FollowSuccessType | UnFollowSuccessType) =>
{
    dispatch(toggleIsFollowingInProgress(true, userID))
    let resultCode = await apiMethod(userID);
    if (resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleIsFollowingInProgress(false, userID))
}

export const follow = (userID: number): ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), followSuccess);
}

export const unfollow = (userID: number): ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
}

export default usersReducer;