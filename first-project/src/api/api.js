import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "eb759ad3-f015-4eb2-99f4-83888891414f"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow (userID) {
        return instance
            .delete(`follow/${userID}`)
            .then(response => response.data.resultCode)
    },
    follow (userID) {
        return instance
            .post(`follow/${userID}`)
            .then(response => response.data.resultCode)
    }
}

export const profileAPI = {
    getProfile (userID) {
        return instance.get(`profile/${userID}`)
    },
    getStatus (userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status });
    },
    savePhoto (image) {
        let formData = new FormData();
        formData.append("image", image);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile (profile) {
        return instance.put('profile', {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}