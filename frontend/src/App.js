import React from 'react';
import './App.css';

const tweets = [
  { id: 1, username: 'RaitonRed', content: 'سلام دنیا! این اولین توییته 🐥' },
  { id: 2, username: 'CodeMaster', content: 'هوای یادگیری برنامه‌نویسی دارید؟ بیاید توی ChirpNet!' },
];

function App() {
  return (
    <div className="app">
      <h1 className="title">توییت‌ها</h1>
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
