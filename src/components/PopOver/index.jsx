import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'

export default function PopOver({ children, listLinks }) {
    const [visibility, setVisibility] = useState()
    const [indexOpen, setIndexOpen] = useState({})
    const handleClick = function (e) {
        setVisibility(visibility === "show" ? "hide" : "show")

        const styles = {}
        if (window.innerHeight - e.clientY > 400) {
            styles["top"] = 20
        }
        else { styles["bottom"] = 20 }
        if (window.innerWidth - e.clientX > 400) {
            styles['left'] = 0
        }
        else {
            styles['right'] = 0
        }
        styles["height"] = listLinks.length * 50
        setIndexOpen(styles)
    }


    return (
        <span className={style.btn}>
            <button onClick={(e) => handleClick(e)}>
                {children}
            </button>
            <div style={indexOpen} className={`${style.content} ${visibility === "show" ? style.show : visibility === "hide" ? style.noShow : ""}`}>
                {visibility == null ? '' : listLinks.map(i => {
                    return (
                        i.href ?
                            <Link to={i.href} key={i.name}>{i.icon} <span>{i.name}</span>  </Link>
                            :
                            <button onClick={i.onClick} key={i.name}>
                                {i.icon}
                                <span>{i.name}</span>
                            </button>
                    )
                })}
            </div>
        </span>


    )
}
