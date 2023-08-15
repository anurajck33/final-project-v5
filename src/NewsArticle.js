import React, { useState } from 'react';
//import './NewsArticle.css';

function NewsArticle({ article }) {
  const [likes, setLikes] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="news-article">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <div className="article-actions">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={toggleComments}>
          {showComments ? 'Hide Comments' : 'View Comments'}
        </button>
        <button>Share</button>
      </div>
      {showComments && (
        <div className="comments-section">
          <h3>Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                {comment}
                <button onClick={() => handleDeleteComment(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <div className="add-comment">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsArticle;
