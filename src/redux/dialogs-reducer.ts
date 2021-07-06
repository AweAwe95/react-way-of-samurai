import {v1} from "uuid";

let initialState = {
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
}

export const dialogsReducer = (state = initialState,action: any) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            return state
        case 'CHANGE-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}