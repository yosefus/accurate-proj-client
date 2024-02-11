import React from 'react'
import style from "./style.module.css"
export default function Button({text, indexImportent,btn}) {
  return (
    <button className={`${style.buttons } ${(indexImportent?btn:indexImportent)}`}>{text}</button>
  )
}
