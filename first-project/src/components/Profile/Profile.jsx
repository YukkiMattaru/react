import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo className={s.profileInfo}/>
      <MyPosts addPost={props.addPost}
               posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText} />
    </div>
  );
};

export default Profile;
