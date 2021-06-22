import React from "react";
import p from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://gamemag.ru/images/cache/Reviews/Reviews1726/92f0dfdd74-2_1390x600.jpg"
                     className={p.profilePageImg} alt=""/>
            </div>
            <div>Ava + description</div>
        </div>
    )
}