import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, isFollowingInProgress, follow, unfollow, onPageChanged, totalUsersCount, pageSize, users }) => {
    return (
        <div className={styles.users}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize} />
            { users.map(u => <User key={u.id} user={u} isFollowingInProgress={isFollowingInProgress}
                unfollow={unfollow} follow={follow}/>) }
        </div>
    )
}

export default Users