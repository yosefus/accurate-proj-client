import React, { useState } from 'react'
import styles from "./style.module.css"
import Button from '../Button';
import InputArea from '../InputArea';
import InputText from '../InputText';

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
        <form onSubmit={handleSubmit}>
            <div className={styles.size}>
                <InputText type="text" name="title"
                    value={formData.title}
                    onChange={handleChange} />
            </div>
            <InputArea name="details" id="details" value={formData.details}
                onChange={handleChange} />
            <Button text={"שמירה"} type={"submit"} option={1} />
            <Button text={"ביטול"} onClick={() => { console.log("bla") }} type={"button"} option={2} />
        </form>
    )
}


