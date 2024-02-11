import React from 'react'
import styles from './style.module.css'

export default function InputArea({...props}) {
  return (
    <textarea className={`${styles.input}`} {...props}> </textarea>
  )
}
