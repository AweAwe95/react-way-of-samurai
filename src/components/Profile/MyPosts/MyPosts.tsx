import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";

type MyPostsTypes = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export function MyPosts(props: MyPostsTypes) {

    const postElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likes}/>)

    const addPost = () => {
        props.dispatch({type:'ADD-POST'})

    }

    return <div>
        My posts
        <div>
            <textarea value={props.newPostText} onChange={e => props.dispatch({type: 'CHANGE-POST-TEXT', postText: e.currentTarget.value})}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={m.posts}>
            {postElements}
        </div>
    </div>;
}