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
            state.posts.push(newPost);
            return state
        case 'CHANGE-POST-TEXT':
            state.newPostText = action.postText
            return state

        default:
            return state
    }
}