import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogType = {
    name: string
    id: string
}

export function DialogItem(props: DialogType) {
    return (
        <div className={d.dialogs}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}