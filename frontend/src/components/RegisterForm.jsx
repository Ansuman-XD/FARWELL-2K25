import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; 

function RegisterForm() {
    const [formData, setFormData] = useState({ name: '', rollNo: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/register', formData);
            alert('🎉 Registered successfully!');
            setFormData({ name: '', rollNo: '' });
        } catch (err) {
            alert('⚠️ Registration failed. Try again!');
        }
    };

    return (
        <div className="register-container">
            {/* Replace 'your-logo.png' with the actual path to your logo */}
            <img src="\usbm.png" alt="Company Logo" className="logo" />
            <h1 className="form-title">REGISTER HERE FOR <br></br>ENTRY!</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g., John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="rollNo">Roll Number</label>
                    <input
                        type="text"
                        id="rollNo"
                        name="rollNo"
                        placeholder="e.g., 2024CS001"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    🚀 Register Now
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;