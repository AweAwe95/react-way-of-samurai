import React from "react";
import { NavLink } from "react-router-dom";
import d from './Dialogs.module.css'

type DialogType = {
    name: string
    id: string
}

function Dialog(props: DialogType) {
    return(
        <div className={d.dialogs}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

function Message(props:MessageType) {
    return(
        <div className={d.message}>{props.message}</div>
    )
}

export function Dialogs() {

    const dialogsData = [
        { id:'1', name: 'Vitali'},
        { id:'2', name: 'Denis'},
        { id:'3', name: 'Viktor'},
        { id:'4', name: 'Valera'}]

    const messagesData = [
        {id:'1', message: 'Hi'},
        {id:'2', message: 'How are you'},
        {id:'3', message: 'Really'},
        {id:'4', message: 'Bye'},
    ]

    const dialogsElements = dialogsData.map( d => <Dialog name={d.name} id={d.id}/> )
    const messagesElements = messagesData.map( m => <Message message={m.message}/>)

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