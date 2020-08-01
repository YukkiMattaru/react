import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.users}>
            <div>
                {pages.map(p => {
                    return <span
                        className={`${styles.page_number} ${props.currentPage === p ? styles.selectedPage : ""}`}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                  <span>
                      <div>
                          <NavLink to={'/profile/' + u.id}>
                            <img alt="user" className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                          </NavLink>
                          </div>
                      <div>
                          {u.followed ? <button onClick={() => props.unfollow(u.id)}>Отписаться</button>
                              : <button onClick={() => props.follow(u.id)}>Подписаться</button>}

                      </div>
                  </span>
                    <span>
                      <span>
                          <div>{u.name}</div>
                          <div>{u.status}</div>
                      </span>
                      <span>
                          <div>{"u.location.country"}</div>
                          <div>{"u.location.city"}</div>
                      </span>
                  </span>
                </div>)
            }
        </div>
    )
}

export default Users