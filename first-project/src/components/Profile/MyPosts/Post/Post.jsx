import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      {props.text}
      <div className={s.button}><button>Нравится ({props.like_count})</button></div>
    </div>
  );
}

export default Post;
