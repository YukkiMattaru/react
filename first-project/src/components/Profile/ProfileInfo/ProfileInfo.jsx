import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profileInfoBlock}>
            <div>
                <img src={profile.photos.large || userPhoto} alt="avatar" />
                { isOwner &&
                <input type={"file"} onChange={onMainPhotoSelected} /> }
            </div>
            <div className={s.descriptionBlock}>
                <p>{profile.fullName}</p>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <p>{profile.contacts.github || ""}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;