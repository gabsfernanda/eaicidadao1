/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

// Desestruturar props (obter apenas as propriedades necessárias)
function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={ author.avatar } />
      <div className="details">
        <span>{ author.name }</span>
        <span>{ date }</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {/* Mapear comments para cada item */}
      { comments.map(comment => (
        <div key={ comment.id } className="comment">
          <img className="avatar" src={ comment.author.avatar } />
          <p>
            <span>{ comment.author.name }</span>
            { comment.content }
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, img, comments }) {
  return (
    <div className="post">
      <PostHeader author={ author } date={ date } />
      <p className="post-content">{ content }</p>
      <img className = "post-img" src = { img }/>
      <PostComments comments={ comments } />
    </div>
    
  );
}

export default PostItem;