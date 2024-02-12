import React from 'react'
import HeadLine from '../../components/HeadLine'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
export default function MessagePage({ list }) {
    // msgId should be arrive from useParams
    const msgId = 1234
    const Msg = list.find(i => i.id == msgId)
    const nameTitleMsg = Msg.name
    const dateTitleMsg = Msg.date

    return (
        <div className={style.divMain}>
            <div className={style.centerDiv}>

                <div className={style.title}>

                    <HeadLine primaryText={nameTitleMsg} scontText={dateTitleMsg} />
                </div>
                <div className={style.contentDiv}>

                    <p className={style.contentMsg}>סתכל על עצמך רגע! אתה בטוח שזה לא יכול להראות טוב יותר? שאתה לא יכול להרגיש טוב יותר? זה זמן לשינוי. מועדון הכושר שלנו מציע תוכניות מותאמות אישית לכל רמת כושר ומטרה. אנחנו מאמינים שכולם יכולים להגיע לחזונותיהם, ואנחנו כאן להכווין אותך כל הדרך. אם אתה מחפש להשיג גוף חזק יותר, להרגיש בריא יותר, להגביר את מסת השריר, או אפילו פשוט לשפר את מצב הרוח - יש לנו את מה שאתה צריך.</p>
                </div>
            </div>

        </div>
    )
}
