import React from "react";
import d from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}

type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    onAddMessage: () => void
    onMessageChange: (newText: string) => void
}

export function Dialogs(props: DialogsPageType) {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange}
                       value={props.newMessageText}/>
                <button onClick={props.onAddMessage}>Отправить</button>
            </div>
        </div>
    )
}