import React from 'react';

function Step1({ handleNextStep }) {
    return (
        <div className="step-1">
            <button className="adcb-button" onClick={handleNextStep}>
                I am an ADCB customer
            </button>
            <button className="not-adcb-button" onClick={handleNextStep}>
                I'm not an ADCB customer
            </button>
        </div>
    );
}

export default Step1;
