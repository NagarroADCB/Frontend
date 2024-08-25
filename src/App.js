import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [isEligible, setIsEligible] = useState(null);  // Store the eligibility status

  useEffect(() => {
    const checkEligibility = async () => {
      try {
        // Replace the URL with your actual endpoint
        const result = await axios.get('http://127.0.0.1:8000/eligibility-check');
        setIsEligible(result.data);  // Assuming the endpoint returns a boolean value
      } catch (error) {
        console.error('Error fetching data', error);
        setIsEligible(false);  // Assume false in case of an error
      }
    };

    checkEligibility();  // Call the function to check eligibility
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Abu Dhabi Commercial Bank Loan Eligibility</h1>
      </header>
      <main className="App-main">
        {isEligible === null ? (
          <div className="loading">
            <h2>Checking your eligibility...</h2>  {/* Show a loading message while waiting for the response */}
          </div>
        ) : isEligible ? (
          <div className="eligible">
            <h2>Congratulations!</h2>
            <p>You are eligible for an exclusive loan amount.</p>  {/* Show success message */}
            <button className="cta-button">Apply Now</button>  {/* Call-to-action button */}
          </div>
        ) : (
          <div className="not-eligible">
            <h2>We're Sorry</h2>
            <p>Unfortunately, you are not eligible for a loan at this time.</p>  {/* Show disappointment message */}
            <button className="cta-button secondary">Explore Other Products</button>  {/* Suggest alternative */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
