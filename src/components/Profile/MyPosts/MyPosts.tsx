import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts() {

    let postData = [
        {message:'Hi', likes: 6},
        {message:'Bye', likes: 7},
        {message:'How old are you?', likes: 10},
    ]


    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            <Post message={postData[0].message} likeCounter={postData[0].likes}/>
            <Post message={postData[1].message} likeCounter={postData[1].likes}/>
            <Post message={postData[2].message} likeCounter={postData[2].likes}/>
        </div>
    </div>;
}