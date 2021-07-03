import {v1} from "uuid";

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

export let store ={
    _state:{
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
    getState(){
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log("state changed")
    },
    addPost(postMessage: string) {
        let newPost = {
            message: postMessage,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state)
    },
    changeNewText(postText: string){
        this._state.profilePage.newPostText = postText
        this._callSubscriber(this._state)
    },
    changeNewMessage(newMessage: string){
        this._state.messagesPage.newMessageText = newMessage
        this._callSubscriber(this._state)
    },
    addMessage(message: string){
        let newMessage = {
            id: v1(),
            message: message
        }
        this._state.messagesPage.messages.push(newMessage)
        this._callSubscriber(this._state)
    },
    subscribe(observer: any){
        this._callSubscriber = observer
    }
}


