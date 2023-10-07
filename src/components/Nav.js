import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResults = useStoreActions((actions) => actions.setSearchResults);
  
  useEffect(() => {
    const filterdResults = posts.filter( post => ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filterdResults.reverse());
  }, [posts, search, setSearchResults]) 

  return (
    <nav className='Nav gradient__bg'>
        <form className='app__searchform' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='search'>Search Posts</label>
          <input id='search' type='text' placeholder='Search Posts' value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
        <ul>
           <Link to="/"> <li>Home</li></Link>
           <Link to="/post"> <li>Post</li></Link>
          <Link to="/about"><li>About</li></Link>
        </ul>
    </nav>
  )
}

export default Nav
