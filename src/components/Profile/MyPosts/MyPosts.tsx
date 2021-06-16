import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts() {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>;
}