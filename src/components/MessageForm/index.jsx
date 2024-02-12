import React, { useState } from 'react'
import styles from './style.module.css'
import HeadLine from '../HeadLine'
import InputText from '../InputText'
import InputArea from '../InputArea'
import Button from '../Button'

export default function MessageForm({ isUpdate ,msg={}  }) {

const [massage, setMassage] = useState({subject: msg.subject|| '', content: msg.content || ''})

console.log(massage);
const handleSubmit = (e) => {
    e.preventDefault()
}

const handleChange = e => setMassage(old => ({...old, [e.target.name]: e.target.value}))


    return (

        <>
            <form onSubmit={handleSubmit} className={`${styles.massage}`}>
                <HeadLine primaryText={"שם ההודעה"} scontText={'שם פנימי שיהיה חשוף רק לך'} />
                <InputText type={'text'} name={'subject'} onChange={handleChange} value={massage.subject }/>
                <HeadLine primaryText={"הודעה"} scontText={'זוהי ההודעה שתשלח בתזמון הנבחר'} />
                <InputArea name={'content'} onChange={handleChange} value={massage.content} />
                <div className={`${styles.btn}`} >
                    <Button text={'ביטול'} option={'2'} type='button' />
                    <Button text={'שמירה'} option={'1'} type="submit"/>
                </div>
            </form>
        </>
    )
}
