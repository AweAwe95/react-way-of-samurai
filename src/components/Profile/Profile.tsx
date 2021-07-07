import React from "react";
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfileTypes = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export function Profile(props: ProfileTypes) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPostsContainer posts = {props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}