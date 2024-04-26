// DetailScreen.js
import React from 'react';

function DetailScreen({ article }) {
  if (!article) {
    return <div>Loading...</div>; // Add a loading message or handle the case where article is not available yet
  }

  return (
    <div className="DetailScreen">
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Published At: {article.publishedAt}</p>
      <p>Description: {article.description}</p>
      <p>Source: {article.source.name}</p>
      <img src={article.urlToImage} alt={article.title} style={{ width: '500px', height: '400px' }} />
      <p>Content: {article.content}</p>
      
    </div>
  );
}

export default DetailScreen;
