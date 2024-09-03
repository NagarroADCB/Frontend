import React, { useState } from 'react';
import './Chatbot.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setStep(1); // Move to step 1 when opening the chatbot
        }
    };

    return (
        <>
            {/* Step 0: The trigger button */}
            {!isOpen && (
                <div className="chatbot-trigger" onClick={toggleChatbot}>
                    <button className="open-chat-button">💬 Chat with us</button>
                </div>
            )}

            {/* Chatbot UI */}
            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <h2>How can we assist you today?</h2>
                        <button className="close-button" onClick={toggleChatbot}>✕</button>
                    </div>

                    <div className="chatbot-content">
                        {step === 1 && <Step1 handleNextStep={handleNextStep} />}
                        {step === 2 && (
                            <Step2
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleNextStep={handleNextStep}
                            />
                        )}
                        {step === 3 && <Step3 />}
                    </div>
                </div>
            )}
        </>
    );
}

export default Chatbot;
