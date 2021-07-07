import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, addPostAction, ChangePostTextAction, PostType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";

type MyPostsTypes = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export function MyPostsContainer(props: MyPostsTypes) {
    const addPost = () => {
        props.dispatch(addPostAction())
    }

    const onPostChange = (newText: string) => {
        props.dispatch(ChangePostTextAction(newText))
    }

    return (
        <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={addPost} updateNewPostText={onPostChange}/>
    )
}