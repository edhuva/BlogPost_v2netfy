import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = ({isLoading, fetchError}) => {
  const { id } = useParams();
  const getPostById = useStoreState((state) => state.getPostById);
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const post = getPostById(id);
  
  const handleDelete = (id) => {
    deletePost(id);
  }

  return (
    <main className='app__postpage'>
      <article className='app__postt'>
      { isLoading && <p className='msgStatus'>Loading post...</p>}
      { !isLoading && fetchError && <p className='msgStatus' style={{color: "red"}}>{fetchError}</p>}
        {!isLoading && !fetchError && post ? (
        <> 
          <div className='app__posthead'>
            <div className='app__postheader'>
              <h2>{post.title}</h2>
              <div className='app__edit'>
                <Link to={`/edit/${post.id}`}><button className='app__editbtn'>Edit Post</button></Link>
                <Link to='/'> 
                  <FaTrashAlt className='app__postbtn' role='button' tabIndex={0} aria-label={`Delete post ${post.id}`} onClick={() => handleDelete(post.id)}/>
                </Link>
              </div>
            </div>  
            <p className='app__postDate'>{post.datetime}</p>
          </div>
      
          <p className='app__postbody'>{post.body}</p>
        </>) : !isLoading && (
          <p style={{marginTop: "2rem"}}> No post to display</p>
        )
        }
        { !isLoading && fetchError && !post && 
        <>
        <h2>Oops! post not found</h2>
        <p>well, that's disappointing</p>
        <p> <Link to='/'>Visit Our Homepage.</Link></p>
        </>}
      </article>
    </main>
  )
}

export default PostPage

