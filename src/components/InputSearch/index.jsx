import React from 'react'
import styles from './style.module.css'

export default function InputSearch({onChange, type, ...props }) {
    
   
    return (
        <>
        <div className={`${styles.contaner}`}>
            <span className= {`${styles.icon}`}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2505 21.5L16.9005 17.15M19.2505 11.5C19.2505 15.9183 15.6688 19.5 11.2505 19.5C6.83221 19.5 3.25049 15.9183 3.25049 11.5C3.25049 7.08172 6.83221 3.5 11.2505 3.5C15.6688 3.5 19.2505 7.08172 19.2505 11.5Z" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <input  onChange={onChange} type={type} {...props} className={`${styles.input}`} />
            </div>
        </>
    )
}
