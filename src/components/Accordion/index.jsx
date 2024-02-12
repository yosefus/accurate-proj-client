import React, { useState } from 'react'
import styles from './styles.module.css'
export default function Accordion({ children, title }) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className={styles.title}>
                <p className={styles.title}>{title}</p>
                <img onClick={() => setShow(!show)} src="/iconWideing.svg" alt="" />
            </div>
            <div className={styles.content}>

                <div className={show ? styles.show : styles.noShow}>{children}</div>
            </div>
        </div>
    )
}
