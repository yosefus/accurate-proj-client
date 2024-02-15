import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import Label from '../Label';
import InputText from '../InputText';
import InputArea from '../InputArea';
import Button from '../Button';
import { PopupContext } from '../../Context/Popup'
import apiReq from '../../functions/ApiReq';



export default function LeadForm({toget, campaign, isUpdate, originalLead ={}, closeDailog }) {
    

    const [lead, setlead] = useState({ Fname: originalLead.Fname || '', Lname: originalLead.Lname || '', email: originalLead.email || '', phone: originalLead.phone, notes: originalLead.notes || '' })

    console.log(lead);
    const handleSubmit =async (e) => {
        e.preventDefault()
        if (campaign._id) {
            let x= await apiReq({name:'post',path:`campaign/add-lead/${campaign._id}`,data:lead})
            // TODO clos dialog and togrt
            toget();
            closeDailog();
        console.log(x);}
    }

    const handleChange = e => setlead(old => ({ ...old, [e.target.name]: e.target.value }))


    return (

        <>
            <form onSubmit={handleSubmit} className={`${styles.lead}`}>
                <div >
                    <Label primaryText={"שם פרטי"} id='cc1122' required={true} />
                    <InputText type={'text'} name={'Fname'} onChange={handleChange} value={lead.Fname} />
                </div>
                <div>
                    <Label primaryText={"שם משפחה"} id='dd1122' required={true} />
                    <InputText type={'text'} name={'Lname'} onChange={handleChange} value={lead.Lname} />
                </div>
                <div>
                    <Label primaryText={"טלפון"} id='ee1122' required={true} />
                    <InputText type={'Number'} name={'phone'} onChange={handleChange} value={lead.phone} />
                </div>
                <div>
                    <Label primaryText={"אימייל"} id='ff1122' required={true} />
                    <InputText type={'text'} name={'email'} onChange={handleChange} value={lead.email} />
                </div>
                <div>
                    <Label primaryText={"הערות"} id='gg1122' />
                    <InputArea name={'notes'} onChange={handleChange} value={lead.notes} />
                </div>
                <div className={`${styles.btn}`} >
                    <Button text={'ביטול'} option={'2'} type='button' onClick={closeDailog}/>
                    <Button text={'שמירה'} option={'1'} type="submit" />
                </div>
            </form>
        </>
    )
}