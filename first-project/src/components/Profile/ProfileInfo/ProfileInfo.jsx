import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfoBlock}>
            <div>
                <img src="https://sun9-55.userapi.com/impg/c853516/v853516912/17ee97/9A_8CGsM1aI.jpg?size=200x0&quality=90&sign=6b9ca5b5baf7fbf2ec84d7e6a1f06228" alt="avatar" />
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
};

export default ProfileInfo;