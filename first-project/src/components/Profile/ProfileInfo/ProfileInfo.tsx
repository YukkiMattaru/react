import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = async (formData: any) => {
        saveProfile(formData);
        setEditMode(false);
    }

    return (
        <div className={s.profileInfoBlock}>
            <div>
                <img src={profile.photos.large || userPhoto} alt="avatar"/>
                {isOwner &&
                <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            {/*@ts-ignore*/}
            {editMode ? <ProfileDataForm onSubmit={onSubmit} profile={profile}/> :
                <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>}
            <div className={s.descriptionBlock}>
                <p>{profile.fullName}</p>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <p>{profile.contacts.github || ""}</p>
            </div>
        </div>
    );
};

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div><b>Ищу работу:</b> {profile.lookingForAJob ? "да" : "нет"}</div>
        {profile.lookingForAJob &&
        <div><b>Навыки:</b> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : ""}</div>}
        <div><b>Обо мне:</b> {profile.aboutMe ? profile.aboutMe : ""}</div>
        <div><b>Контакты:</b></div>
        {Object.keys(profile.contacts).map(key => {
            // @ts-ignore
            return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        {isOwner && <button onClick={goToEditMode}>Редактировать</button>}
    </div>
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;