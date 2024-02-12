import React, { useState } from 'react'
import styles from './style.module.css'
import HeadLine from '../HeadLine'
import InputText from '../InputText'
import InputArea from '../InputArea'
import Button from '../Button'

export default function MessageForm({ isUpdate }) {

const [massage, setMassage] = useState({nameMsg: '', descMsg: ''})

const handleSubmit = () => {
    e.preventDefult()
}

const handleChange = e => setMassage(old => ({...old, [e.target.name]: e.target.value}))


    return (

        <>
            <form onSubmit={handleSubmit} className={`${styles.massage}`}>
                <HeadLine primaryText={"שם ההודעה"} scontText={'שם פנימי שיהיה חשוף רק לך'} />
                <InputText type={'stirng'} name={'nameMsg'} onchange={handleChange}/>
                <HeadLine primaryText={"הודעה"} scontText={'זוהי ההודעה שתשלח בתזמון הנבחר'} />
                <InputArea />
                <div className={`${styles.btn}`} >
                    <Button text={'ביטול'} option={'2'} />
                    <Button text={'שמירה'} option={'1'} />
                </div>
            </form>
        </>
    )
}
