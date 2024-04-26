// src/HeadlineItem.js
import React from 'react';

function formatDate(dateString) {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function HeadlineItem({ title, source, author, date, description, urlToArticle, thumbnail }) {
  const formattedDate = formatDate(date);

  return (
    <div className="HeadlineItem">
      <h2>{title}</h2>
      <p>By {author} - {source}</p>
      <p>{formattedDate}</p>
      <div className="row">
        <div className="column">  
            <img src={thumbnail} alt="Thumbnail" />
        </div>
        <div className="column">
          <p style={{ textAlign: 'justify' }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HeadlineItem;
