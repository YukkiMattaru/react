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
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}