import React, {useState} from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsTypes = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export function MyPosts(props: MyPostsTypes) {

    const postElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likes}/>)


    const addPost = () => {
        props.addPost(textareaValue)
    }
    const [textareaValue, setTextareaValue] = useState<string>('')

    return <div>
        My posts
        <div>
            <textarea onChange={e => setTextareaValue(e.currentTarget.value)} value={textareaValue}></textarea>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {postElements}
        </div>
    </div>;
}