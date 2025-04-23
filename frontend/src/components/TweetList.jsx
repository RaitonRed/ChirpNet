// src/components/TweetList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tweets/')
      .then(res => setTweets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">توییت‌ها</h1>
      {tweets.map(tweet => (
        <div key={tweet.id} className="bg-white shadow p-4 rounded-lg mb-4">
          <p className="text-gray-800">{tweet.content}</p>
          <p className="text-sm text-gray-500 mt-2">نویسنده: {tweet.user}</p>
        </div>
      ))}
    </div>
  );
};

export default TweetList;
