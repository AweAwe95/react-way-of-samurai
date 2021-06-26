import React, {useState} from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsTypes = {
    posts: PostType[]
    newPostText: string
    addPost: (postMessage: string) => void
    changeNewText:(postText: string) => void
}

export function MyPosts(props: MyPostsTypes) {

    const postElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likes}/>)

    const addPost = () => {
        props.addPost(props.newPostText)

    }

    return <div>
        My posts
        <div>
            <textarea value={props.newPostText} onChange={e => props.changeNewText(e.currentTarget.value)}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={m.posts}>
            {postElements}
        </div>
    </div>;
}