import React from "react";
import d from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog}>Vitali</div>
                <div className={d.dialog}>Denis</div>
                <div className={d.dialog}>Artem</div>
                <div className={d.dialog}>Gena</div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>Hi</div>
                <div className={d.message}>How are you?</div>
                <div className={d.message}>Really?</div>
                <div className={d.message}>Bye</div>
            </div>
        </div>
    )
}