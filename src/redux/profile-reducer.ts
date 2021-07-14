type AddPostActionType = {
    type: 'ADD-POST'
}
type ChangePostTextActionType = {
    type: 'CHANGE-POST-TEXT'
    postText: string
}

export const addPostAction = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}
export const ChangePostTextAction = (newPostText: string): ChangePostTextActionType => {
    return {type: 'CHANGE-POST-TEXT', postText: newPostText}
}


let initialState = {
    posts: [
        {message: 'Hi', likes: 6},
        {message: 'Bye', likes: 7},
        {message: 'How old are you?', likes: 10},
    ],
    newPostText: ''
}


export const profileReducer = (state = initialState,action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                message: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...stateCopy.posts]
            stateCopy.posts.push(newPost);
            return stateCopy
        case 'CHANGE-POST-TEXT':
            let stateCopy2 = {...state}
            stateCopy2.newPostText = action.postText
            return stateCopy2
        default:
            return state
    }
}