import {v1} from "uuid";

export const profileReducer = (state: any,action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            break
        case 'CHANGE-POST-TEXT':
            state.newPostText = action.postText
            break
    }
    return state
}