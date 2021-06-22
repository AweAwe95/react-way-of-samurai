import React from "react";
import d from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataTypes} from "../../App";


export function Dialogs(props: DialogsDataTypes) {

    const dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> )
    const messagesElements = props.messagesData.map( m => <Message message={m.message}/>)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    )
}