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

    let dialogsData = [
        { id:'1', name: 'Vitali'},
        { id:'2', name: 'Denis'},
        { id:'3', name: 'Viktor'},
        { id:'4', name: 'Valera'}]

    let messagesData = [
        {id:'1', message: 'Hi'},
        {id:'2', message: 'How are you'},
        {id:'3', message: 'Really'},
        {id:'4', message: 'Bye'},
    ]

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={d.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    )
}