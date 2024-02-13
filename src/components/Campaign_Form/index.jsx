import React, { useState } from 'react'
import styles from "./style.module.css"
import Button from '../Button';
import InputArea from '../InputArea';
import InputText from '../InputText';
import Label from '../Label';

export default function Campaign_Form() {
    const [formData, setFormData] = useState({ title: "", details: "" });
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
                <Label primaryText="שם רשימה" scontText="שם פנימי שלא יהיה חשוף למצטרפים לרשימה" htmlFor="title" required={true} >
                    <InputText type="text" name="title"
                        value={formData.title}
                        onChange={handleChange} />
                </Label>
            </div>
            <Label primaryText="תיאור" scontText="תיאור הקמפיין" htmlFor="details" required={false} >
                <InputArea name="details" id="details" value={formData.details}
                    onChange={handleChange} />
            </Label>
            <div className={styles.but}>
                <Button text="ביטול" onClick={() => { console.log("bla") }} type="button" option={2} />
                <Button text="שמירה" type="submit" option={1} />
            </div>
        </form>
    )
}


