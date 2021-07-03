import React from "react";
import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfileTypes = {
    addPost: (postMessage: string) => void
    profilePage: ProfilePageType
    changeNewText:(postText: string) => void
}

export function Profile(props: ProfileTypes) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost = {props.addPost} changeNewText={props.changeNewText}/>
        </div>
    )
}