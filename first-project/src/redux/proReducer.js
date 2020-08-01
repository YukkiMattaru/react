const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {text: 'Привет, как дела?', id: 1, likesCount: 12},
        {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
        {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1},
    ],
    profile: null,
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default: return {...state}
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;