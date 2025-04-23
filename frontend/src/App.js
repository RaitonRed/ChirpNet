import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tweets/')
      .then(res => setTweets(res.data))
      .catch(err => console.error('Error fetching tweets:', err));
  }, []);

  return (
    <div className="app">
      <h1 className="title">Tweets</h1>
      <div className="tweet-list">
        {tweets.map(tweet => (
          <div className="tweet" key={tweet.id}>
            <strong>@{tweet.username}</strong>
            <p>{tweet.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
