import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='app__missing'>
      <h2>Page not found </h2>
      <p>Well, that's disappointing.</p>
      <p>
        <Link to='/'>Visit Our Homepage</Link>
      </p>
    </main>
  )
}

export default Missing
