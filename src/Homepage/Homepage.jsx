import React from 'react'
import Hero from './Hero';
import './Homepage.css';
import KeyPointsTable from './KeyPointsTable';

const Homepage = () => {
  return (
    <div className='homeContainer'>
        <Hero className='hero' />
        <div className='line'><span></span></div>
        <KeyPointsTable />
    </div>
  )
}

export default Homepage;