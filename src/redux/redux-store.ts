import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let mainReducer = combineReducers({
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
    }
)

export type AppStoreType = typeof store;
export type AppStateType = ReturnType<typeof mainReducer>


export let store = createStore(mainReducer)