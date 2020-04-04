import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post text='day one' like_count='1'/>
                <Post text='day two' like_count='5'/>
                <Post text='day three' like_count='12'/>
                <Post text='day four' like_count='0'/>
                <Post text='day five' like_count='18'/>
                <Post text='day six' like_count='0'/>
                <Post text='day seven' like_count='286'/>
            </div>
        </div>
    );
}

export default MyPosts;
