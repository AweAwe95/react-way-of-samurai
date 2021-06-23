import React from "react";
import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";


type ProfileTypes = {
    addPost: (postMessage: string) => void
    posts: PostType[]
}

export function Profile(props: ProfileTypes) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts posts = {props.posts} addPost = {props.addPost}/>
        </div>
    )
}