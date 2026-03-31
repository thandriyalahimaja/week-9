// CommentSection.jsx
import React, { useState } from 'react';

const CommentSection = ({ articleId }) => {
  const [comment, setComment] = useState("");

  return (
    <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <h3>Comments</h3>
      
      {/* Input Area */}
      <div style={{ marginBottom: '20px' }}>
        <textarea 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', marginTop: '10px', cursor: 'pointer' }}
        >
          Post Comment
        </button>
      </div>

      {/* List of Comments (Mockup) */}
      <div className="comment-list">
        {/* You will map through your comments here */}
        <div style={{ padding: '10px 0', borderBottom: '1px solid #f9f9f9' }}>
          <strong>User Name</strong> <small>26 Mar 2026</small>
          <p>This is a sample comment!</p>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;