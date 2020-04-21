import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/proReducer";

const MyPosts = (props) => {

    let postsComponents = props.posts.map(post => <Post text={post.text} like_count={post.likesCount}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={s.MyPosts}>
            <h3>Мои посты</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } value={ props.newPostText }/>
                </div>
                <div>
                    <button onClick={ addPost }>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsComponents }
            </div>
        </div>
    );
};

export default MyPosts;
