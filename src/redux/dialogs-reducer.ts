import {v1} from "uuid";

export const dialogsReducer = (state: any,action: any) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            break
        case 'CHANGE-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            break
    }
    return state
}