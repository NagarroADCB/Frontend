import React from 'react';
import './App.css';
import Chatbot from './Chatbot'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Abu Dhabi Commercial Bank</h1>
      </header>

      <main className="App-main">
        {/* Your existing eligibility check code here */}
        <h1>Don’t prefer to call? Let's chat.</h1>
        <Chatbot /> {/* Add the Chatbot component here */}
      </main>
    </div>
  );
}

export default App;
