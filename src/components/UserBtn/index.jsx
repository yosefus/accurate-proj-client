import React from 'react'
import styles from "./style.module.css"
import PopOver from '../PopOver'
import { Navigate } from 'react-router-dom'

export default function UserBtn() {
    const user = "אבי דויטש"
    const img = <img src="Frame 1628.svg" alt="imag" />
    const goOut = [{
        icon: <img src="signOut.svg" alt="icon" />,
        name: "התנתק",
        // onClick: ()=> Navigate
    }]
    return (
        <div className={styles.temp}>
            <div className={styles.layout}>
                <div className={styles.inside}>
                    <div>{img}</div>
                    <div>{user}</div>
                    <div><PopOver children={<img src="Icon.svg" alt="icon" />} listLinks={goOut} /></div>
                </div>
            </div>
        </div>
    )

}
