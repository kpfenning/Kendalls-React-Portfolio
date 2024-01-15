import React from 'react';
import { useState } from 'react';


function Contact() {
    const [form, setForm ] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
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

        const handleBlur = (e) => {
        const { name, value } = e.target;
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.values(errors).every((error) => error === '')) {
            console.log("Form submitted", form);
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <div className='contact'>
            <form className='contact-form' onSubmit={handleSubmit}>
                
                <h2>Contact Me</h2>
                <div className='form-container'>
                    <label>Name</label>
                    <input type='text' name='name' value={form.name} onChange={handleChange} onBlur={handleBlur} required/>
                    {errors.name && <span className='error'>{errors.name}</span>}
                </div>
                <div className='form-container'>
                    <label>Email</label>
                    <input type='email' name='email' value={form.email} onChange={handleChange} onBlur={handleBlur} required/>
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>
                <div className='form-container'>
                    <label>Message</label>
                    <textarea name='message' rows='4' value={form.message} onChange={handleChange} onBlur={handleBlur} required/>
                    {errors.message && <span className='error'>{errors.message}</span>}
                </div>
                <button className='submit-btn' type='submit'>Submit</button>
                
            </form>
        </div>
    )
    
    }







export default Contact;
    