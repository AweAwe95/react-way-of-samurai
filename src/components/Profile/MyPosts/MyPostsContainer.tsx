import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAction, ChangePostTextAction} from "../../../redux/profile-reducer";


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