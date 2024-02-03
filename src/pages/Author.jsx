import React, { useState } from 'react'
import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'

import { Link } from 'react-router-dom'

const authorsData = [
{id: 1, avatar: Avatar1, name: 'Ernest Strong', posts: 4},
{id: 2, avatar: Avatar2, name: 'Dane Arms', posts: 4},
{id: 3, avatar: Avatar3, name: 'Garren Elbow', posts: 4},
{id: 4, avatar: Avatar4, name: 'Darly Nose', posts: 4}
]

const Author = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
   <section className="authors">
    {authors.length > 0 ? <div className="container authors__container">
    {
     authors.map(({id, avatar, name, posts}) => {
      return <Link key={id} to={`/posts/users/${id}`} className='author'>
       <div className="author__avatar">
      <img src={avatar} alt={`Image of ${name}`} />
      </div>
      <div className="author__info">
        <h4>{name}</h4>
        <p>{posts}</p>

      </div>

      </Link>
     })
    }
    </div> : <h2 className='center'>No users/authors found.</h2>}
   
   </section> 
  )
}

export default Author
