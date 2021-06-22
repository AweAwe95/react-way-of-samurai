import d from "../Dialogs.module.css";
import React from "react";

type MessageType = {
    message: string
}

export function Message(props: MessageType) {
    return (
        <div className={d.message}>{props.message}</div>
    )
}