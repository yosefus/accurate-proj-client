import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./style.module.css"

export default function CampaignItem({ txt, id }) {
    return (
        <NavLink to={`/campaign/${id}`} className={({ isActive }) => `${styles.CampaignItem} ${isActive ? styles.active : ""}`}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2505 13V7.3C20.2505 5.61984 20.2505 4.77976 19.9235 4.13803C19.6359 3.57354 19.1769 3.1146 18.6125 2.82698C17.9707 2.5 17.1306 2.5 15.4505 2.5H9.05049C7.37033 2.5 6.53025 2.5 5.88852 2.82698C5.32403 3.1146 4.86509 3.57354 4.57747 4.13803C4.25049 4.77976 4.25049 5.61984 4.25049 7.3V17.7C4.25049 19.3802 4.25049 20.2202 4.57747 20.862C4.86509 21.4265 5.32403 21.8854 5.88852 22.173C6.53025 22.5 7.37031 22.5 9.05042 22.5H12.2505M14.7505 19.5L16.7505 21.5L21.2505 17" stroke="#6B6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>
                {txt}
            </p>
        </NavLink>
    )
}
