import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsDataTypes} from "../../../App";



export function MyPosts(props: PostsDataTypes) {

    const postElements = props.postsData.map(p => <Post message={p.message} likeCounter={p.likes}/>)

    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {postElements}
        </div>
    </div>;
}