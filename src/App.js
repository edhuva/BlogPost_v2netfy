import React, { useEffect } from 'react';
import { Navbar } from './components';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { Route, Routes } from 'react-router-dom';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';
import './App.css';

const App = () => {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])
  
  return (
    <div className='app'>
        <div className='headerTop'>
        <Navbar />
        <Nav />
        </div>
        
        <div className='app_content'>
          <Routes>
            <Route path="/"  exact element={<Home isLoading={isLoading} fetchError={fetchError} />} />
            <Route path="/post/:id" element={<PostPage isLoading={isLoading} fetchError={fetchError}/>} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/edit/:id" element={<EditPost isLoading={isLoading} />} />
            <Route path="/about" Component={About} />
            <Route path="/missing" Component={Missing} />
          </Routes>
        </div>
      <Footer />
    </div>
  )
}

export default App