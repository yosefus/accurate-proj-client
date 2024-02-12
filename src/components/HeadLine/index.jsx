import React from 'react'
import styles from './style.module.css'

export default function HeadLine({ primaryText, scontText, icone }) {
    // primaryText = name of message, scontText = date of message, icon = icon of edditing message
    // the data shuold bo arrive from createContext 

    return (
        <>
            <div className={`${styles.contaner}`}>
                <div className={`${styles.lines}`} >
                    <div className={`${styles.primaryText}`}>{primaryText}</div>
                    {/* <div className={`${styles.scontText}`}>{scontText}</div> */}
                    <p className={`${styles.scontText}`}> {scontText} </p>
                </div>
                <div>{icone}</div>
            </div>
        </>
    )
}
