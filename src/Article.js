import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsArticle from './NewsArticle';
import Comments from './Comments'; 

function Article() {
  const { id } = useParams();

  
  const news = []; 
  const article = news[id] || {};

  return (
    <div className="article">
      <NewsArticle article={article} />
      <Comments /> {/* ............. */}
    </div>
  );
}

export default Article;
