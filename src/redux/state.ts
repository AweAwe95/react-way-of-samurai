import {v1} from "uuid";

type StoreType = {
    _state: StateType
    _callSubscriber:(state: StateType)=>void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch:(action: ActionsType) => void
}
export type ActionsType = AddPostActionType | ChangePostTextActionType | AddMessageActionType | ChangeMessageTextActionType

type AddPostActionType ={
    type: 'ADD-POST'
}
type ChangePostTextActionType={
    type: 'CHANGE-POST-TEXT'
    postText: string
}

type AddMessageActionType ={
    type: 'ADD-MESSAGE'
}
type ChangeMessageTextActionType={
    type: 'CHANGE-MESSAGE-TEXT'
    newMessage: string
}
export const addPostAction = ():AddPostActionType => {
    return {type:'ADD-POST'}
}
export const ChangePostTextAction = (newPostText: string):ChangePostTextActionType => {
    return {type:'CHANGE-POST-TEXT', postText: newPostText}
}
export const AddMessageAction = ():AddMessageActionType => {
    return {type:'ADD-MESSAGE'}
}
export const ChangeMessageTextAction = (newMessageText: string):ChangeMessageTextActionType => {
    return {type:'CHANGE-MESSAGE-TEXT', newMessage: newMessageText}
}


export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
}
export type MessagesPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type PostType = {
    message: string
    likes: number
}

export let store: StoreType = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: v1(), name: 'Vitali'},
                {id: v1(), name: 'Denis'},
                {id: v1(), name: 'Viktor'},
                {id: v1(), name: 'Valera'}
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you'},
                {id: v1(), message: 'Really'},
                {id: v1(), message: 'Bye'},
            ],
            newMessageText: ""
        },
        profilePage: {
            posts: [
                {message: 'Hi', likes: 6},
                {message: 'Bye', likes: 7},
                {message: 'How old are you?', likes: 10},
            ],
            newPostText: ''
        }
    },
    _callSubscriber(state: StateType) {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },


    // addPost() {
    //     let newPost = {
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._callSubscriber(this._state)
    // },
    // changePostText(postText: string) {
    //     this._state.profilePage.newPostText = postText
    //     this._callSubscriber(this._state)
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: v1(),
    //         message: this._state.messagesPage.newMessageText
    //     }
    //     this._state.messagesPage.messages.push(newMessage)
    //     this._callSubscriber(this._state)
    // },
    // changeNewMessage(newMessage: string) {
    //     this._state.messagesPage.newMessageText = newMessage
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    message: this._state.profilePage.newPostText,
                    likes: 0
                }
                this._state.profilePage.posts.push(newPost);
                this._callSubscriber(this._state)
                break
            case 'CHANGE-POST-TEXT':
                this._state.profilePage.newPostText = action.postText
                this._callSubscriber(this._state)
                break
            case 'ADD-MESSAGE':
                let newMessage = {
                    id: v1(),
                    message: this._state.messagesPage.newMessageText
                }
                this._state.messagesPage.messages.push(newMessage)
                this._callSubscriber(this._state)
                break
            case 'CHANGE-MESSAGE-TEXT':
                this._state.messagesPage.newMessageText = action.newMessage
                this._callSubscriber(this._state)
                break
        }
    }
}


