const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {text: 'Привет, как дела?', id: 1, likesCount: 12},
        {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
        {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1},
        {text: '42 - смысл жизни', id: 4, likesCount: 52},
        {text: 'lorem ipsum ... и прочая хрень', id: 5, likesCount: 5},
        {text: 'Хочу спать', id: 6, likesCount: 9},
        {text: 'Я люблю заниматься херней, а не этим .-.', id: 7, likesCount: 122},
        {text: 'Сделайте за меня домашку', id: 8, likesCount: 142},
        {text: 'гы гы гы гы гы гы гы', id: 9, likesCount: 252}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let posts = state.posts;
                let newPost = {
                    text: state.newPostText,
                    id: posts[posts.length - 1].id + 1,
                    likesCount: 0
                };
                state.posts.push(newPost);
                state.newPostText = '';
            }
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;