import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import styles from './styles.module.css'
export default function ListMessage({ listMessage }) {
    // listMessage should get array of objs with all information about messeages 
    const { id } = useParams()


    return (
        <>
            {listMessage.map(i => {
                return (
                    <NavLink to={`/campaign/${id}/messages/${i.id}`} key={i.id}>

                        <div className={styles.listMessage}>

                            <p className={styles.icon}><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2505 7.5H10.2505M14.2505 11H7.25049M10.2505 19C5.27993 19 1.25049 14.9706 1.25049 10C1.25049 5.02944 5.27993 1 10.2505 1C15.2211 1 19.2505 5.02944 19.2505 10C19.2505 11.1971 19.0168 12.3397 18.5924 13.3845C18.5112 13.5845 18.4706 13.6845 18.4525 13.7653C18.4348 13.8443 18.4283 13.9028 18.4283 13.9839C18.4283 14.0667 18.4433 14.1569 18.4734 14.3374L19.0664 17.8952C19.1285 18.2678 19.1595 18.4541 19.1017 18.5888C19.0512 18.7067 18.9572 18.8007 18.8393 18.8512C18.7046 18.909 18.5183 18.878 18.1457 18.8159L14.5878 18.2229C14.4074 18.1928 14.3172 18.1778 14.2344 18.1778C14.1533 18.1778 14.0948 18.1843 14.0158 18.202C13.9349 18.2201 13.835 18.2607 13.635 18.3419C12.5902 18.7663 11.4476 19 10.2505 19Z" stroke="#0E9D85" />
                            </svg>
                            </p>
                            <div>
                                <p className={styles.name}>הודעה ראשונה - הרשמה נפתחה</p>

                                <p className={styles.date}>  {`${i.date.getDate()}/${i.date.getMonth() + 1}/${i.date.getFullYear()} ${i.date.getHours()}:${i.date.getMinutes() < 10 ? '0' + i.date.getMinutes() : i.date.getMinutes()}`}  </p>
                            </div>
                        </div>
                    </NavLink>)
            })
            }
        </>
    )
}
