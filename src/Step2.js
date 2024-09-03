import React from 'react';

function Step2({ formData, handleInputChange, handleNextStep }) {
    return (
        <div className="step-2">
            <p>Please fill in the form and our representatives will attend to you shortly.</p>
            <form>
                <label>
                    First Name*
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Last Name*
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email*
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Phone Number*
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Subject*
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                    >
                        <option value="">Select type</option>
                        <option value="loan">Loan Inquiry</option>
                        <option value="account">Account Inquiry</option>
                    </select>
                </label>
                <button
                    type="button"
                    className="start-chat-button"
                    onClick={handleNextStep}
                >
                    Start chatting
                </button>
            </form>
        </div>
    );
}

export default Step2;
