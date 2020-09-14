import profileReducer, {addPost, deletePost} from "./proReducer";

it('length of posts should be incremented', () => {
    let action = addPost('it-kamasutra.com');
    let state = {
        posts: [
            {text: 'Привет, как дела?', id: 1, likesCount: 12},
            {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
            {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1}
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(state.posts.length+1);
});

it('message of new post should be correct', () => {
    let action = addPost('it-kamasutra.com');
    let state = {
        posts: [
            {text: 'Привет, как дела?', id: 1, likesCount: 12},
            {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
            {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1}
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts[3].text).toBe('it-kamasutra.com');
});

it('after deleting length of posts should be decrement', () => {
    let action = deletePost(1);
    let state = {
        posts: [
            {text: 'Привет, как дела?', id: 1, likesCount: 12},
            {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
            {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1}
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(state.posts.length-1);
});

it('after deleting length of posts shouldnt be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let state = {
        posts: [
            {text: 'Привет, как дела?', id: 1, likesCount: 12},
            {text: 'Сегодня я страдаю херней', id: 2, likesCount: 13},
            {text: 'Меня кто-нибудь читает?', id: 3, likesCount: 1}
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(state.posts.length);
});