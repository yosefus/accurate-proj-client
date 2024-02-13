import React from 'react'
import { useState } from 'react'
import style from './style.module.css'

export default function PopOver({ children, listLinks }) {
    const [visibility, setVisibility] = useState()
    return (

        <button onClick={() => setVisibility(visibility === "show" ? "hide" : "show")}>
            {children}
            <div className={`${style.content} ${visibility === "show" ? style.show : visibility === "hide" ? style.noShow : ""}`}>
                {visibility == null ? '' : ''}
            </div>
        </button>


    )
}
