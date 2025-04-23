import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tweets/')
      .then(res => setTweets(res.data))
      .catch(err => console.error('Error fetching tweets:', err));
  }, []);

  return ( <HomePage /> );
}


export default App;
