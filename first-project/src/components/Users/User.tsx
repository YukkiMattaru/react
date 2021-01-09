import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType
    isFollowingInProgress: Array<number>
    unfollow: (userID: number) => any
    follow: (userID: number) => any
}

let User: React.FC<PropsType> = ({user, isFollowingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.users}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt="user" className={styles.userPhoto}
                             src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Отписаться</button>
                        :
                        <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Подписаться</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>
    )
}

export default User;