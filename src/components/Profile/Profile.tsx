import React from "react";
import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataTypes} from "../../App";

export function Profile(props: PostsDataTypes) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts postsData = {props.postsData}/>
        </div>
    )
}