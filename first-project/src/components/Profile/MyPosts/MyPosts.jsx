import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsComponents = props.posts.map(post => <Post text={post.text} key={post.id} like_count={post.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.MyPosts}>
            <h3>Мои посты</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } value={ props.newPostText }/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsComponents }
            </div>
        </div>
    );
};

export default MyPosts;
