import React from 'react';

function Step3() {
    return (
        <div className="step-3">
            <div className="chat-box">
                <div className="chat-message bot">
                    Welcome to ADCB Online Chat
                </div>
                <div className="chat-message bot">
                    We are facing temporary network problems. Attempting to reconnect. Please wait.
                </div>
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type your message here..." />
                <button className="send-button">➤</button>
            </div>
            <div className="chat-footer">
                <div>
                    <button className="clear-button">Clear</button>
                    <button className="refresh-button">Refresh</button>
                </div>
            </div>
        </div>
    );
}

export default Step3;
