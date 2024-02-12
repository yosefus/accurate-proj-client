import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

export default function MenuItem({ txt, icon="", href }) {
    return <NavLink to={href}  className={styles.MenuItem}><span className={styles.icon}>{icon}</span><span>{txt}</span></NavLink>
}
