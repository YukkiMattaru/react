import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfoBlock}>
            <div>
                <img src={props.profile.photos.large || userPhoto} alt="avatar" />
            </div>
            <div className={s.descriptionBlock}>
                <p>{props.profile.fullName}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p>{props.profile.contacts.github || ""}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;