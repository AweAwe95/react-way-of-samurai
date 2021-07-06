import React from "react";
import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";


type ProfileTypes = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export function Profile(props: ProfileTypes) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}