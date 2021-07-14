import React from "react";
import {connect} from "react-redux";

import {ActionsType, AddMessageAction, ChangeMessageTextAction, DialogType, MessageType} from "../../redux/store";
import {Dialogs} from "./Dialogs";


let mapStateToProps = (state: any) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText

    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onAddMessage: () => {
            dispatch(AddMessageAction())
        },
        onMessageChange: (newText: string) => {
            dispatch(ChangeMessageTextAction(newText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)