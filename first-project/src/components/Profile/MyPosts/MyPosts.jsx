import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {text: 'Привет, как дела?', id: 1, likesCount: 12},
        {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
        {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1},
        {text: '42 - смысл жизни', id: 4, likesCount: 52},
        {text: 'lorem ipsum ... и прочая хрень', id: 5, likesCount: 5},
        {text: 'Хочу спать', id: 6, likesCount: 9},
        {text: 'Я люблю заниматься херней, а не этим .-.', id: 7, likesCount: 122},
        {text: 'Сделайте за меня домашку', id: 8, likesCount: 142},
        {text: 'гы гы гы гы гы гы гы', id: 9, likesCount: 252},
    ];

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
                <Post text={postsData[0].text} like_count={postsData[0].likesCount}/>
                <Post text={postsData[1].text} like_count={postsData[1].likesCount}/>
                <Post text={postsData[2].text} like_count={postsData[2].likesCount}/>
                <Post text={postsData[3].text} like_count={postsData[3].likesCount}/>
                <Post text={postsData[4].text} like_count={postsData[4].likesCount}/>
                <Post text={postsData[5].text} like_count={postsData[5].likesCount}/>
                <Post text={postsData[6].text} like_count={postsData[6].likesCount}/>
                <Post text={postsData[7].text} like_count={postsData[7].likesCount}/>
                <Post text={postsData[8].text} like_count={postsData[8].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
