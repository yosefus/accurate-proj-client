import React, { useState } from 'react'
import styles from './styles.module.css'
export default function Accordion({ children, title }) {
    const [visibility, setVisibility] = useState()
    return (
        <div className={styles.allComponnt}>
            <div className={styles.divTitle}>
                <p className={styles.title}>{title}</p>
                <div onClick={() => setVisibility(visibility === "show" ? "hide" : "show")} className={styles.expendButton}>
                    <span>להציג הכל</span>
                    <img className={`${styles.imgArrow} ${visibility === "show" ? styles.rotatedArrow : ""}`} src="/iconWideing.svg" alt="" />
                </div>
            </div>
            <div className={`${styles.content} ${visibility === "show" ? styles.show : visibility === "hide" ? styles.noShow : ""}`}>
                {children}
            </div>
        </div>
    )
}
