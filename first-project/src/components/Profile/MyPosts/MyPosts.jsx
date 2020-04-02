import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className='MyPosts'>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <div className={s.item}>Post 1</div>
      </div>
    </div>
  );
}

export default MyPosts;