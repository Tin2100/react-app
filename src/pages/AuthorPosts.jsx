import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../Components/PostItem';

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section>
        {posts.length > 0 ? <div className="container posts_container">
            {
                posts.map(({id, thumbnail, catergory, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} catergory={catergory} title={title} description={desc} authorID={authorID} />)
            }
        </div> : <h2 className='center'>No Posts Found</h2>}
    </section>
  )
}

export default AuthorPosts