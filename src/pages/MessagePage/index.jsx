import React from 'react'
import HeadLine from '../../components/HeadLine'
import { useParams } from 'react-router-dom'
import style from './style.module.css'
export default function MessagePage() {
    // this function shoul get all messages of current campaign
    // msgId should be arrive from useParams
    const list = [{ name: 'first message', date: new Date(), id: '1234', content: 'סתכל על עצמך רגע! אתה בטוח שזה לא יכול להראות טוב יותר? שאתה לא יכול להרגיש טוב יותר? זה זמן לשינוי. מועדון הכושר שלנו מציע תוכניות מותאמות אישית לכל רמת כושר ומטרה. אנחנו מאמינים שכולם יכולים להגיע לחזונותיהם, ואנחנו כאן להכווין אותך כל הדרך. אם אתה מחפש להשיג גוף חזק יותר, להרגיש בריא יותר, להגביר את מסת השריר, או אפילו פשוט לשפר את מצב הרוח - יש לנו את מה שאתה צריך.' }, { name: 'first message', id: '1234', date: new Date(), content: 'סתכל על עצמך רגע! אתה בטוח שזה לא יכול להראות טוב יותר? שאתה לא יכול להרגיש טוב יותר? זה זמן לשינוי. מועדון הכושר שלנו מציע תוכניות מותאמות אישית לכל רמת כושר ומטרה. אנחנו מאמינים שכולם יכולים להגיע לחזונותיהם, ואנחנו כאן להכווין אותך כל הדרך. אם אתה מחפש להשיג גוף חזק יותר, להרגיש בריא יותר, להגביר את מסת השריר, או אפילו פשוט לשפר את מצב הרוח - יש לנו את מה שאתה צריך.' }]
    const msgId = 1234
    const Msg = list.find(i => i.id == msgId)
    const nameTitleMsg = Msg.name
    const dateTitleMsg = Msg.date
    const icone = <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2505 17L18.2504 18.094C17.7199 18.6741 17.0006 19 16.2506 19C15.5006 19 14.7813 18.6741 14.2509 18.094C13.7197 17.5151 13.0005 17.1901 12.2507 17.1901C11.5009 17.1901 10.7816 17.5151 10.2505 18.094M1.25049 19H2.92503C3.41421 19 3.6588 19 3.88898 18.9447C4.09305 18.8957 4.28814 18.8149 4.46708 18.7053C4.66892 18.5816 4.84187 18.4086 5.18777 18.0627L17.7505 5.49998C18.5789 4.67156 18.5789 3.32841 17.7505 2.49998C16.9221 1.67156 15.5789 1.67156 14.7505 2.49998L2.18775 15.0627C1.84184 15.4086 1.66889 15.5816 1.54521 15.7834C1.43555 15.9624 1.35474 16.1574 1.30575 16.3615C1.25049 16.5917 1.25049 16.8363 1.25049 17.3255V19Z" stroke="#6B6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    return (
        <div className={style.divMain}>
            <div className={style.centerDiv}>

                <div className={style.title}>

                    <HeadLine primaryText={nameTitleMsg} scontText={dateTitleMsg} icone={icone} />
                </div>
                <div className={style.contentDiv}>

                    <p className={style.contentMsg}>{Msg.content}</p>
                </div>
            </div>

        </div>
    )
}
