import React from 'react'
import styles from './style.module.css'

export default function InputText({type, ...props}) {
  return (  
    <input type={type} {...props} className={`${styles.input}`} />
  )
}
