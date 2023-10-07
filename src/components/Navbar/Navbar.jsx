import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import { useStoreState } from 'easy-peasy';

const Navbar = () => {
  const { width } = useWindowSize();
  const postCount = useStoreState((state) => state.postCount);
  
  return (
    <nav className='app__navbar gradient__bg'>
        <div className="app__Links">
            <Link to='/' className='app__logo'>Edhuva_Blog</Link>
            <Link to='/cart' className="app__cart">
                <p className='app__navtxt'> {postCount} Blog Posts</p>
                <div className='app__carticon'>
                    {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
                </div>
            </Link>
        </div>
      
    </nav>
  )
}

export default Navbar
