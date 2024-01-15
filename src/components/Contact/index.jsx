import React from 'react';
import { useState } from 'react';


function Contact() {
    const [form, setForm ] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const{ name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
        const errorsEl = validateField(name, value);
        setErrors({
            ...errors,
            [name]: errorsEl[name],
        });
        };
    const validateField = (name,value) => {
        const errorsEl = {...errors };
        switch (name) {
            case 'name':
                errorsEl.name = value.trim() === '' ? 'Required Field': '';
            case 'email':
                errorsEl.email = !isValidEmail(value) ? 'Invalid Email': '';
            case 'message':
                errorsEl.message =
                    value.trim() === '' ? 'Required Field': '';
            default:
        }
        return errorsEl;
    };
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div className='contact'>
            <form className='contact-form'>
                
                <h2>Contact Me</h2>
                <div className='form-container'>
                    <label>Name</label>
                    <input type='text' name='name' value={form.name} onChange={handleChange} required/>
                </div>
                <div className='form-container'>
                    <label>Email</label>
                    <input type='email' name='email' value={form.email} onChange={handleChange} required/>
                </div>
                <div className='form-container'>
                    <label>Message</label>
                    <textarea name='message' rows='4' value={form.message} onChange={handleChange} required/>
                </div>
                <button className='submit-btn' type='submit'>Submit</button>
                
            </form>
        </div>
    )
    
    }







export default Contact;
    