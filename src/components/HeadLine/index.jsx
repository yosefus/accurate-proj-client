import React from 'react'
import styles from './style.module.css'

export default function HeadLine({primaryText, scontText, icone}) {

    return (
        <>
            <div className={`${styles.contaner}`}>
                <div className={`${styles.lines}`} >
                    <div className={`${styles.primaryText}`}>{primaryText}</div>
                    <div className={`${styles.scontText}`}>{scontText}</div>
                </div>
                <div>{icone}</div>
            </div>
        </>
    )
}
