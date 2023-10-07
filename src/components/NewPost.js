import React from 'react';
import { Link } from 'react-router-dom';
import { format} from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';

const NewPost = () => {
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);
  const savePost = useStoreActions((actions) => actions.savePost);

  const handleSubmit = () => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    if (!postTitle && !postBody) return;
    const newPost = { id : id, title : postTitle, datetime : datetime, body : postBody};
    savePost(newPost);
  }

  return (
    <main className='app__newpost'>
      <h2>New Post</h2>
      <form className='app__newpostform' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='postTitle'>Title:</label>
        <input id="postTitle" type='text' required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
        <label htmlFor='postBody'>Post:</label>
        <textarea id='postBody' required value={postBody} onChange={(e) => setPostBody(e.target.value)} />
        <Link to={'/'}><button  type='submit' onClick={() => handleSubmit()}>Submit</button></Link>
      </form>
    </main>
  )
}

export default NewPost
