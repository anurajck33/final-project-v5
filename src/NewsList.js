import React from 'react';
import { Link } from 'react-router-dom';

function NewsList({ news }) {
    return (
      <ul className="news-list">
        {news.map((article, index) => (
          <li key={index}>
            <Link to={`/article/${index}`}>
              <img src={article.urlToImage} alt={article.title} />
              <div>{article.title}</div>
            </Link>
            <div className="like-comment-section">
              <button>Like</button>
              <button>Comment</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  export default NewsList; 