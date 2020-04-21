const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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