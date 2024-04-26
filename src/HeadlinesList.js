// src/HeadlinesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import HeadlineItem from './HeadlineItem';

function HeadlinesList({ setSelectedArticle }) {
  const [headlines, setHeadlines] = useState([]);
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  useEffect(() => {
    // Fetch headlines from NewsAPI and set them in the state
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=fc53d7822874406f989dea7b7b5eee30'
      )
      .then((response) => {
        setHeadlines(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching headlines:', error);
      });
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article); // Set the selected article
    navigate('/detail'); // Navigate to the detail screen
  };

  return (
    <div className="HeadlinesList">
      {headlines.map((headline, index) => (
        <div key={index} onClick={() => handleArticleClick(headline)}>
          <HeadlineItem
            title={headline.title}
            source={headline.source.name}
            author={headline.author}
            date={headline.publishedAt}
            description={headline.description}
            thumbnail={headline.urlToImage}
          />
        </div>
      ))}
    </div>
  );
}

export default HeadlinesList;
