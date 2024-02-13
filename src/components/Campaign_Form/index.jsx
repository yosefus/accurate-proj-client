import React, { useState } from 'react'
import styles from "./style.module.css"

export default function Campaign_Form() {
    const [formData, setFormData] = useState({ title: "", details: "" });
    const handleSubmit = (e) => { e.preventDefault() };
    const handleChange = (e) => {
        const nwe = e.target.value;
        setFormData({ ...formData, [e.target.name]: nwe })
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title"
                value={formData.title}
                onChange={handleChange} />
            <textarea name="details" id="details" cols="30" rows="10" value={formData.details}
                onChange={handleChange}></textarea>
        </form>
    )
}


