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
            let stateCopy ={...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)

            return stateCopy
        case 'CHANGE-MESSAGE-TEXT':
            let stateCopy2 ={...state}
            stateCopy2.newMessageText = action.newMessage

            return stateCopy2
        default:
            return state
    }
}