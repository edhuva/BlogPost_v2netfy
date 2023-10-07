import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <article className='app__post'>
      <Link className="app__posthead" to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='app__postDate'>{post.datetime}</p>
      </Link>
      <p className='app__postbody'>{(post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)}...`}</p>
    </article>
  )
}

export default Post
