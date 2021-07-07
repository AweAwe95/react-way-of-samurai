import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, addPostAction, ChangePostTextAction, PostType} from "../../../redux/store";

type MyPostsTypes = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsTypes) {

    const postElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likes}/>)

    const onAddPost = () => {
        props.addPost()
        //props.dispatch(addPostAction())
    }
    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return <div>
        My posts
        <div>
            <textarea value={props.newPostText} onChange={onPostChange}></textarea>
            {/*onChange={e => props.dispatch(ChangePostTextAction(e.currentTarget.value))*/}
            <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={m.posts}>
            {postElements}
        </div>
    </div>;
}