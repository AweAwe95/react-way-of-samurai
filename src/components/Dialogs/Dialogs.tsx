import React from "react";
import d from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, DialogType, MessageType} from "../../redux/state";


type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

export function Dialogs(props: DialogsPageType) {

    const dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    const messagesElements = props.messages.map( m => <Message message={m.message}/>)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <input type="text" onChange={(e)=>props.dispatch({type:'CHANGE-MESSAGE-TEXT', newMessage: e.currentTarget.value})} value={props.newMessageText}/>
                <button onClick={()=>props.dispatch({type:'ADD-MESSAGE'})}>Отправить</button>
            </div>
        </div>
    )
}