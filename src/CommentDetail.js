import React from 'react';

const CommentDetail = () => {
  return(
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={""}/>
      </a>
      <div className="content">
        <div className="meta-data">
          <a href="/" className="author">
            Sam
          </a>
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">
          Nice blog post!
        </div>
      </div>
    </div>
  )
}

export default CommentDetail;