import React from 'react'
import styles from './style.module.css'

export default function Label ({primaryText, scontText, htmlFor, required}) {
  return (
   
    <label htmlFor={`${htmlFor}`}>
      <div>
        <span className={`${styles.txt1}`}> {primaryText} </span>
        <span className={`${styles.txt3}`}> {required ? '*' : ''}  </span>
        </div>
        <div className={`${styles.txt2}`}>{scontText}</div>
    </label>
  )
}
