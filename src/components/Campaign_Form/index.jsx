import React, { useContext, useState } from 'react'
import styles from "./style.module.css"
import Button from '../Button';
import InputArea from '../InputArea';
import InputText from '../InputText';
import Label from '../Label';
import { PopupContext } from '../../Context/Popup';

export default function Campaign_Form({ campaign = {}, path }) {
    const { closeDailog } = useContext(PopupContext)
    const [formData, setFormData] = useState({ title: campaign.title || "", details: campaign.details || "" })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    };
    const handleChange = (e) => {
        const nwe = e.target.value;
        setFormData({ ...formData, [e.target.name]: nwe })
    };
    return (
        <form className={styles.all} onSubmit={handleSubmit}>
            <div className={styles.size}>
                <Label primaryText="שם רשימה" scontText="שם פנימי שלא יהיה חשוף למצטרפים לרשימה" htmlFor="title" required={true} />
                <InputText type="text" name="title" id="title"
                    value={formData.title}
                    onChange={handleChange} />
            </div>
            <div>
                <Label primaryText="תיאור" scontText="תיאור הקמפיין" htmlFor="details" required={false} />
                <InputArea name="details" id="details" value={formData.details} onChange={handleChange} />
            </div>
            <div className={styles.but}>
                <Button text="ביטול" onClick={() => { closeDailog() }} type="button" option={2} />
                <Button text="שמירה" type="submit" option={1} />
            </div>
        </form>
    )
}


