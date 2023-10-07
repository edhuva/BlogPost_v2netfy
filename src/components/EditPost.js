import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';

const EditPost = ({ isLoading }) => {
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);
  const getPostById = useStoreState((state) => state.getPostById);

  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const editPost = useStoreActions((actions) => actions.editPost);

  const handleEdit = (id) => { 
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody};
        
    editPost(updatedPost);
  }
    
  const { id } = useParams();
  const post = getPostById(id);
    
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

  return (
    <main className='app__newpost'>
        { isLoading && <p>Post loading ...</p>}
        {!isLoading && editTitle && 
        <>
            <h2>Edit Post</h2>
            <form className='app__newpostform' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='postTitle'>Title:</label>
                <input id="postTitle" type='text' required value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                <label htmlFor='postBody'>Post:</label>
                <textarea id='postBody' required value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                <Link to={'/'}><button type='submit' onClick={() => handleEdit(post.id)}>Submit</button></Link>
            </form>
        </>
        }
        { !isLoading && !post && 
        <>
        <h2>Oops! post not found</h2>
        <p>well, that's disappointing</p>
        <p> <Link to='/'>Visit Our Homepage.</Link></p>
        </>}
    </main>
  )
}

export default EditPost