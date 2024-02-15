import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <div>
            <div className='contact-text'>
                <p>Contact via contact form coming soon!</p>
                <p>For now please reach out via email or social media</p>
                <p>EMAIL: dakotablanchard2699@gmail.com</p>
                <p>⬇️ Social media links below ⬇️</p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleInputChange} value={formState.name} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleInputChange} value={formState.email} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" onChange={handleInputChange} value={formState.message} required />
                </label>
                <div className='submit-btn'>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;