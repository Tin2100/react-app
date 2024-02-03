import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/avatar1.jpg';

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/asdf`} className='post_author'>
      <div className="post_author_avatar">
          <img src={Avatar} alt="" />
      </div>
      <div className="post_auhtor_details">
        <h5>by: Earnest Strong</h5>
        <small>Just now</small>
      </div>
    </Link>
  )
}

export default PostAuthor