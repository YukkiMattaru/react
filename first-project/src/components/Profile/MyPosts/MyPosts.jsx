import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength200 = maxLengthCreator(200)

const newPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostBody"}
                   component={Textarea}
                   placeholder={"Введите текст"}
                   validate={[requiredField, maxLength200]}/>
        </div>
        <div>
            <button name={'addPost'}>Добавить пост</button>
        </div>
    </form>
}

const NewPostFormRedux = reduxForm({
    form: 'newPost'
})(newPostForm)

const MyPosts = React.memo(props => {
    let postsComponents = props.posts.map(post => <Post text={post.text} key={post.id} like_count={post.likesCount}/>);
    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    };
    return (
        <div className={s.MyPosts}>
            <h3>Мои посты</h3>
            <NewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsComponents}
            </div>
        </div>
    );
});

export default MyPosts;
