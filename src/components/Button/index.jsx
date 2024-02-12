import React from 'react'
import style from "./style.module.css"
export default function Button({text,onClick,type="button",option, ...props}) {
    const options = {
        1 : "importent",
        2 : "secondary"
    }
  return (
    <button onClick={onClick} type = {type} 
    className={`${style.buttons } ${(style[options[option]])}`} {...props}>{text}</button>
    )
}
