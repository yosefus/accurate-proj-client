import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
// children = to the icon you want to be seen outside the component
// listLinks = array of objects like {name,onClick or href, icon,color}
// href = Link to which you want to send
//onClick = A function you want to happen when clicked exmple () => console.log('onclick is work')
// if you want color to link or button give color 
export default function PopOver({ children, listLinks }) {

    const [visibility, setVisibility] = useState()
    const [indexOpen, setIndexOpen] = useState({})
    const handleClick = function (e) {
        setVisibility(visibility === "show" ? "hide" : "show")

        const styles = {}
        if (window.innerHeight - e.clientY > 400) {
            styles["top"] = 30
        }
        else { styles["bottom"] = 20 }
        if (window.innerWidth - e.clientX > 220) {
            styles['left'] = 0
        }
        else {
            styles['right'] = 0
        }
        const height = ` ${listLinks.length * 40 + 15}px`

        styles["height"] = height
        setIndexOpen(styles)
    }


    return (
        <span className={style.iconmain}>
            <button className={style.btnChild} onClick={(e) => handleClick(e)}>
                {children}
            </button>
            <div style={indexOpen} className={` ${visibility === "show" ? style.show : visibility === "hide" ? style.noShow : ""}`}>
                {visibility == null ? '' : listLinks.map(i => {
                    return (
                        <div key={i.name} className={style.content}>

                            {i.href ?
                                <Link style={{ "color": i.color }} className={style.onelink} to={i.href} >{i.icon} <span>{i.name}</span>  </Link>
                                :
                                <button style={{ "color": i.color }} className={style.onelink} onClick={i.onClick} >
                                    {i.icon}
                                    <span>{i.name}</span>
                                </button>
                            }
                        </div>
                    )
                })}
            </div>
        </span>


    )
}
