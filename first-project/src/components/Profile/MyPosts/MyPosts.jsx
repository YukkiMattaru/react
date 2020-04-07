import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsComponents = props.posts.map(post => <Post text={post.text} like_count={post.likesCount}/>)

    return (
        <div className={s.MyPosts}>
            <h3>Мои посты</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsComponents }
            </div>
        </div>
    );
}

export default MyPosts;
