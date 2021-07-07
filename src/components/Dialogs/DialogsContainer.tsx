import React from "react";
import d from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, AddMessageAction, ChangeMessageTextAction, DialogType, MessageType} from "../../redux/store";
import {Dialogs} from "./Dialogs";


type DialogsContainerPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

export function DialogsContainer(props: DialogsContainerPageType) {
    const onAddMessage = () => {
        props.dispatch(AddMessageAction())
    }
    const onMessageChange = (newText: string) => {
        props.dispatch(ChangeMessageTextAction(newText))
    }
    return (
       <Dialogs dialogs={props.dialogs}
                messages={props.messages}
                newMessageText={props.newMessageText}
                onAddMessage={onAddMessage}
                onMessageChange={onMessageChange}/>
    )
}