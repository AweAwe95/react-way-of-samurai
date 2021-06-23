import {rerenderEntireTree} from "../render";

export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
}

export type MessagesPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}


export type ProfilePageType = {
    posts: PostType[]
}

export type PostType = {
    message: string
    likes: number
}

export const state:StateType = {
    messagesPage: {
        dialogs: [
            {id: '1', name: 'Vitali'},
            {id: '2', name: 'Denis'},
            {id: '3', name: 'Viktor'},
            {id: '4', name: 'Valera'}
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you'},
            {id: '3', message: 'Really'},
            {id: '4', message: 'Bye'},
        ],
    },
    profilePage: {
        posts: [
            {message: 'Hi', likes: 6},
            {message: 'Bye', likes: 7},
            {message: 'How old are you?', likes: 10},
        ]
    }
}


export let addPost = (postMessage: string) => {
    let newPost = {
        message: postMessage,
        likes: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}