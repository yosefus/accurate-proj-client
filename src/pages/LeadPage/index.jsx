import React, { useContext } from 'react'
import styles from "./style.module.css"
import { useParams } from 'react-router-dom'

export default function LeadPage() {
    // const { param } = useParams();
    // const value = useContext(MyContext);
    // const lid = value.find(value=>)
    const data = new Date().toLocaleDateString('he-IL')
    const lid = {
        first_name: "fgh",
        last_name: "gfkfdjk",
        phon_number: "gfdisl",
        email: "fdjksfhdjsk",
        remarks: "fhdsjkal",
        Join_Date: data
    }
    return (
        <div className={styles.all}>
            <div className={styles.big}>{lid.first_name}</div>
            <div className={styles.cub}>
                <div className={styles.container}>
                    <div className={styles.item}>שם פרטי<p className={styles.big}>{lid.first_name}</p></div>
                    <div className={styles.item}>שם משפחה<p className={styles.big}>{lid.last_name}</p></div>
                    <div className={styles.item}>טלפון<p className={styles.big}>{lid.phon_number}</p></div>
                    <div className={styles.item}>אימייל<p className={styles.big}>{lid.email}</p></div>
                </div>
                <div>
                    <div className={styles.item}>הערות<p className={styles.big}>{lid.remarks}</p></div>
                </div>
                <div>
                    <div className={`${styles.gray} ${styles.date}`}>תאריך הצטרפות : {lid.Join_Date.toString()}</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>הודעות שנשלחו</p>
            </div>
        </div>
    )
}
