import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type PostType = {
    message: string
    likes: number
}

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
    }
    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return <div>
        My posts
        <div>
            <textarea value={props.newPostText} onChange={onPostChange}></textarea>
            <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={m.posts}>
            {postElements}
        </div>
    </div>;
}