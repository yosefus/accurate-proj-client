import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.css'

export default function LeadItem({ to, name, date, email }) {
    return (
        <>
          <NavLink className={({isActive}) =>
           `${styles.container} ${isActive? styles.active : ''}`
}
             to={`${to}`}>
                <div className={`${styles.icon}`}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5791 20C5.91489 17.5226 9.08612 16 12.5791 16C16.0721 16 19.2433 17.5226 21.5791 20M17.0791 7.5C17.0791 9.98528 15.0644 12 12.5791 12C10.0938 12 8.0791 9.98528 8.0791 7.5C8.0791 5.01472 10.0938 3 12.5791 3C15.0644 3 17.0791 5.01472 17.0791 7.5Z" stroke="#6B6B6B" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg >
                </div>
                <div className={`${styles.desc}`}>
                    <div className={`${styles.name}`}>{name}</div>
                    <div className={`${styles.date}`}>
                        <div>{date}</div>
                        <div>{email}</div>
                    </div>
                </div>

            </NavLink>
        </>
    )
}
