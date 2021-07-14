import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {
    ActionsType,
    AddMessageAction,
    addPostAction,
    ChangeMessageTextAction,
    ChangePostTextAction,
    PostType
} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";

type MyPostsTypes = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,


    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: () => {
            dispatch(addPostAction())
        },
        updateNewPostText: (newText: string) => {
            dispatch(ChangePostTextAction(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)