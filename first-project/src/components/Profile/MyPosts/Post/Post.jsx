import React from 'react';
import s from './Post.module.css';

const Post = ({text, like_count}) => {
  return (
    <div className={s.item}>
      {text}
      <div className={s.button}><button>Нравится ({like_count})</button></div>
    </div>
  );
}

export default Post;
