import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
// children = to the icon you want to be seen outside the component
// listLinks = array of objects like {name,onClick or href, icon,color}
// href = Link to which you want to send
//onClick = A function you want to happen when clicked exmple () => console.log('onclick is work')
// if you want color to link or button give just color green or red 
export default function PopOver({ children, listLinks }) {

    const [visibility, setVisibility] = useState()
    const [indexOpen, setIndexOpen] = useState({})
    const handleClick = function (e) {
        setVisibility(visibility === "show" ? "hide" : "show")
        const height = ` ${listLinks.length * 40 + 15}`
        const styles = {}
        if (window.innerHeight - e.clientY > height) {
            styles["top"] = 43
        }
        else { styles["bottom"] = 45 }
        if (window.innerWidth - e.clientX > 220) {
            styles['left'] = -30
        }
        else {
            styles['right'] = 0
        }

        styles["height"] = height
        setIndexOpen(styles)
    }


    return (
        <>
            {visibility === "show" && <div onClick={() => setVisibility("hide")} className={style.layout} />}
            <span className={style.iconmain}>
                <button onClick={(e) => handleClick(e)} className={style.btnChild} >
                    {children}
                </button>
                <div style={indexOpen} className={` ${visibility === "show" ? style.show : visibility === "hide" ? style.noShow : ""}`}>
                    {visibility == null ? '' : listLinks.map(i => {
                        return (
                            <div key={i.name} className={`${style.content} ${style[i.color]}`}>

                                {i.href ?
                                    <Link className={`${style[i.color]} ${style.onelink}`} to={i.href} >{i.icon} <span>{i.name}</span>  </Link>
                                    :
                                    <button className={`${style[i.color]} ${style.onelink} `} onClick={i.onClick} >
                                        {i.icon}
                                        <span>{i.name}</span>
                                    </button>
                                }
                            </div>
                        )
                    })}
                </div>
            </span>
        </>


    )
}
