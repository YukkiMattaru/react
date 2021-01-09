import axios from "axios";
import {ProfileType, UserType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "eb759ad3-f015-4eb2-99f4-83888891414f"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesEnumWithCaptcha {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

type FollowStatusProfileResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: any
}

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance
            .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow (userID: number) {
        return instance
            .delete<FollowStatusProfileResponseType>(`follow/${userID}`)
            .then(response => response.data.resultCode)
    },
    follow (userID: number) {
        return instance
            .post<FollowStatusProfileResponseType>(`follow/${userID}`)
            .then(response => response.data.resultCode)
    }
}

type SavePhotoResponseType = {
    data: {
        photos: {
            small: string | null
            large: string | null
        }
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}



export const profileAPI = {
    getProfile (userID: number | null) {
        return instance.get<ProfileType>(`profile/${userID}`).then(res => res.data)
    },
    getStatus (userID: number | null) {
        return instance.get<string>(`profile/status/${userID}`).then(res => res.data)
    },
    updateStatus (status: string) {
        return instance.put<FollowStatusProfileResponseType>(`profile/status`, { status }).then(res => res.data)
    },
    savePhoto (image: File) {
        let formData = new FormData();
        formData.append("image", image);
        return instance.put<SavePhotoResponseType>(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => res.data)
    },
    saveProfile (profile: ProfileType) {
        return instance.put<FollowStatusProfileResponseType>('profile', {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription}).then(res => res.data)
    }
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodesEnumWithCaptcha
    messages: Array<string>
}

type LogoutResponseType = {
    data: any
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha = null as string | null) {
        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
            .then(res => res.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`)
            .then(res => res.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{url: string}>(`security/get-captcha-url`).then(res => res.data)
    }
}