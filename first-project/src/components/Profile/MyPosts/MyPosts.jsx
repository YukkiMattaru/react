import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsComponents = props.posts.map(post => <Post text={post.text} like_count={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.MyPosts}>
            <h3>Мои посты</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
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
