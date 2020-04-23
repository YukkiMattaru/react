const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {text: 'Привет, как дела?', id: 1, likesCount: 12},
        {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
        {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_POST: {
            stateCopy = {
                ...state,
                posts: [...state.posts]
            };
            if (state.newPostText) {
                let posts = state.posts;
                let newPost = {
                    text: state.newPostText,
                    id: posts[posts.length - 1].id + 1,
                    likesCount: 0
                };
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
            }
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText }
        }
        default: return {...state}
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;