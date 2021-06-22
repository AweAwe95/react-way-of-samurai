import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts() {

    let postData = [
        {message:'Hi', likes: 6},
        {message:'Bye', likes: 7},
        {message:'How old are you?', likes: 10},
    ]

    const postElements = postData.map(p => <Post message={p.message} likeCounter={p.likes}/>)

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