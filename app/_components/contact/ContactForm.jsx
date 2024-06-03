// pages/contact.jsx
"use client";
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add any additional form validation logic here
        document.forms['contact'].submit();
    };

    return (
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>
            <p>
                <label>Your Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
            </p>
            <p>
                <label>Message: <textarea name="message" value={formData.message} onChange={handleChange} required></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
};

export default ContactForm;
