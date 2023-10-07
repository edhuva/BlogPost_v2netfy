import React from 'react';
import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({isLoading, fetchError}) => {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <main className='app__Home'>
      { isLoading && <p className='msgStatus'>Loading posts ...</p>}
      { !isLoading && fetchError && <p className='msgStatus' style={{color: "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError &&
        <>
          { searchResults.length  > 0 ?  <Feed posts={searchResults} />
          :  <p style={{marginTop: "2rem"}}> No posts to display</p>
          }
        </>
      }
    </main>
  )
}

export default Home
