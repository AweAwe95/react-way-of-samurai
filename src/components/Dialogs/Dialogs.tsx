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
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <Dialog name={'Vitali'} id={'1'}/>
                <Dialog name={'Denis'} id={'2'}/>
                <Dialog name={'Viktor'} id={'3'}/>
                <Dialog name={'Valera'} id={'4'}/>
            </div>
            <div className={d.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'Really'}/>
                <Message message={'Bye'}/>
            </div>
        </div>
    )
}