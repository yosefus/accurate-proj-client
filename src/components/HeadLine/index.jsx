import React from 'react'
import styles from './style.module.css'

export default function HeadLine({ primaryText, scontText }) {
    // primaryText = name of message, scontText = date of message, icon = icon of edditing message
    // the data shuold bo arrive from createContext 

    return (
        <>
            <div className={`${styles.contaner}`}>
                <div className={`${styles.lines}`} >
                    <div className={`${styles.primaryText}`}>{primaryText}</div>
                    {/* <div className={`${styles.scontText}`}>{scontText}</div> */}
                    <p className={`${styles.scontText}`}>  נוצר ב {`${scontText.getDate()}/${scontText.getMonth() + 1}/${scontText.getFullYear()} ${scontText.getHours()}:${scontText.getMinutes() < 10 ? '0' + scontText.getMinutes() : scontText.getMinutes()}`}  </p>
                </div>
                <img src="/iconEditingMsg.svg" alt="editing" />
            </div>
        </>
    )
}
