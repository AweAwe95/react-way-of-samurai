import React from "react";
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export function Profile() {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}