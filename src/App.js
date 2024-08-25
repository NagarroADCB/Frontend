import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState(null);  // Use null initially since it's a single object, not an array

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(`http://127.0.0.1:8000/`);
        setResponse(result.data);  // Set the response data to state
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    getData();  // Call the function to fetch data
  }, []);

  return (
    <div className="App">
      <h1>Response from API:</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>  {/* Display the response in a formatted JSON format */}
    </div>
  );
}

export default App;
