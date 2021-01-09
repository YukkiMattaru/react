import React from 'react';
import s from './Post.module.css';

type PropsType = {
    text: string
    likeCount: number
    key: number
}

const Post: React.FC<PropsType> = ({text, likeCount}) => {
  return (
    <div className={s.item}>
      {text}
      <div className={s.button}><button>Нравится ({likeCount})</button></div>
    </div>
  );
}

export default Post;
